<script setup lang="ts" generic=" T extends {id: string, child: T[]}">
  import { OCascader } from '../../../components/common/o-cascader'
  import { fileTree } from '@/layouts/mock/fileTree'
  import { OIcon } from '../../../components/common/o-icon'
  import { OOption } from '@/components/common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { FileItem } from '@/layouts/types'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'

  const { currentFile, mousePosition, fileMenuContext } = storeToRefs(useFileStore())

  const handleItemContextMenu = (data: FileItem, event: MouseEvent) => {
    ;[mousePosition.value.x, mousePosition.value.y] = [event.clientX, event.clientY]
    fileMenuContext.value = { type: 'fileItem', context: [data] }
  }

  const handleChildContextMenu = (data: FileItem, event: MouseEvent) => {
    ;[mousePosition.value.x, mousePosition.value.y] = [event.clientX, event.clientY]
    fileMenuContext.value = { type: 'emptyArea', context: [data] }
  }

  const handleRootContextMenu = (event: MouseEvent) => {
    ;[mousePosition.value.x, mousePosition.value.y] = [event.clientX, event.clientY]
    fileMenuContext.value = { type: 'emptyArea', context: fileTree.value }
  }
</script>

<template>
  <div class="file-cascader" @contextmenu.prevent.stop="handleRootContextMenu($event)">
    <OCascader :source="fileTree" @child-context-menu="handleChildContextMenu">
      <template #default="{ data, parentData, active }">
        <OOption
          :isActive="active"
          @contextmenu.prevent.stop="handleItemContextMenu(data, $event)"
          @click="currentFile = data">
          <template #left>
            <OIcon
              :src="
                data.type === 'folder'
                  ? loadStaticResource('/icons/sidebar-file.svg')
                  : loadStaticResource('/icons/sidebar-page.svg')
              " />
            <label>{{ data.name }}</label>
          </template>
          <template #right v-if="data.type === 'folder'">
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
