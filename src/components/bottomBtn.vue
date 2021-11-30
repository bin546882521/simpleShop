<template>
  <div class="bottom-btn">
    <van-button
      round
      block
      type="primary"
      native-type="submit"
      class="first-btn"
      @click="firstNext"
    >
      {{ firstFont }}
    </van-button>
    <van-button
      round
      block
      type="primary"
      native-type="submit"
      class="second-btn"
      @click="secondNext"
      v-if="show"
    >
      {{ secondFont }}
    </van-button>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
export default {
  props: {
    firstFont: {
      type: String,
      default: '',
    },
    secondFont: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const firstNext = () => {
      ctx.emit('firstNext');
    };
    const secondNext = () => {
      ctx.emit('secondNext');
    };
    return {
      firstNext,
      secondNext,
    };
  },
};
</script>
<style lang="less" scoped>
.bottom-btn {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  button {
    width: 90%;
    letter-spacing: 0.5px;
    font-weight: bold;
  }
  .second-btn {
    margin-top: 15px;
    color: #ff5e00 !important;
    background: #fff !important;
  }
}
</style>