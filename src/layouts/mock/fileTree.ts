import { MARK_COLOR } from '@/enums'
import { FileItem } from '@/layouts/types'
import { formatDate } from '@/utils/formatDate'
import { ref } from 'vue'

const fileTree = ref<FileItem[]>([
  {
    id: '1',
    name: '分享',
    type: 'folder',
    parentId: '',
    child: [
      {
        id: '1-1',
        name: '免费商用',
        type: 'folder',
        parentId: '1',
        child: [],
      },
      {
        id: '1-2',
        name: '字体分享',
        type: 'folder',
        parentId: '1',
        child: [
          {
            id: '1-2-1',
            name: '文件',
            type: 'folder',
            parentId: '1-2',
            child: [],
          },
          {
            id: '1-2-2',
            name: '字体包',
            type: 'folder',
            parentId: '1-2',
            child: [
              {
                id: '1-2-2-1',
                name: '阿里Free',
                type: 'folder',
                parentId: '1-2-2',
                child: [
                  {
                    id: '1-2-2-1-1',
                    name: 'AlibabaPuHuiTi-3-35-Thin.ttf',
                    type: 'file',
                    parentId: '1-2-2-1',
                    child: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-3',
        name: '字体包字体包字体包字体包字体包',
        type: 'folder',
        parentId: '1',
        child: [],
        meta: {
          format: 'PNG图像',
          size: '307KB',
          dimensions: '557x566',
          resolution: '72x72',
          colorSpace: 'RGB',
          ICCProfile: 'sRGB IEC61966-2.1',
          mark: [
            MARK_COLOR.RED,
            MARK_COLOR.ORANGE,
            MARK_COLOR.YELLOW,
            MARK_COLOR.GREEN,
            MARK_COLOR.BLUE,
            MARK_COLOR.PURPLE,
            MARK_COLOR.GRAY,
            MARK_COLOR.NONE,
          ],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      },
      {
        id: '1-4',
        name: '二折页.ai',
        type: 'file',
        parentId: '1',
        child: [],
        meta: {
          format: 'Adobe Illustrator File',
          size: '1.50MB',
          mark: [MARK_COLOR.RED, MARK_COLOR.BLUE, MARK_COLOR.YELLOW],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      },
      {
        id: '1-5',
        name: '烟花.png',
        type: 'file',
        parentId: '1',
        child: [],
        meta: {
          format: 'PNG图像',
          size: '307KB',
          dimensions: '557x566',
          resolution: '72x72',
          colorSpace: 'RGB',
          ICCProfile: 'sRGB IEC61966-2.1',
          mark: [
            MARK_COLOR.RED,
            MARK_COLOR.ORANGE,
            MARK_COLOR.YELLOW,
            MARK_COLOR.GREEN,
            MARK_COLOR.BLUE,
            MARK_COLOR.PURPLE,
            MARK_COLOR.GRAY,
            MARK_COLOR.NONE,
          ],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      },
    ],
  },
  {
    id: '2',
    name: '活动',
    type: 'folder',
    parentId: '',
    child: [],
  },
  {
    id: '3',
    name: '素材',
    type: 'folder',
    parentId: '',
    child: [],
  },
  {
    id: '4',
    name: '字体',
    type: 'folder',
    parentId: '',
    child: [],
  },
  {
    id: '5',
    name: '海报',
    type: 'folder',
    parentId: '',
    child: [],
  },
  {
    id: '6',
    name: '其他',
    type: 'folder',
    parentId: '',
    child: [],
  },
])

export { fileTree }
