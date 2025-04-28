<script setup lang="ts">
  import { ref, watch } from 'vue'
  import SidebarLayout from './SidebarLayout.vue'

  const sidebarWith = ref(248)
  const resizeState = ref(false)
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
  </div>
</template>

<style scoped lang="scss">
  .main-layout {
    display: flex;
    overflow: hidden;

    .content {
      flex: 1;
      height: 100vh;
      overflow: scroll;
    }
  }
</style>
