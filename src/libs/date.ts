import { format } from 'date-fns'

export const todayDate = () => {
  const date = new Date()
  return format(date, 'yyyy-MM-dd')
}

export default format
