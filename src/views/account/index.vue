<template>
  <div class="main">
    <nav-bar :title="type"></nav-bar>
    <ul class="user-list">
      <li class="van-hairline--bottom" @click="goTo('/account/profile')">
        <van-icon name="manager" color="#FF5E00" size="25" />
        <span>Profile</span>
      </li>
      <li class="van-hairline--bottom" @click="goTo('/account/orders')">
        <van-icon name="goods-collect" color="#FF5E00" size="25" />
        <span>Orders</span>
      </li>
      <li class="van-hairline--bottom" @click="goTo('/account/addresses', { from: 'mine' })">
        <van-icon name="location" color="#FF5E00" size="25" />
        <span>Address</span>
      </li>
      <li @click="goTo('/account/payment')">
        <van-icon name="card" color="#FF5E00" size="25" />
        <span>Payment</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import navBar from 'comps/navBar.vue';
import { Toast } from 'vant';
export default {
  components: {
    navBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);
    // const onAdd = () => Toast('新增');
    const goTo = (r, query) => {
      console.log(r);
      router.push({ path: r, query: query || {} });
    };
    return {
      type,
      goTo,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.user-list {
  padding: 0 20px;
  margin-top: 20px;
  li {
    height: 50px;
    line-height: 50px;
    .sc(17px,@title-left);
    font-weight: bold;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    margin-bottom: 7px;
    span {
      margin-left: 15px;
    }
  }
}
</style>