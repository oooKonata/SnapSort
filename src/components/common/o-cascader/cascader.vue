<script setup lang="ts" generic="T extends { id: string, child: T[] }">
  import { ref, computed, inject, provide, CSSProperties } from 'vue'
  import { depthKey } from '../constants/key'

  defineOptions({
    name: 'OCascader',
  })

  const props = defineProps<{
    source: T[]
    parentData?: T
  }>()

  const emit = defineEmits<{
    (e: 'child-context-menu', data: T, event: MouseEvent): void
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

  const expandSub = (data: T) => {
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

    <template v-if="item.child.length && activeIds.has(item.id)">
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
            #[slotName]="scope: { data: T, parentData: T, depth: number, active: boolean }">
            <slot :name="slotName" v-bind="scope" />
          </template>
        </OCascader>
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
