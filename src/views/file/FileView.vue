<script setup lang="ts">
  import FileCascader from '@/views/file/components/FileCascader.vue'
  import FileHeader from './components/FileHeader.vue'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'
  import { fileTree } from '@/layouts/mock/fileTree'

  const { currentFile, mousePosition, fileContext } = storeToRefs(useFileStore())

  const handleContextMenu = (event: MouseEvent) => {
    mousePosition.value.x = event.clientX
    mousePosition.value.y = event.clientY
    fileContext.value = { type: 'fileList', context: currentFile.value ? [currentFile.value!] : fileTree.value }
  }
</script>

<template>
  <div class="file-view">
    <FileHeader />
    <div class="scroll-view" @contextmenu="handleContextMenu($event)">
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
