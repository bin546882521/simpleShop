<template>
  <van-swipe-cell :right-width="50" v-for="(item, index) in commodityLsit" :key="index">
    <div class="good-item">
      <div class="good-image">
        <van-image :src="item.imgUrl" class="fruit" />
      </div>
      <div class="good-desc">
        <div class="good-title">
          <span class="good-name">{{ item.name }}</span>
          <div class="good-btn">
            <van-stepper
              integer
              :min="1"
              :max="10"
              :model-value="item.num"
              :name="item.cid"
              theme="round"
              async-change
              @change="onChange($event, item)"
              v-if="type == 'Cart'"
            />
            <div class="good-add" @click="addCart(item)" v-if="type == 'Favorite'">
              <van-icon name="shopping-cart-o" color="#FF5E00" size="21" />
              Add to Cart
            </div>
            <div class="price" v-if="type == 'Cart'">
              ${{ item.totalPrice }}&nbsp;<span>kg</span>
            </div>
            <div class="price" v-if="type == 'Favorite'">
              ${{ item.price }}&nbsp;<span>kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #right>
      <van-button
        square
        icon="delete"
        type="danger"
        class="delete-button"
        @click="deleteGood(index)"
      />
    </template>
  </van-swipe-cell>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
  props: {
    commodityLsit: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const store = useStore();
    const deleteGood = (index) => {
      ctx.emit('deleteGood', index);
    };
    const addCart = (item) => {
      item.num = 1;
      Toast.success('添加成功,在购物车等亲~');
      store.commit('setShopInfo', { ...item });
    };
    const onChange = (e, item) => {
      item.num = e;
      item.totalPrice = parseFloat(item.price * item.num).toFixed(2);
    };
    return {
      deleteGood,
      addCart,
      onChange,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.good-item {
  display: flex;
  border-bottom: 1px solid #eee;
  .good-image {
    flex: 0 0 24%;
    margin: 10px;
    text-align: center;
  }
  .good-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 20px 20px 10px 10px;
    .good-title {
      // display: flex;
      // justify-content: space-between;
    }
    .good-name {
      .sc(18px,@title-left);
      font-weight: bold;
    }
    .good-btn {
      display: flex;
      justify-content: space-between;
      margin: 18px 0 0 20px;
      .van-stepper {
        background: #f4f4f4;
        padding: 2px;
        width: 98px;
        .disbetween();
        .borderRadius(30px);
      }
      .good-add {
        .sc(14px,@orange);
      }
      .price {
        font-size: 16px;
        color: @title-left;
        line-height: 28px;
        letter-spacing: 0.5px;
        span {
          font-size: 6px;
        }
      }
      .van-icon-delete {
        font-size: 20px;
        margin-top: 4px;
      }
    }
  }
}
.delete-button {
  // width: 50px;
  height: 100%;
}
</style>