<template>
  <div class="main">
    <nav-bar :title="type"></nav-bar>
    <div class="main-content">
      <div class="payment-item">
        <div class="payment-left">
          <van-icon class="iconfont" class-prefix="icon" name="payitem" color="#6D3805" />
          <!-- <van-icon class="iconfont" class-prefix="icon" name="home" size="22" color="#6D3805" /> -->
          <span>See Itemes</span>
        </div>
        <van-icon name="arrow" size="15" color="#6D3805" />
      </div>
      <div class="payment-method">
        <div class="method-title">Payment Method</div>
        <div class="method-card" @click="switchCard">
          <div class="card-left">
            <van-image src="/src/assets/images/cardOne.png" class="fruit" width="40" height="25" />
            <span>Apple Pay</span>
          </div>
          <van-icon name="success" color="#58A919" size="20" />
        </div>
        <div class="method-bottom">
          <div class="bottom-left">
            <van-icon
              class="iconfont"
              class-prefix="icon"
              name="dollar"
              size="30"
              color="#58A919"
            />
            <span>Cash On Delivery</span>
          </div>
          <van-icon name="success" color="#58A919" size="20" />
        </div>
      </div>
      <div class="payment-detail">
        <div class="detail-title">Payment Method</div>
        <div class="detail-content">
          <span>Subtotal</span>
          <span>$137.00</span>
        </div>
        <div class="detail-content">
          <span>Tax</span>
          <span>$4.50</span>
        </div>
        <div class="detail-content">
          <span>Delivery Price</span>
          <span>$00.00</span>
        </div>
        <div class="detail-total">
          <span>Total</span>
          <span>$141.00</span>
        </div>
      </div>
    </div>
    <bottom-btn :firstFont="'CheckOut$' + money" @firstNext="checkOut"></bottom-btn>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import navBar from '@/components/navBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import bottomBtn from '@/components/bottomBtn.vue';
export default {
  components: {
    navBar,
    bottomBtn,
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const type = ref(route.meta.title);
    const money = ref('141.50');
    const switchCard = () => {};
    const checkOut = () => {
      router.push({ path: '/account/success' });
    };
    return {
      type,
      money,
      switchCard,
      checkOut,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.main {
  // margin: 0 25px;
  .main-content {
    margin: 10px 25px 0 25px;
    .payment-item {
      background: @orange-thin;
      padding: 34px 10px 34px 20px;
      border-radius: 15px;
      .disbetween;
      .payment-left {
        // margin-left: 10px;
        span {
          margin-left: 10px;
          .sc(17px,@title-left);
          font-weight: bold;
        }
      }
    }
    .payment-method {
      padding: 10px 10px 10px 20px;
      border-radius: 15px;
      background: @orange-thin;
      margin-top: 20px;
      .discolumn;
      .method-title {
        .sc(17px,@title-left);
        font-weight: bold;
        margin-top: 5px;
      }
      .method-card {
        .disbetween;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        .card-left {
          .discenter;
          .van-image {
            background: #fff;
          }
          span {
            margin-left: 10px;
            .sc(15px,@title-left);
          }
        }
        // position: relative;
        // &:after {
        //   content: '';
        //   width: 100%;
        //   height: 1px;
        //   position: absolute;
        //   left: 0;
        //   bottom: 0;
        //   background-color: #eee;
        // }
      }
      .method-bottom {
        padding: 20px 0;
        .disbetween;
        .bottom-left {
          .discenter;
          span {
            margin-left: 10px;
            .sc(15px,@title-left);
          }
        }
      }
    }
    .payment-detail {
      padding: 10px 10px 10px 20px;
      border-radius: 15px;
      background: @orange-thin;
      margin-top: 20px;
      .discolumn;
      .detail-title {
        .sc(17px,@title-left);
        font-weight: bold;
        margin-top: 5px;
      }
      .detail-content {
        .sc(15px,@title-left);
        .disbetween;
        padding: 6px 0;
        &:nth-child(4) {
          border-bottom: 1px solid #eee;
        }
      }
      .detail-total {
        .disbetween;
        margin-top: 10px;
        .sc(17px,@title-left);
        font-weight: bold;
      }
    }
  }
}
</style>