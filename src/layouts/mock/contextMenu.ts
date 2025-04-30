import { ref } from 'vue'
import { ContextMenuItem } from '../types'
import { loadStaticResource } from '@/assets'

export const fileContextMenuList = ref<ContextMenuItem[]>([
  {
    id: 'create-new-folder',
    icon: loadStaticResource('/icons/sidebar-file.svg'),
    name: '新建文件夹',
    parentId: '',
    tip: '',
    meta: {},
    children: [],
  },
  {
    id: 'order',
    name: '排序',
    icon: loadStaticResource('/icons/sidebar-file.svg'),
    parentId: '',
    tip: '',
    meta: {},
    children: [
      {
        id: 'name',
        name: '名称',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: 'order',
        tip: '',
        meta: { selected: true },
        children: [],
      },
      {
        id: 'type',
        name: '种类',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: 'order',
        tip: '',
        meta: { selected: false },
        children: [],
      },
      {
        id: 'size',
        name: '大小',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: 'order',
        tip: '',
        meta: { selected: false },
        children: [],
      },
      {
        id: 'mark',
        name: '标签',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        parentId: 'order',
        tip: '',
        meta: { selected: false },
        children: [],
      },
      {
        id: 'create-time',
        name: '添加时间',
        parentId: '',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        tip: '',
        meta: { selected: false },
        children: [],
      },
      {
        id: 'update-time',
        name: '修改时间',
        parentId: 'order',
        icon: loadStaticResource('/icons/sidebar-file.svg'),
        tip: '',
        meta: { selected: false },
        children: [],
      },
    ],
  },
])
