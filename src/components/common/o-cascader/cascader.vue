<script setup lang="ts">
  import { ref, computed, inject, provide, CSSProperties } from 'vue'
  import { depthKey } from '../constants/key'
  import FileInfo from '@/components/features/FileInfo.vue'
  import { FileItem } from '@/layouts/types'

  defineOptions({
    name: 'OCascader',
  })

  const props = defineProps<{
    source: FileItem[]
    parentData?: FileItem
  }>()

  const emit = defineEmits<{
    (e: 'child-context-menu', data: FileItem, event: MouseEvent): void
  }>()

  const depth = inject(depthKey, ref(0))
  const childDepth = computed(() => depth.value + 1)
  provide(depthKey, childDepth)

  const activeIds = ref<Set<string>>(new Set())

  const childStyles = computed((): CSSProperties => {
    return {
      position: 'absolute',
      top: '0',
      left: '248px',
      width: '248px',
      padding: '8px 8px 0 8px',
    }
  })

  const expandSub = (data: FileItem) => {
    activeIds.value.add(data.id)
    // 剔除同级其他 id
    props.source.map(item => {
      if (item.id !== data.id) {
        activeIds.value.delete(item.id)
      }
    })
  }
</script>

<template>
  <div v-for="(item, index) in source" :key="index" class="o-cascader" @click="expandSub(item)">
    <slot :data="item" :parentData="parentData" :depth="depth" :active="activeIds.has(item.id)" />

    <template v-if="activeIds.has(item.id)">
      <div
        class="o-cascader__child"
        :style="childStyles"
        @contextmenu.prevent.stop="emit('child-context-menu', item, $event)">
        <OCascader
          :source="item.child!"
          :parentData="item"
          @child-context-menu="(child, event) => emit('child-context-menu', child, event)">
          <template
            v-for="(_, slotName) in $slots"
            #[slotName]="scope: { data: FileItem, parentData: FileItem, depth: number, active: boolean }">
            <slot :name="slotName" v-bind="scope" />
          </template>
        </OCascader>
        <FileInfo v-if="item.type !== 'folder'" :source="item" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .o-cascader {
    display: flex;
    flex-direction: column;
    gap: 1px;

    &__child {
      display: flex;
      flex-direction: column;
      gap: 1px;
      height: 100vh;
      @include divider-right-dark;
    }
  }
</style>
