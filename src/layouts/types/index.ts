export interface NavList {
  id: string
  label: string
  icon?: string
  disabled?: boolean
  meta?: Record<string, any>
}
export interface FileItem {
  id: string
  name: string
  type: 'file' | 'folder'
  parentId: string | null
  children: FileItem[]
  createdAt: Date
  updatedAt: Date
}
