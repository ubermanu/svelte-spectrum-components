export const generateCalendarCells = (date: Date) => {
  // Generates an array of days for the current month
  const days = []
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const firstDayOfWeek = firstDay.getDay()
  const lastDayOfWeek = lastDay.getDay()

  // Add days from the previous month
  if (firstDayOfWeek > 0) {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    const prevMonthLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate()
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        date: new Date(
          prevMonth.getFullYear(),
          prevMonth.getMonth(),
          prevMonthLastDay - i
        ),
        outsideMonth: true,
      })
    }
  }

  // Add days from the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push({
      date: new Date(date.getFullYear(), date.getMonth(), i),
      outsideMonth: false,
    })
  }

  // Add days from the next month
  if (lastDayOfWeek < 6) {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      days.push({
        date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i),
        outsideMonth: true,
      })
    }
  }

  return days
}
