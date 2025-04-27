<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { ref } from 'vue'
  import OIcon from '@/components/common/o-icon'
  import { OOption, OOptionGroup } from '@/components/common/o-option'
  import { OptionList } from './types'

  const navList = ref<OptionList[]>([
    { id: 'search', label: '搜索', icon: loadStaticResource('/icons/sidebar-search.svg') },
    { id: 'home', label: '首页', icon: loadStaticResource('/icons/sidebar-home.svg') },
    { id: 'file', label: '文件', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'fav', label: '收藏', icon: loadStaticResource('/icons/sidebar-file.svg') },
  ])

  const markList = ref<OptionList[]>([
    { id: 'red', label: '红色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'orange', label: '橙色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'yellow', label: '黄色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'green', label: '绿色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'blue', label: '蓝色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'purple', label: '紫色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'gray', label: '灰色', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'work', label: '工作', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'private', label: '个人', icon: loadStaticResource('/icons/sidebar-file.svg') },
    { id: 'important', label: '重要', icon: loadStaticResource('/icons/sidebar-file.svg') },
  ])

  const setList = ref<OptionList[]>([
    { id: 'set', label: '设置', icon: loadStaticResource('/icons/sidebar-set.svg') },
    { id: 'trash', label: '垃圾箱', icon: loadStaticResource('/icons/sidebar-home.svg') },
  ])

  const showMarkList = ref(true)
  const activeId = ref('home')

  const handleRoute = (data: OptionList) => {
    activeId.value = data.id
  }
</script>

<template>
  <div class="sidebar-layout">
    <div class="profile">
      <OOption>
        <template #left>
          <OIcon :src="loadStaticResource('/images/avatar.jpg')" />
          <div class="info">
            <label>oooKonata's SnapSort </label>
            <OIcon :src="loadStaticResource('/icons/sidebar-arrow.svg')" />
          </div>
        </template>
        <template #right>
          <OIcon :src="loadStaticResource('/icons/sidebar-collapse.svg')" :size="24" interactive class="collapse" />
          <OIcon :src="loadStaticResource('/icons/sidebar-create.svg')" interactive :size="24" />
        </template>
      </OOption>
    </div>

    <div class="nav">
      <OOptionGroup>
        <OOption
          v-for="(item, index) in navList"
          :key="index"
          :isActive="item.id === activeId"
          @click="handleRoute(item)">
          <template #left>
            <OIcon :src="item.icon!" />
            <label>{{ item.label }}</label>
          </template>
        </OOption>
      </OOptionGroup>
    </div>

    <div class="mark">
      <OOptionGroup>
        <template #title>
          <OOption @click="showMarkList = !showMarkList">
            <template #left><label>标签</label></template>
            <template #right>
              <OIcon
                :class="showMarkList ? 'is-expand' : 'is-collapse'"
                :src="loadStaticResource('/icons/sidebar-arrow.svg')" />
            </template>
          </OOption>
        </template>
        <OOption
          v-if="showMarkList"
          v-for="(item, index) in markList"
          :key="index"
          :isActive="item.id === activeId"
          @click="handleRoute(item)">
          <template #left>
            <OIcon :src="item.icon!" />
            <label>{{ item.label }}</label>
          </template>
        </OOption>
      </OOptionGroup>
    </div>

    <div class="set">
      <OOptionGroup>
        <OOption
          v-for="(item, index) in setList"
          :key="index"
          :isActive="item.id === activeId"
          @click="handleRoute(item)">
          <template #left>
            <OIcon :src="item.icon!" />
            <label>{{ item.label }}</label>
          </template>
        </OOption>
      </OOptionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .sidebar-layout {
    width: 248px;
    height: 100vh;
    background-color: $color-bg;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @include divider-right;

    .profile {
      .info {
        display: flex;
        align-items: center;
      }

      .collapse {
        display: none;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }

      :deep(.o-option) {
        color: $color-dark-80;
        font-weight: 500;
        padding-right: 4px;
      }

      :deep(.o-option .o-option__right) {
        width: 56px;
      }
    }

    &:hover .collapse {
      display: flex;
    }

    .mark {
      flex: 1;
      overflow-y: scroll;

      .is-expand {
        :deep(img) {
          transform: rotate(0deg);
          transition: 0.1s ease-in-out;
        }
      }
      .is-collapse {
        :deep(img) {
          transform: rotate(-90deg);
          transition: 0.1s ease-in-out;
        }
      }
    }

    :deep(.o-option-group) {
      cursor: pointer;
    }

    :deep(.o-option-group .o-option__left) {
      color: $color-dark-60;
      font-weight: 500;
    }

    :deep(.o-option-group .o-option .o-option__right) {
      display: none;
    }

    :deep(.o-option-group .o-option:hover .o-option__right) {
      display: flex;
    }

    :deep(.o-option.is-active label) {
      color: $color-dark-80;
    }
  }
</style>
