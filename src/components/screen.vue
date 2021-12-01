<template>
  <div class="screen">
    <van-image :src="screenData.imageUrl" />
    <div>
      <p class="title">{{ screenData.title }}</p>
      <p class="definite" v-html="screenData.definite"></p>
    </div>
  </div>
</template>
<script lang="ts">
import empty from '@/assets/images/empty.png';
export default {
  props: {
    screenData: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    return {
      empty,
    };
  },
};
</script>
<style lang="less" scoped>
.van-image {
  // margin: 20px;
  margin-top: 20px;
}
.title {
  color: #7f4e1d;
  font-weight: bold;
  font-size: 20px;
}
.definite {
  font-size: 16px;
  line-height: 19px;
  color: #7f4e1d;
  letter-spacing: -0.165px;
}
</style>