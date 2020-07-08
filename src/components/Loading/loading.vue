<template>
  <div v-show="visible" class="self-loading">
    <div class="self-loading-spinner">
      <i class="self-spinner-icon" />
      <p class="self-spinner-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: 'loading'
    }
  }
}
</script>

<style lang="less" scoped>
.self-loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2005;
  background: rgba(255, 255, 255, .8);
}
.self-loading-spinner {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .self-spinner-icon {
        width: 40px;
        height: 40px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: url('../../assets/images/Loading.svg') 0 0 / contain no-repeat;
          animation: loadingAnimal 1s linear 0s infinite;
        }
    }
    .self-spinner-text {
        font-size: 24px;
        color: #000;
        line-height: 36px;
        margin: 0;
    }
    @keyframes loadingAnimal {
      0% {
        transform: rotateZ(360deg);
      }
      100% {
        transform: rotateZ(0deg);
      }
    }
}
</style>
