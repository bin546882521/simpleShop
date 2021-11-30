<template>
  <div class="home">
    <!-- <van-image :src="success" />
    <div>
      <p class="title">Your Order Has Been Accepted</p>
      <p class="definite">
        We've accepted your order,and we're<br />
        getting it ready
      </p>
    </div> -->
    <div class="success-screen">
      <Screen :screenData="screenData"></Screen>
    </div>
    <bottom-btn firstFont="Track Order" secondFont="Back Home" show="true"></bottom-btn>
  </div>
</template>
<script lang="ts">
// import { reactive, ref, toRefs } from "vue";
import success from '@/assets/images/success.png';
import { useRoute, useRouter } from 'vue-router';
import bottomBtn from '@/components/bottomBtn.vue';
import Screen from '@/components/screen.vue';
export default {
  components: {
    bottomBtn,
    Screen,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const screenData = {
      imageUrl: success,
      title: 'Your Order Has Been Accepted',
      definite: 'We’ve accepted your order,and we’re<br />getting it ready',
    };
    const goRegister = (data) => {
      router.push({ path: 'register', query: { type: data } });
    };
    return {
      // success,
      screenData,
      goRegister,
    };
  },
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