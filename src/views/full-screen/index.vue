<template>
  <div class="bg">
    <div :class="[isFull ? 'in-full' : 'full']" @click="toFull"></div>
  </div>
</template>

<script>
import { reqFullScreen, exitFullScreen } from '@/utils/full-screen.js'
export default {
  data() {
    return {
      isFull: false,
    }
  },
  methods: {
    toFull() {
      if (this.isFull) {
        this.isFull = false;
        exitFullScreen();
      } else {
        this.isFull = true;
        reqFullScreen();
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: #eee;
  position: relative;

  .full {
    position: absolute;
    top: 75px;
    right: 75px;
    z-index: 1;
    background-image: url("../../assets/images/full.png");
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
  }

  .in-full {
    position: absolute;
    top: 75px;
    right: 75px;
    z-index: 1;
    background-image: url("../../assets/images/in-full.png");
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
  }
}
</style>