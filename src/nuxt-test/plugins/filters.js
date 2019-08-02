import Vue from 'vue'

/**
 * 格式化日期，fmt可任意组合
 * @param {Number} timestamp
 * @param {String} fmt
 */
export function formatDate (timestamp, fmt = 'yyyy-MM-dd HH:mm:ss') {
  if (!Number.parseInt(timestamp)) {
    return timestamp
  }
  const date = new Date(Number(timestamp))
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'f+': date.getMilliseconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : _pad(str))
    }
  }
  return fmt
}

export function _pad (n, z = 2) {
  return ('00' + n).slice(-z)
}

const filters = {
  formatDate
}

function registerFilters () {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

registerFilters()
