<script
  setup
  lang="ts"
  generic="T extends { id: string, name: string, tip: string, meta: Record<string,any>,children: T[] }">
  import { ref, computed, inject, provide, CSSProperties, onMounted } from 'vue'
  import { depthKey } from '../constants/key'

  defineOptions({
    name: 'OMenu',
  })

  const props = defineProps<{
    source: T[]
    parentData?: T
  }>()

  const emits = defineEmits<{
    (e: 'option-click', data: T): void
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

  // 初始化 tip
  const initTip = (source: T[]) => {
    source.map(item => {
      if (item.children) {
        const selected = item.children.find(child => child.meta.selected)
        if (selected) {
          item.tip = selected.name
        }
      }
    })
  }

  const handleClick = (data: T, parentData?: T) => {
    if (parentData) {
      parentData.tip = data.name

      parentData.children.map(item => {
        if (item.id !== data.id) {
          item.meta!.selected = false
        } else {
          item.meta!.selected = true
        }
      })
    }
    emits('option-click', data)
  }

  onMounted(() => {
    initTip(props.source)
  })
</script>

<template>
  <div
    v-for="(item, index) in source"
    :key="index"
    class="o-menu"
    @mouseenter="expandSub(item)"
    @click="handleClick(item, parentData)">
    <slot :optionData="item" :parentData="parentData" :depth="depth" :active="activeIds.has(item.id)" />

    <template v-if="item.children.length && activeIds.has(item.id)">
      <div class="o-menu__children" :style="childStyles">
        <OMenu :source="item.children!" :parentData="item">
          <template
            v-for="(_, slotName) in $slots"
            #[slotName]="scope: { optionData: T, parentData: T, depth: number, active: boolean }">
            <slot :name="slotName" v-bind="scope" />
          </template>
        </OMenu>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .o-menu {
    display: flex;
    flex-direction: column;
    gap: 1px;
    position: relative;

    &__children {
      display: flex;
      flex-direction: column;
      gap: 1px;
      background-color: beige;
      border-radius: 8px;
      padding: 4px;
      @include shadow-menu;
    }
  }
</style>
