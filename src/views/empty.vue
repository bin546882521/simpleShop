<template>
  <div class="home">
    <van-image :src="success" />
    <div>
      <p class="title">Oops! Order Failed!</p>
      <p class="definite">Something went terribly wrong</p>
    </div>
    <bottom-btn firstFont="Try Again" secondFont="Back Home" show="true"></bottom-btn>
  </div>
</template>
<script lang="ts">
import empty from 'assets/images/empty.png';
import { useRoute, useRouter } from 'vue-router';
import bottomBtn from 'comps/bottomBtn.vue';
export default {
  components: {
    bottomBtn,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const goRegister = (data) => {
      router.push({ path: 'register', query: { type: data } });
    };
    return {
      empty,
      goRegister,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  margin: 0 25px;
  text-align: center;
  .van-image {
    margin: 20px;
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
  .bottom {
    padding: 15px 0 0 0;
    strong {
      font-size: 15px;
    }
    .first-btn {
      margin: 15px 0;
    }
  }
}
</style>