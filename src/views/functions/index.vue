<template>
  <div class="functions-pages">
    <h1>展示常用函数使用示例</h1>
    <item>
      <div class="title">获取两个整数之间的随机数</div>
      <el-form :model="rondomFrom" inline>
        <el-form-item label="最小值">
          <el-input v-model="rondomFrom.min" type="number" placeholder="最小值" />
        </el-form-item>
        <el-form-item label="最大值">
          <el-input v-model="rondomFrom.max" type="number" placeholder="最大值" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getRondom">获取一个随机数</el-button>
          <el-button type="primary" @click="getRondomArray">获取一组随机数</el-button>
        </el-form-item>
      </el-form>
      <div class="result">
        随机数：{{ rondomResult }}
      </div>
    </item>
  </div>
</template>

<script>
import rondom from '@/services/rondom'
import item from './item'
export default {
  components: {
    item
  },
  data() {
    return {
      rondomFrom: {
        min: 1,
        max: 10
      },
      rondomResult: null
    }
  },
  methods: {
    getRondom() {
      this.rondomResult = rondom(this.rondomFrom.min, this.rondomFrom.max)
    },
    getRondomArray() {
      this.rondomResult = Array.apply(null, Array(15)).map(item => {
        return rondom(this.rondomFrom.min, this.rondomFrom.max)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.functions-pages {
    padding: 40px;
}
.title {
    padding-bottom: 30px;
}
</style>
