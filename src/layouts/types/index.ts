import { MARK_COLOR } from '@/enums'

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
  meta?: {
    format: string
    size: string
    dimensions?: string
    resolution?: string
    colorSpace?: string
    ICCProfile?: string
    mark?: MARK_COLOR[]
    createdAt: string
    updatedAt: string
  }
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
