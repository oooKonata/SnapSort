<script setup lang="ts" generic=" T extends {id: string, children: T[]}">
  import { OCascader } from '../../../components/common/o-cascader'
  import { fileTree } from '@/layouts/mock/fileTree'
  import { OIcon } from '../../../components/common/o-icon'
  import { OOption } from '@/components/common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { FileItem } from '@/layouts/types'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'

  const { mousePosition, fileItemContext } = storeToRefs(useFileStore())

  const handleContextMenu = (data: FileItem, event: MouseEvent) => {
    mousePosition.value.x = event.clientX
    mousePosition.value.y = event.clientY
    fileItemContext.value = data
  }
</script>

<template>
  <div class="file-cascader">
    <OCascader :source="fileTree">
      <template #default="{ optionData, active }">
        <OOption :isActive="active" @contextmenu.prevent="handleContextMenu(optionData, $event)">
          <template #left>
            <OIcon
              :src="
                optionData.type === 'folder'
                  ? loadStaticResource('/icons/sidebar-file.svg')
                  : loadStaticResource('/icons/sidebar-page.svg')
              " />
            <label>{{ optionData.name }}</label>
          </template>
          <template #right v-if="optionData.type === 'folder'">
            <OIcon :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
          </template>
        </OOption>
      </template>
    </OCascader>
  </div>
</template>

<style scoped lang="scss">
  .file-cascader {
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 248px;
    height: 100vh;
    padding: 8px 8px 0 8px;
    position: relative;
    @include divider-right-dark;
  }
</style>
