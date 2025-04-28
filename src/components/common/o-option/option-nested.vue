<script setup lang="ts" generic="T extends { id: string, children: T[] }">
  import { ref, computed, inject, provide, CSSProperties } from 'vue'
  import { depthKey } from '../constants/key'

  defineOptions({
    name: 'OOptionNested',
  })

  defineProps<{
    source: T[]
  }>()

  const depth = inject(depthKey, ref(0))
  const childDepth = computed(() => depth.value + 1)
  provide(depthKey, childDepth)

  const expandedIds = ref<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    if (expandedIds.value.has(id)) {
      expandedIds.value.delete(id)
    } else {
      expandedIds.value.add(id)
    }
  }

  const isExpanded = (id: string) => expandedIds.value.has(id)

  const childStyles = computed((): CSSProperties => {
    return {
      position: 'absolute',
      top: 0,
      left: '248px',
      zIndex: 9 + childDepth.value,
      visibility: 'hidden',
    }
  })
</script>

<template>
  <div v-for="(item, index) in source" :key="index" class="o-option-nested" @click="toggleExpand(item.id)">
    <slot :optionData="item" :depth="depth" />

    <template v-if="item.children.length && isExpanded(item.id)">
      <OOptionNested :source="item.children!" :style="childStyles">
        <template v-for="(_, slotName) in $slots" #[slotName]="scope: { optionData: T, depth: number }">
          <slot :name="slotName" v-bind="scope" />
        </template>
      </OOptionNested>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .o-option-nested {
    display: flex;
    flex-direction: column;
    gap: 1px;
    position: relative;
  }
</style>
