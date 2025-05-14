export enum MENU_TYPE {
  FILE_ITEM = 0,
  EXTRA = 1,
}

export const enum MARK_COLOR {
  RED = '红色',
  ORANGE = '橙色',
  YELLOW = '黄色',
  GREEN = '绿色',
  BLUE = '蓝色',
  PURPLE = '紫色',
  GRAY = '灰色',
  NONE = '个人',
}

export const MARK_COLOR_MAP: Record<MARK_COLOR, string> = {
  [MARK_COLOR.RED]: 'red',
  [MARK_COLOR.ORANGE]: 'orange',
  [MARK_COLOR.YELLOW]: 'yellow',
  [MARK_COLOR.GREEN]: 'green',
  [MARK_COLOR.BLUE]: 'blue',
  [MARK_COLOR.PURPLE]: 'purple',
  [MARK_COLOR.GRAY]: 'gray',
  [MARK_COLOR.NONE]: 'none',
}
