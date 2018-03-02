const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getFormate = (year, mouth, day) => {
  return `${year}-${mouth < 10 ? '0' + mouth : mouth}-${day < 10 ? '0' + day : day}`
}

module.exports = {
  formatTime: formatTime,
  getFormate: getFormate
}
