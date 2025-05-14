<script setup lang="ts">
  import { MARK_COLOR, MARK_COLOR_MAP } from '@/enums'
  import { OIcon } from '../common/o-icon'
  import { loadStaticResource } from '@/assets'

  const props = defineProps<{
    source: MARK_COLOR[]
  }>()

  const convertMarks = (marks: string[]): string[] => {
    return marks.map(mark => MARK_COLOR_MAP[mark as MARK_COLOR])
  }

  const convertedMarks = convertMarks(props.source).slice(0, 3)
</script>

<template>
  <div class="file-marks" :style="{ width: `${(convertedMarks.length - 1) * 5 + 20}px` }">
    <OIcon
      v-for="(item, index) in convertedMarks"
      class="icon"
      :src="loadStaticResource(`/icons/mark-${item}-border.svg`)"
      :style="{ right: `${(convertedMarks.length - 1 - index) * 5}px`, zIndex: convertedMarks.length - index }" />
  </div>
</template>

<style scoped lang="scss">
  .file-marks {
    display: flex;
    align-items: center;
    position: relative;
    height: 20px;

    .icon {
      position: absolute;
    }
  }
</style>
