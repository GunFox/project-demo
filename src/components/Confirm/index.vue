<template>
  <div v-if="showPop" class="confirmPop">
    <div class="mask" />
    <div class="main">
      <div class="title">{{ content.title }}</div>
      <div class="cont">{{ content.text }}</div>
      <div class="buttonStyle">
        <button class="cancel" @click="cancel()">{{ content.cancelBtn }}</button>
        <button class="ok" @click="ok()">{{ content.confirmBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPop: true,
      content: {}
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'
    this.$once('hook:destroyed', () => {
      document.body.style.overflow = 'auto'
    })
  }
}
</script>

<style lang="less" scoped>
.confirmPop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .8);
        z-index: 2001;
    }
    .main {
        position: relative;
        z-index: 2002;
        width: 400px;
        padding: 36px;
        border-radius: 36px;
        background: #ffffff;
        .title {
            font-size: 30px;
            font-weight: 700;
            color: #000;
             border-bottom: 1px solid #999;
             padding-bottom: 24px;
        }
        .cont {
            padding: 24px 0;
            font-size: 20px;
            line-height: 36px;
            color: #000;
            text-align: center;
        }
        .buttonStyle {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
                padding: 12px 24px;
                font-size: 28px;
                border: none;
                border-radius: 18px;
                display: block;
                &.cancel {
                    margin: 0 18px;
                    color: #666;
                }
                &.ok {
                    background: #169fe6;
                    color: #fff;
                }
            }
        }
    }
}
</style>
