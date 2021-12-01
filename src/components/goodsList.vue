<template>
  <div class="commodity-content">
    <div class="commodity-deal-item" v-for="(item, index) in shopCommodityLsit" :key="index">
      <van-image width="69" height="76" :src="item.imgUrl" @click="goDetail(item)" />
      <div class="commodity-deal-desc">
        <div class="name">{{ item.name }}</div>
        <div class="weight">1kg,priceg</div>
        <div class="price">$ {{ item.price }}</div>
        <div class="add-icon" @click="addCart(item)">
          <van-icon name="plus" color="#FFF" size="15" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
  props: {
    shopCommodityLsit: {
      type: Array,
      default: [],
    },
  },
  setup(props, ctx) {
    const store = useStore();
    const goDetail = (data) => {
      ctx.emit('goDetail', data);
    };
    const addCart = (item) => {
      item.num = 1;
      Toast.success('添加成功,在购物车等亲~');
      store.commit('setShopInfo', { ...item });
    };
    return {
      goDetail,
      addCart,
    };
  },
};
</script>
<style lang="less" scoped>
.commodity-deal-item {
  border-radius: 20px;
  border: 1px solid #eee;
  box-shadow: 0px 0px 6px 2px #e9e9e9;
  padding: 10px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .commodity-deal-desc {
    width: 130px;
    position: relative;
    margin-top: 15px;
    .name {
      color: #6d3805;
      font-size: 15px;
      font-weight: bold;
      margin: 2px 0;
    }
    .weight {
      color: #929292;
      font-size: 12px;
      margin: 2px 0;
    }
    .price {
      font-weight: bold;
      color: #ff5e00;
      font-size: 20px;
      margin: 4px 0;
    }
    .add-icon {
      background: #3aa14c;
      border-radius: 50%;
      width: 29.56px;
      height: 29.56px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 32px;
    }
  }
}
</style>