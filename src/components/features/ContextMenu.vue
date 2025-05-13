<script setup lang="ts">
  import { OMenu, OOption } from '../common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { OIcon } from '../common/o-icon'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'
  import { computed, CSSProperties, ref } from 'vue'
  import { ContextMenuItem } from '@/layouts/types'
  import { v4 as uuidv4 } from 'uuid'
  import { cloneDeep } from 'lodash-es'
  import { fileTree } from '@/layouts/mock/fileTree'
  import { MENU_TYPE } from '@/enums'
  import { formatDate } from '@/utils/formatDate'

  const { mousePosition, fileMenuContext } = storeToRefs(useFileStore())
  const fileContextMenuList = ref<ContextMenuItem[]>([])

  if (fileMenuContext.value?.type === MENU_TYPE.FILE_ITEM) {
    fileContextMenuList.value = [
      {
        id: 'copy',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '复制',
        parentId: '',
        tip: '',
        meta: {},
        child: [],
      },
      {
        id: 'rename',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '重命名',
        parentId: '',
        tip: '',
        meta: {},
        child: [],
      },
      {
        id: 'delete',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '删除',
        parentId: '',
        tip: '',
        meta: {},
        child: [],
      },
    ]
  } else if (fileMenuContext.value?.type === MENU_TYPE.EXTRA) {
    fileContextMenuList.value = [
      {
        id: 'create-new-folder',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '新建文件夹',
        parentId: '',
        tip: '',
        meta: {},
        child: [],
      },
      {
        id: 'order',
        name: '排序',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: '',
        tip: '',
        meta: {},
        child: [
          {
            id: 'name',
            name: '名称',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: true },
            child: [],
          },
          {
            id: 'type',
            name: '种类',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            child: [],
          },
          {
            id: 'size',
            name: '大小',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            child: [],
          },
          {
            id: 'mark',
            name: '标签',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            child: [],
          },
          {
            id: 'create-time',
            name: '添加时间',
            parentId: '',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            tip: '',
            meta: { selected: false },
            child: [],
          },
          {
            id: 'update-time',
            name: '修改时间',
            parentId: 'order',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            tip: '',
            meta: { selected: false },
            child: [],
          },
        ],
      },
    ]
  }

  const styles = computed((): CSSProperties => {
    return {
      top: `${mousePosition.value.y}px`,
      left: `${mousePosition.value.x}px`,
    }
  })

  const handleClick = (data: ContextMenuItem) => {
    if (fileMenuContext.value?.type === MENU_TYPE.FILE_ITEM) {
      if (data.id === 'copy') {
        if (fileMenuContext.value.context.length === 1) {
          // fileContext.value.context[0].child.push(cloneDeep())
        }
      }
    }

    if (fileMenuContext.value?.type === MENU_TYPE.EXTRA) {
      if (data.id === 'create-new-folder') {
        if (fileMenuContext.value.context.length === 1) {
          fileMenuContext.value.context[0].child.push({
            id: uuidv4(),
            name: '新建文件夹',
            type: 'folder',
            parentId: fileMenuContext.value.context[0].id,
            child: [],
          })
        } else {
          fileMenuContext.value.context.push({
            id: uuidv4(),
            name: '新建文件夹',
            type: 'folder',
            parentId: '',
            child: [],
          })
        }
      }
    }

    fileMenuContext.value = undefined
  }
</script>

<template>
  <div class="context-menu" :style="styles">
    <OMenu :source="fileContextMenuList">
      <template #default="{ optionData, active }">
        <OOption :isActive="active" @click.stop="handleClick(optionData)">
          <template #left>
            <OIcon v-if="optionData.icon" :src="optionData.icon" />
            <label>{{ optionData.name }}</label>
          </template>
          <template #right>
            <label class="tip">{{ optionData.tip }}</label>
            <OIcon v-if="optionData.child.length" :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
            <OIcon v-if="optionData.meta?.selected" :src="loadStaticResource('/icons/menu-select.svg')" :size="16" />
          </template>
        </OOption>
      </template>
    </OMenu>
  </div>
</template>

<style scoped lang="scss">
  .context-menu {
    position: absolute;
    width: 248px;
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1px;
    @include shadow-menu;

    .tip {
      font-size: 12px;
      color: $color-dark-40;
    }
  }
</style>
