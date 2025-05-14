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

  const convertedMarks = convertMarks(props.source)
  console.log('convertedMarks: ', convertedMarks)
</script>

<template>
  <div class="file-marks">
    <div v-for="(item, index) in convertedMarks">
      <OIcon class="icon" :src="loadStaticResource(`/icons/mark-${item}-border.svg`)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .file-marks {
    display: flex;
    align-items: center;
    // background-color: coral;
    position: relative;

    .icon {
      background-color: aqua;
    }
  }
</style>
