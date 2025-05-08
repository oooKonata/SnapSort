<script setup lang="ts">
  import { fileContextMenuList } from '@/layouts/mock/contextMenu'
  import { OMenu, OOption } from '../common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { OIcon } from '../common/o-icon'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'
  import { computed, CSSProperties } from 'vue'
  import { ContextMenuItem } from '@/layouts/types'
  import { v4 as uuidv4 } from 'uuid'

  const { mousePosition, fileItemContext } = storeToRefs(useFileStore())

  const styles = computed((): CSSProperties => {
    return {
      top: `${mousePosition.value.y}px`,
      left: `${mousePosition.value.x}px`,
    }
  })

  const handleClick = (data: ContextMenuItem) => {
    if (data.id === 'create-new-folder') {
      if (fileItemContext.value?.length === 1) {
        fileItemContext.value[0].children.push({
          id: uuidv4(),
          name: '新建文件夹',
          type: 'folder',
          parentId: data.id,
          children: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      } else {
        fileItemContext.value?.push({
          id: uuidv4(),
          name: '新建文件夹',
          type: 'folder',
          parentId: data.id,
          children: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }

    fileItemContext.value = undefined
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
