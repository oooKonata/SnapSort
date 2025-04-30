<script setup lang="ts">
  import { fileContextMenuList } from '@/layouts/mock/contextMenu'
  import { OMenu, OOption } from '../common/o-menu'
  import { loadStaticResource } from '@/assets'
  import { OIcon } from '../common/o-icon'
  import { ContextMenuItem } from '@/layouts/types'
  import { ref } from 'vue'

  const fileOrder = ref('name')
  const fileOrderList = ['name', 'type', 'size', 'mark', 'create-time', 'update-time']

  // const handleContextMenu = (data: ContextMenuItem) => {
  //   if (data.id === 'create-new-folder') {
  //     console.log('创建文件夹')
  //   }
  //   if (fileOrderList.includes(data.id)) {
  //     fileOrder.value = data.id
  //   }
  // }
</script>

<template>
  <div class="context-menu">
    <OMenu :source="fileContextMenuList">
      <template #default="{ optionData, depth, active }">
        <OOption :isActive="active">
          <template #left>
            <OIcon v-if="optionData.icon" :src="optionData.icon" />
            <label>{{ optionData.name }}</label>
          </template>
          <template #right>
            <label class="tip">{{ optionData.tip }}</label>
            <OIcon v-if="optionData.children.length" :src="loadStaticResource('/icons/menu-more.svg')" :size="16" />
            <OIcon v-if="optionData.meta?.selected" :src="loadStaticResource('/icons/menu-select.svg')" :size="16" />
          </template>
        </OOption>
      </template>
    </OMenu>
  </div>
</template>

<style scoped lang="scss">
  .context-menu {
    position: absolute;
    width: 248px;
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1px;
    @include shadow-menu;

    .tip {
      font-size: 12px;
      color: $color-dark-40;
    }
  }
</style>
