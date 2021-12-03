<template>
  <div class="home">
    <div class="page_header">
      <div class="page_title">
        <header class="good-header">
          <van-icon name="location-o" color="#FF5E00" size="24px" class="icon" />Lungangen
        </header>
        <van-search v-model="value" placeholder="Search" background="F3F3F3" />
      </div>
      <div class="page_search"></div>
    </div>
    <div class="commodity">
      <div class="commodity-head">
        <span class="title-left">Categories</span>
        <span class="title-right" @click="explore">See All</span>
      </div>
      <div class="commodity-content">
        <div class="commodity-item" v-for="(item, index) in variety" :key="index">
          <van-image round width="95" height="95" :src="item.imgUrl" />
          <div class="commodity-desc">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="commodity">
      <div class="commodity-head">
        <span class="title-left">Popular Deals</span>
        <span class="title-right">See All</span>
      </div>
      <goods-List :shopCommodityLsit="shopCommodityLsit" @goDetail="goDetail"></goods-List>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';
import { goodsList } from 'comps';
import { useRoute, useRouter } from 'vue-router';
import { getShopVariety, getShopCommodityLsit } from '@/api/index';
export default {
  components: {
    goodsList,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      shopVarietyData();
      shopCommodityLsitData();
    });
    const state = reactive({
      value: '',
      code: '',
      variety: [],
      shopCommodityLsit: [],
    });
    const goLogin = () => {
      router.push({ path: '/login' });
    };
    const explore = () => {
      router.push({ path: '/explore' });
    };
    const goDetail = (data) => {
      // router.push({ path: '/shopDetail', query: { good: JSON.stringify(data) } });
      router.push({ path: '/shopDetail', query: { good: data.cid } });
    };
    const shopVarietyData = async () => {
      const res = await getShopVariety();
      if (res.data) {
        state.variety = res.data.shopVariety;
      }
    };
    const shopCommodityLsitData = async () => {
      const res = await getShopCommodityLsit();
      if (res.data) {
        state.shopCommodityLsit = res.data.shopCommodityLsit;
      }
    };
    return {
      ...toRefs(state),
      shopVarietyData,
      shopCommodityLsitData,
      goLogin,
      explore,
      goDetail,
    };
  },
};
</script>

<style lang="less" scoped>
@import '@/common/style/mixin';
.home {
  .page_header {
    .page_title {
      .good-header {
        height: 50px;
        line-height: 50px;
        margin-top: 30px;
        text-align: center;
        color: @orange;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  .commodity {
    .commodity-head {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px 0 20px;
      .title-left {
        color: @title-left;
        font-size: 22px;
        font-weight: bold;
      }
      .title-right {
        color: @orange;
        font-size: 18px;
      }
    }
    .commodity-content {
      display: flex;
      overflow-x: auto;
      padding: 0 10px;
      margin-top: 8px;
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
.van-search {
  .van-search__field {
    padding: 10px;
  }
}
</style>