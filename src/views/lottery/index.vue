<template>
  <div>
    <div class="slotMhchineBox">
      <slotMachines ref="slotMachines" :lotterynumnber="lotteryNumber" @update="updateLottryNums" />
    </div>
    <button @click="handleRandomNumbers">随机</button>
    <button @click="handleResetNumbers">重置</button>
  </div>
</template>

<script>
import slotMachines from '@/components/LotteryMachine/index'
export default {
  components: {
    slotMachines
  },
  data() {
    return {
      lotteryNumber: ''
    }
  },
  methods: {
    handleRandomNumbers() {
      this.$refs.slotMachines.numbersByRandom()
    },
    handleResetNumbers() {
      this.$refs.slotMachines.resetNumbers()
    },
    updateLottryNums(numbers) {
      this.lotteryNumber = numbers
    }
  }
}
</script>

<style lang="less" scoped>
.slotMhchineBox {
  height: 180px;
  overflow: hidden;
  border: 1px solid #000;
}
button  {
  font-size: 18px;
  background: cornflowerblue;
  text-align: center;
  line-height: 40px;
  border: none;
  color: #fff;
  margin-top: 20px;
  outline: none;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0,0,0,.3);
}
</style>
