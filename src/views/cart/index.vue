<template>
  <div class="cart">
    <nav-bar :title="type"></nav-bar>
    <div class="fav-empty" v-if="empty">
      <Screen :screenData="screenData"></Screen>
      <bottom-btn firstFont="Start Shoping" @next="goRegister('Sign up')"></bottom-btn>
    </div>
    <div class="cart-body" v-else>
      <cart-List :type="type" :commodityLsit="commodityLsit" @deleteGood="deleteGood"></cart-List>
      <bottom-btn firstFont="CheckOut" @firstNext="checkOut"></bottom-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import avocadosmall from 'assets/avocadosmall.png';
import pear from 'assets/pear.png';
import { useStore } from 'vuex';
import { bottomBtn, cartList, navBar, Screen } from 'comps';
import favbigimage from 'assets/favbigimage.png';
import { Toast } from 'vant';
export default {
  components: {
    navBar,
    cartList,
    bottomBtn,
    Screen,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const type = ref(route.meta.title);
    const value = ref(2);
    const store = useStore();
    const empty = ref(true);
    const screenData = {
      imageUrl: favbigimage,
      title: 'Your Cart is empty',
      definite: 'Start fall in love with some good<br />goods',
    };
    const commodityLsit = ref(JSON.parse(JSON.stringify(store.state.shop.cart)));
    if (commodityLsit.value.length > 0) {
      empty.value = false;
      commodityLsit.value.forEach((item) => {
        item.totalPrice = parseFloat(item.price * item.num).toFixed(2);
      });
    }
    const deleteGood = (index: number) => {
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中...',
      });
      setTimeout(() => {
        toast.clear();
        commodityLsit.value.splice(index, 1);
        store.commit('setShop', commodityLsit.value);
      }, 1000);
    };
    const checkOut = () => {
      if (commodityLsit.value.length > 0) {
        let total = 0;
        commodityLsit.value.forEach((item) => {
          total += parseFloat(item.totalPrice);
        });
        console.log(total.toFixed(2));
        router.push({ path: '/account/payment', query: { total: total.toFixed(2) } });
      }
    };
    return {
      screenData,
      empty,
      type,
      commodityLsit,
      avocadosmall,
      pear,
      value,
      deleteGood,
      checkOut,
    };
  },
};
</script>
<style lang="less" scoped>
</style>

