export const convertMinutesToHoursAndMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const hoursText = hours > 0 ? `${hours} hora${hours !== 1 ? 's' : ''}` : ''
  const minutesText =
    remainingMinutes > 0 ? `${remainingMinutes} minuto${remainingMinutes !== 1 ? 's' : ''}` : ''

  if (hoursText && minutesText) {
    return `${hoursText} e ${minutesText}`
  } else if (hoursText) {
    return hoursText
  } else {
    return minutesText
  }
}
