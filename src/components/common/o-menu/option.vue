<script setup lang="ts">
  import { ref } from 'vue'

  defineOptions({
    name: 'OOption',
  })

  defineProps<{
    disabled?: boolean
    isActive?: boolean
  }>()

  const emits = defineEmits<{
    (e: 'option-mouseenter'): void
    (e: 'option-mouseleave'): void
  }>()

  const simuHover = ref(false)
  const simuActive = ref(false)

  const handleOptionMouseEnter = () => {
    simuHover.value = true
    emits('option-mouseenter')
  }

  const handleOptionMouseLeave = () => {
    simuHover.value = false
    simuActive.value = false
    emits('option-mouseleave')
  }
</script>

<template>
  <div
    :class="[
      'o-option',
      { 'simu-active': simuActive },
      { 'simu-hover': simuHover },
      { 'is-disabled': disabled },
      { 'is-active': isActive },
    ]"
    @mousedown="simuActive = true"
    @mouseup="simuActive = false"
    @mouseenter="handleOptionMouseEnter"
    @mouseleave="handleOptionMouseLeave">
    <div v-if="$slots.left" class="o-option__left">
      <slot name="left" />
    </div>
    <div v-if="$slots.right" class="o-option__right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .o-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border-radius: 6px;
    color: $color-dark-80;
    font-size: 14px;
    line-height: 20px;
    user-select: none;
    cursor: inherit;
    position: relative;

    // background-color: aquamarine;

    &__left {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__right {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 4px;
    }

    :deep(*) {
      @include text-ellipsis;
    }

    &.simu-hover {
      @include simu-hover;
    }

    &.simu-active {
      @include simu-active;
    }

    &.is-disabled {
      @include is-disabled;
    }

    &.is-active {
      @include is-active;
    }
  }
</style>
