import { ref } from 'vue'
import { ContextMenuItem } from '../types'

export const fileItemContextMenuList = ref<ContextMenuItem[]>([
  { id: 'create-new-folder', name: '新建文件夹', parentId: '1', children: [] },
  {
    id: 'order',
    name: '排序',
    parentId: '2',
    tip: '',
    children: [
      { id: 'name', name: '名称', parentId: '2-1', tip: '', children: [] },
      { id: 'type', name: '种类', parentId: '2-2', tip: '', children: [] },
      { id: 'size', name: '大小', parentId: '2-3', tip: '', children: [] },
      { id: 'mark', name: '标签', parentId: '2-4', tip: '', children: [] },
      { id: 'create-time', name: '添加时间', parentId: '2-5', tip: '', children: [] },
      { id: 'update-time', name: '修改时间', parentId: '2-6', tip: '', children: [] },
    ],
  },
])
