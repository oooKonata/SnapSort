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

  const { mousePosition, fileContext } = storeToRefs(useFileStore())
  console.log('fileContext: ', fileContext.value)
  const fileContextMenuList = ref<ContextMenuItem[]>([])

  if (fileContext.value?.type === 'fileItem') {
    fileContextMenuList.value = [
      {
        id: 'copy',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '复制',
        parentId: '',
        tip: '',
        meta: {},
        children: [],
      },
      {
        id: 'delete',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '删除',
        parentId: '',
        tip: '',
        meta: {},
        children: [],
      },
    ]
  } else if (fileContext.value?.type === 'fileList') {
    fileContextMenuList.value = [
      {
        id: 'create-new-folder',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        name: '新建文件夹',
        parentId: '',
        tip: '',
        meta: {},
        children: [],
      },
      {
        id: 'order',
        name: '排序',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: '',
        tip: '',
        meta: {},
        children: [
          {
            id: 'name',
            name: '名称',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: true },
            children: [],
          },
          {
            id: 'type',
            name: '种类',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            children: [],
          },
          {
            id: 'size',
            name: '大小',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            children: [],
          },
          {
            id: 'mark',
            name: '标签',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            parentId: 'order',
            tip: '',
            meta: { selected: false },
            children: [],
          },
          {
            id: 'create-time',
            name: '添加时间',
            parentId: '',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            tip: '',
            meta: { selected: false },
            children: [],
          },
          {
            id: 'update-time',
            name: '修改时间',
            parentId: 'order',
            icon: loadStaticResource('/icons/sidebar-file.svg'),
            tip: '',
            meta: { selected: false },
            children: [],
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
    if (fileContext.value?.type === 'fileItem') {
      if (data.id === 'copy') {
        if (fileContext.value.context.length === 1) {
          // fileContext.value.context[0].children.push(cloneDeep())
        }
      }
    }

    if (fileContext.value?.type === 'fileList') {
      if (data.id === 'create-new-folder') {
        if (fileContext.value.context.length === 1) {
          fileContext.value.context[0].children.push({
            id: uuidv4(),
            name: '新建文件夹',
            type: 'folder',
            parentId: fileContext.value.context[0].id,
            children: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        } else {
          fileContext.value.context.push({
            id: uuidv4(),
            name: '新建文件夹',
            type: 'folder',
            parentId: '',
            children: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        }
      }
    }

    fileContext.value = undefined
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
            <OIcon v-if="optionData.children.length" :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
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
