<script setup lang="ts">
  import FileCascader from '@/views/file/components/FileCascader.vue'
  import FileHeader from './components/FileHeader.vue'
</script>

<template>
  <div class="file-view">
    <FileHeader />
    <div class="scroll-view">
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
