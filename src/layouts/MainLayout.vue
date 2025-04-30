<script setup lang="ts">
  import { ref } from 'vue'
  import SidebarLayout from './SidebarLayout.vue'
  import ContextMenu from '@/components/features/ContextMenu.vue'
  import { storeToRefs } from 'pinia'
  import { useFileStore } from '@/store/fileStore'

  const sidebarWith = ref(248)
  const resizeState = ref(false)
  const isOnContextMenu = ref(false)

  const { fileItemContext } = storeToRefs(useFileStore())
</script>

<template>
  <div
    class="main-layout"
    @mousemove="sidebarWith = resizeState ? $event.clientX : sidebarWith"
    @mouseup="resizeState = false">
    <SidebarLayout v-model="resizeState" :sidebarWidth="sidebarWith" />
    <div class="content">
      <RouterView />
    </div>
    <div
      class="overlay"
      v-if="fileItemContext"
      @click="fileItemContext = isOnContextMenu ? fileItemContext : undefined">
      <ContextMenu @mouseenter="isOnContextMenu = true" @mouseleave="isOnContextMenu = false" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-layout {
    display: flex;
    overflow: hidden;

    .content {
      flex: 1;
      height: 100vh;
    }

    .overlay {
      background-color: $color-dark-10;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>
