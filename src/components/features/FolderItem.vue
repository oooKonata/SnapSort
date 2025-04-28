<script setup lang="ts">
  import { fileTree } from '@/layouts/mock/fileTree'
  import { loadStaticResource } from '@/assets'
  import { OOption, OOptionNested } from '../common/o-option'
  import OIcon from '../common/o-icon'
</script>

<template>
  <div class="folder-item">
    <OOptionNested :source="fileTree">
      <template #default="{ optionData, depth }">
        <OOption>
          <template #left>
            <OIcon
              :src="
                optionData.type === 'folder'
                  ? loadStaticResource('/icons/sidebar-file.svg')
                  : loadStaticResource('/icons/sidebar-page.svg')
              " />
            <label>{{ optionData.name }}</label>
          </template>
          <template #right>
            <OIcon :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
          </template>
        </OOption>
      </template>
    </OOptionNested>
  </div>
</template>

<style scoped lang="scss">
  .folder-item {
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 248px;
    height: 100vh;
    padding: 8px;
    @include divider-right-file;
  }
</style>
<!-- <script setup lang="ts" generic="T extends { children: T[] }">
  import { ref, computed, inject, provide } from 'vue'
  import { depthKey } from './constants/key'

  defineProps<{
    source: T[]
  }>()

  // 深度管理
  const depth = inject(depthKey, ref(0))
  const childDepth = computed(() => depth.value + 1)
  provide(depthKey, childDepth)
</script>

<template>
  <div v-for="(item, index) in source" :key="index" class="o-option-nested">
    <slot :optionData="item" :depth="depth" />

    <template v-if="item.children.length">
      <FolderItem :source="item.children!">
        <template v-for="(_, slotName) in $slots" #[slotName]="scope: { optionData: T, depth: number }">
          <slot :name="slotName" v-bind="scope" />
        </template>
      </FolderItem>
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

  :deep(.option-nested) {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
</style> -->
