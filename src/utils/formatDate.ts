export const formatDate = (date = new Date()) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份从0开始
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const weekday = weekdays[date.getDay()]

  const pad = (n: number) => n.toString().padStart(2, '0')

  return `${year}年${month}月${day}日 ${weekday} ${pad(hour)}:${pad(minute)}`
}
