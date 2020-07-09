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
ConfirConstructor.prototype.close = function() {
  if (confirmEl) {
    confirmEl = undefined
  }
  this.showPop = false
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  }, 300)
}
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
    instance.content = { ...defaults, ...content }
    instance.ok = function() {
      resolve(true)
      instance.close()
    }
    instance.cancel = function() {
      reject(false)
      instance.close()
    }
    confirmEl = instance
  })
}

export default confirmChoose
