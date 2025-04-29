<script setup lang="ts">
  import { fileItemContextMenuList } from '@/layouts/mock/contextMenu'
  import { OMenu, OOption } from '../common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { OIcon } from '../common/o-icon'
</script>

<template>
  <div class="context-menu">
    <OMenu :source="fileItemContextMenuList">
      <template #default="{ optionData, depth, active }">
        <OOption :isActive="active">
          <template #left>
            <OIcon :src="loadStaticResource('/icons/sidebar-file.svg')" />
            <label>{{ optionData.name }}</label>
          </template>
          <template #right>
            <OIcon :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
          </template>
        </OOption>
      </template>
    </OMenu>
  </div>
</template>

<style scoped lang="scss"></style>
