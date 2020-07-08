<template>
  <div>
    <div v-load="loadingShow" class="loadingBox">
      loadingBox
    </div>
    <button @click="loadingShowFn"> loading show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingShow: false
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    loadingShowFn() {
      this.loadingShow = true
      setTimeout(() => {
        this.loadingShow = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
.loadingBox {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  text-align: center;
  line-height: 300px;
  font-size: 24px;
}
</style>
