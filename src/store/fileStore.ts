import { FileItem } from '@/layouts/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileStore = defineStore('ss-file', () => {
  // const fileTree = ref<FileItem[]>([])
  // const currentFolderId = ref<string | null>(null)
  // const breadcrumbs = ref<{ id: string; name: string }[]>([])

  // const findFolderById = (items: FileItem[], targetId: string | null): FileItem | undefined => {
  //   for (const item of items) {
  //     if (item.id === targetId) return item
  //     if (item.type === 'folder' && item.children) {
  //       const found = findFolderById(item.children, targetId)
  //       if (found) return found
  //     }
  //   }
  // }

  // const currentFileList = computed(() => {
  //   return findFolderById(fileTree.value, currentFolderId.value)?.children ?? []
  // })

  // const createFolder = (name: string) => {
  //   const newFolder: FileItem = {
  //     id: uuidv4(),
  //     name,
  //     type: 'folder',
  //     parentId: currentFolderId.value,
  //     children: [],
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   }

  //   if (currentFolderId.value) {
  //     const parent = findFolderById(fileTree.value, currentFolderId.value)
  //     parent?.children.push(newFolder)
  //   } else {
  //     fileTree.value.push(newFolder)
  //   }
  // }

  const mousePosition = ref<{ x: number; y: number }>({ x: 0, y: 0 })
  const fileContext = ref<{ type: string; context: FileItem[] }>()

  return { mousePosition, fileContext }
})
