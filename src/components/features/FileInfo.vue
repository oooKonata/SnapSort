<script setup lang="ts">
  import { MARK_COLOR } from '@/enums'
  import { FileItem } from '@/layouts/types'

  defineProps<{
    source: FileItem
  }>()
</script>

<template>
  <div class="file-info">
    <div class="file-info__preview">preview</div>
    <div class="file-info__title">
      <div class="name">{{ source.name }}</div>
      <div class="format">{{ source.meta?.format }} - {{ source.meta?.size }}</div>
    </div>
    <div class="file-info__detail">
      <div class="title">信息</div>
      <div class="detail">
        <div v-if="source.meta?.createdAt">
          <label>创建时间</label>
          <label class="msg">{{ source.meta?.createdAt }}</label>
        </div>
        <div v-if="source.meta?.updatedAt">
          <label>修改时间</label>
          <label class="msg">{{ source.meta?.updatedAt }}</label>
        </div>
        <div v-if="source.meta?.dimensions">
          <label>尺寸</label>
          <label class="msg">{{ source.meta?.dimensions }}</label>
        </div>
        <div v-if="source.meta?.resolution">
          <label>分辨率</label>
          <label class="msg">{{ source.meta?.resolution }}</label>
        </div>
        <div v-if="source.meta?.colorSpace">
          <label>色彩空间</label>
          <label class="msg">{{ source.meta?.colorSpace }}</label>
        </div>
        <div v-if="source.meta?.ICCProfile">
          <label>颜色描述文件</label>
          <label class="msg">{{ source.meta?.ICCProfile }}</label>
        </div>
      </div>
    </div>
    <div class="file-info__mark">
      <div class="title">标记</div>
      <div class="mark">
        <div
          v-for="(item, index) in source.meta?.mark"
          :key="index"
          :class="[
            'item',
            { 'mark-red': item === MARK_COLOR.RED },
            { 'mark-orange': item === MARK_COLOR.ORANGE },
            { 'mark-yellow': item === MARK_COLOR.YELLOW },
            { 'mark-green': item === MARK_COLOR.GREEN },
            { 'mark-blue': item === MARK_COLOR.BLUE },
            { 'mark-purple': item === MARK_COLOR.PURPLE },
            { 'mark-gray': item === MARK_COLOR.GRAY },
            { 'mark-none': item === MARK_COLOR.NONE },
          ]">
          <label>{{ item }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .file-info {
    flex: 1;
    line-height: 1.2;

    &__preview {
      width: 100%;
      aspect-ratio: 1.5;
      background-color: aquamarine;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
    }

    &__title {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 16px;

      .name {
        font-size: 14px;
        font-weight: 500;
        color: $color-dark-80;
      }

      .format {
        font-size: 12px;
        color: $color-dark-60;
      }
    }

    &__detail {
      font-size: 12px;
      color: $color-dark-60;
      margin-top: 12px;

      .title {
        font-size: 13px;
        font-weight: 500;
        color: $color-dark-80;
        margin-bottom: 8px;
      }

      .detail {
        display: flex;
        flex-direction: column;
        gap: 8px;

        div {
          display: flex;
          justify-content: space-between;

          .msg {
            color: $color-dark-80;
            font-weight: 500;
          }
        }
      }
    }

    &__mark {
      font-size: 12px;
      color: $color-dark-60;
      margin-top: 14px;

      .title {
        font-size: 13px;
        font-weight: 500;
        color: $color-dark-80;
        margin-bottom: 8px;
      }
      .mark {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;

        .item {
          height: 16px;
          line-height: 16px;
          padding: 0 4px;
          border-radius: 4px;
        }

        .mark-red {
          background-color: rgba($color: #f73428, $alpha: 0.16);
          color: #f73428;
        }
        .mark-orange {
          background-color: rgba($color: #e57c00, $alpha: 0.18);
          color: #e57c00;
        }
        .mark-yellow {
          background-color: rgba($color: #e6b300, $alpha: 0.28);
          color: #c59b00;
        }
        .mark-green {
          background-color: rgba($color: #0fb528, $alpha: 0.2);
          color: #0fb528;
        }
        .mark-blue {
          background-color: rgba($color: #006ff3, $alpha: 0.18);
          color: #006ff3;
        }
        .mark-purple {
          background-color: rgba($color: #9b48c5, $alpha: 0.18);
          color: #9b48c5;
        }
        .mark-gray {
          background-color: rgba($color: #6c6d71, $alpha: 0.2);
          color: #6c6d71;
        }
        .mark-none {
          background-color: rgba($color: #6c6d71, $alpha: 0.1);
          color: #6c6d71;
        }
      }
    }
  }
</style>
