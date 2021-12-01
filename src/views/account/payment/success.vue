<template>
  <div class="home">
    <div class="success-screen">
      <Screen :screenData="screenData"></Screen>
    </div>
    <bottom-btn
      firstFont="Track Order"
      secondFont="Back Home"
      show="true"
      @firstNext="goTo('/account/orders')"
      @secondNext="goTo('/')"
    ></bottom-btn>
  </div>
</template>
<script lang="ts" setup>
import success from 'assets/success.png';
import { useRoute, useRouter } from 'vue-router';
import { bottomBtn, Screen } from 'comps';

const router = useRouter();
const screenData = {
  imageUrl: success,
  title: 'Your Order Has Been Accepted',
  definite: 'We’ve accepted your order,and we’re<br />getting it ready',
};
const goTo = (r: string, query: any) => {
  router.push({ path: r, query: query || {} });
};
</script>
<style lang="less">
.success-screen {
  margin: 0 25px;
  text-align: center;
  .van-image {
    margin-top: 40px;
  }
  .definite {
    letter-spacing: 0.5px;
  }
}
</style>