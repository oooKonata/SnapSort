<script setup lang="ts">
  import FileCascader from '@/views/file/components/FileCascader.vue'
  import FileHeader from './components/FileHeader.vue'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'
  import { fileTree } from '@/layouts/mock/fileTree'
  import { MENU_TYPE } from '@/enums'

  const { currentFile, mousePosition, fileMenuContext } = storeToRefs(useFileStore())

  const handleContextMenu = (event: MouseEvent) => {
    ;[mousePosition.value.x, mousePosition.value.y] = [event.clientX, event.clientY]
    fileMenuContext.value = { type: MENU_TYPE.EXTRA, context: currentFile.value ? [currentFile.value] : fileTree.value }
  }
</script>

<template>
  <div class="file-view">
    <FileHeader />
    <div class="scroll-view" @contextmenu.prevent="handleContextMenu($event)">
      <FileCascader />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .file-view {
    .scroll-view {
      overflow: scroll;
    }
  }
</style>
