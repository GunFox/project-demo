import Vue from 'vue'
import confirm from './index.vue'

let confirmEl
const defaults = {
  confirmBtn: '确定',
  cancelBtn: '取消',
  title: 'confirm',
  text: '确定删除该内容吗？'
}
const ConfirConstructor = Vue.extend(confirm)
const confirmChoose = function(content = {}) {
  if (confirmEl) {
    return {
      confirmEl
    }
  }
  return new Promise((resolve, reject) => {
    const instance = new ConfirConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    instance.content = Object.assign({}, defaults, content)
    instance.ok = function() {
      resolve(true)
      instance.showPop = false
      confirmEl = null
    }
    instance.cancel = function() {
      reject(false)
      instance.showPop = false
      confirmEl = null
    }
    instance.close = function() {
      reject(false)
      instance.showPop = false
      confirmEl = null
    }
    confirmEl = instance
  })
}

export default confirmChoose
