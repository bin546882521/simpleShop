<template>
  <div class="home">
    <nav-bar :title="type"></nav-bar>
    <div class="fav-empty" v-if="empty">
      <Screen :screenData="screenData"></Screen>
      <bottom-btn firstFont="Start Shoping" @firstNext="startShopping"></bottom-btn>
    </div>
    <div v-else>
      <cart-List :type="type" :commodityLsit="commodityLsit" @deleteGood="deleteGood"></cart-List>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import favbigimage from 'assets/images/favbigimage.png';
import { useRoute, useRouter } from 'vue-router';
import cartList from 'comps/cartList.vue';
import navBar from 'comps/navBar.vue';
import bottomBtn from 'comps/bottomBtn.vue';
import { useStore } from 'vuex';
import Screen from 'comps/screen.vue';
import { Toast } from 'vant';
export default {
  components: {
    navBar,
    cartList,
    bottomBtn,
    Screen,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const type = ref(route.meta.title);
    const screenData = {
      imageUrl: favbigimage,
      title: 'Your heart is empty',
      definite: 'Start fall in love with some good<br />goods',
    };
    const empty = ref(true);
    const commodityLsit = ref(JSON.parse(JSON.stringify(store.state.user.userinfo.favorite)));
    console.log(commodityLsit.value);
    if (commodityLsit.value.length > 0) {
      empty.value = false;
    }
    const startShopping = () => {
      router.push({ path: '/' });
    };
    const deleteGood = (index: number) => {
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中...',
      });
      setTimeout(() => {
        toast.clear();
        commodityLsit.value.splice(index, 1);
        store.commit('setFav', commodityLsit.value);
      }, 1000);
    };
    return {
      screenData,
      deleteGood,
      commodityLsit,
      startShopping,
      empty,
      type,
    };
  },
};
</script>
<style lang="less">
.fav-empty {
  margin: 0 25px;
  text-align: center;
  .screen {
    .van-image {
      margin-bottom: 0px !important;
    }
  }

  // .fav-empty {
  // margin: 0 25px;
  // text-align: center;
  // .van-image {
  //   margin: 20px;
  // }
  // .title {
  //   color: #7f4e1d;
  //   font-weight: bold;
  //   font-size: 20px;
  //   margin-top: -8px;
  // }
  // .definite {
  //   font-size: 16px;
  //   line-height: 19px;
  //   margin-top: -12px;
  //   color: #7f4e1d;
  //   letter-spacing: 1px;
  // }
  // }
}
</style>