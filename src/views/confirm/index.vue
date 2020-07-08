<template>
  <div>
    <button @click="showConfirm">confirm</button>
  </div>
</template>

<script>
import confirm from '@/components/Confirm'
export default {
  methods: {
    showConfirm() {
      confirm({
        title: '确认弹框',
        confirmBtn: '是的',
        cancelBtn: '不是'
      }).then(data => {
        console.log(data, 2222)
      }).catch(err => {
        console.log(err, 3333)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
