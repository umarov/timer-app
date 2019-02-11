export function formatTimerValue(value: number) {
  const milliseconds = value % 100
  const seconds = getSeconds(value)
  const minutes = getMinutes(value)
  const hours = getHours(value)

  return {
    milliseconds,
    seconds,
    minutes,
    hours
  }
}

function getSeconds(value: number) {
  const seconds = value / 100

  if (seconds >= 1) {
    const stringNumber = seconds.toString()
    return stringNumber.split('.')[0]

  } else {
    return '0'
  }
}

function getMinutes(value: number) {
  const minutes = value / 100 / 60

  if (minutes >= 1) {
    const stringNumber = minutes.toString()
    return stringNumber.split('.')[0]

  } else {
    return '0'
  }
}

function getHours(value: number) {
  const hours = value / 100 / 60 / 60

  if (hours >= 1) {
    const stringNumber = hours.toString()
    return stringNumber.split('.')[0]

  } else {
    return '0'
  }
}
