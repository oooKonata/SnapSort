<script setup lang="ts">
  import { MARK_COLOR } from '@/enums'
  import { OIcon } from '../common/o-icon'
  import { loadStaticResource } from '@/assets'

  defineProps<{
    source: MARK_COLOR[]
  }>()
</script>

<template>
  <div class="file-marks">
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-red-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-orange-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-yellow-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-green-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-blue-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-purple-border.svg')" />
    <OIcon class="icon" :src="loadStaticResource('/icons/mark-gray-border.svg')" />
  </div>
</template>

<style scoped lang="scss">
  .file-marks {
    display: flex;
    align-items: center;
    background-color: coral;
    .icon {
      background-color: aqua;
    }
  }
</style>
