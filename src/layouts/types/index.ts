export interface NavList {
  id: string
  label: string
  icon: string
  disabled?: boolean
  meta?: Record<string, any>
}
export interface FileItem {
  id: string
  name: string
  type: 'file' | 'folder'
  parentId: string | null
  child: FileItem[]
  createdAt: Date
  updatedAt: Date
}
export interface ContextMenuItem {
  id: string
  icon: string
  name: string
  parentId: string | null
  tip: string
  meta: Record<string, any>
  child: ContextMenuItem[]
}
