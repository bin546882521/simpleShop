<template>
  <div class="home">
    <nav-bar :title="type" imageShow="true"></nav-bar>
    <div class="shop">
      <div class="shop-head">
        <van-image :src="pear" class="fruit" />
      </div>
      <div class="shop-content">
        <p class="name">{{ commodity.name }}</p>
        <p class="price">{{ commodity.price }} /kg</p>
        <p class="introduce" v-html="commodity.introduce"></p>
        <div class="stepper">
          <van-stepper v-model="num" theme="round" button-size="41" />
          <div @click="switchFav">
            <van-icon name="like-o" color="#FF5E00" size="35" v-if="commodity.fav == 0" />
            <van-icon name="like" color="#FF5E00" size="35" v-else />
          </div>
        </div>
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          class="addCart"
          @click="addCart"
        >
          Add To cart
        </van-button>
        <van-divider class="divider" />
        <p class="name">You may also need</p>
        <goods-List :shopCommodityLsit="commodityLsit" @goDetail="goDetail"></goods-List>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { goodsList, navBar } from 'comps';
import pear from 'assets/pear.png';
import { shopCommodityLsit } from '@/mock/data';
import { useStore } from 'vuex';
import { Toast } from 'vant';
import { getCommodityDetail } from '@/api/index';
export default {
  components: {
    navBar,
    goodsList,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const num = ref(1);
    const store = useStore();
    const cid = route.query.good;
    const commodity = ref({});
    onMounted(() => {
      commodityData();
    });
    const commodityLsit = ref(shopCommodityLsit);
    const goDetail = (item) => {
      router.push({ path: '/shopDetail' });
    };
    const switchFav = () => {
      if (commodity.value.fav == 0) {
        Toast.success('添加成功,可在我的最爱查看哦~');
        commodity.value.fav = 1;
      } else {
        Toast.success('取消成功');
        commodity.value.fav = 0;
      }
      console.log(commodity.value);
      store.commit('setFavorite', commodity.value);
    };
    const addCart = () => {
      commodity.value.num = num.value;
      Toast.success('添加成功,在购物车等亲~');
      store.commit('setShopInfo', commodity.value);
    };
    const commodityData = async () => {
      let params = {
        cid: cid,
      };
      const res = await getCommodityDetail(params);
      if (res.data) {
        commodity.value = res.data.commodity[0];
      }
    };
    return {
      pear,
      num,
      commodity,
      commodityLsit,
      shopCommodityLsit,
      addCart,
      goDetail,
      switchFav,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.shop {
  // .discenter();
  // flex-direction:column;
  .shop-head {
    .wh(100%,250px);
    .disbottom();
  }
  .shop-content {
    margin: 50px 25px 0;
    .divider {
      margin: 33px -33px;
    }
    .name {
      font-weight: bold;
      .sc(15px,@title-left);
    }
    .price {
      .sc(18px,@title-left);
      margin-top: -16px;
    }
    .introduce {
      .sc(14px,@title-left);
      letter-spacing: 0.5px;
    }
    .stepper {
      .disbetween();
      .van-stepper {
        background: #f4f4f4;
        padding: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 260px;
        height: 38px;
        .borderRadius(30px);
      }
    }
    .addCart {
      margin-top: 16px;
    }
    .commodity-content {
      display: flex;
      overflow-x: auto;
      margin: 8px -10px;
      .commodity-item {
        margin: 0 5px;
        text-align: center;
        .commodity-desc {
          margin-top: 10px;
          font-size: 15px;
          color: #6d3805;
        }
      }
    }
  }
}
</style>

