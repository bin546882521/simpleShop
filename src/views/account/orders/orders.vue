<template>
  <div class="main">
    <nav-bar :title="type"></nav-bar>
    <div class="order-content">
      <van-tabs v-model:active="active">
        <van-tab title="Ongoing">
          <!-- <div class="order-empty">
            <van-image :src="orderEmpty" />
            <p class="definite">There is n ongoing order right now.<br />You can order from home</p>
          </div> -->
          <div class="order-title">
            <div class="order-date">
              <van-icon
                class="iconfont"
                class-prefix="icon"
                name="month"
                size="18"
                color="#6D3805"
              />
              <span>March5,2019</span>
            </div>
            <span class="order-minute">6:30 pm</span>
          </div>
          <div class="order-steps">
            <van-steps active="1" finish-icon="checked" inactive-icon="circle" direction="vertical">
              <van-step>
                <div class="order-step">
                  <div class="order-image">
                    <van-image :src="orderFirst" />
                  </div>
                  <span>We are packin your items...</span>
                </div>
              </van-step>
              <van-step>
                <div class="order-step">
                  <div class="order-image">
                    <van-image :src="orderSecond" />
                  </div>
                  <span>Your order is delivering to <br />your location...</span>
                </div>
              </van-step>
              <van-step>
                <div class="order-step">
                  <div class="order-image">
                    <van-image :src="orderThird" />
                  </div>
                  <span>Your order is received.</span>
                </div>
              </van-step>
            </van-steps>
          </div>
        </van-tab>
        <van-tab title="History"
          ><div>
            <van-swipe-cell :right-width="50" v-for="(item, index) in commodityLsit" :key="index">
              <div class="order-item">
                <div class="order-image">
                  <van-image :src="ordeHistory" />
                </div>
                <div class="order-desc">
                  <span class="order-num">{{ item.orderNum }}</span>
                  <span class="order-type" :class="item.fav == 1 ? 'fail' : ''">{{
                    item.type
                  }}</span>
                  <span class="order-date">{{ item.date }}</span>
                </div>
                <p class="order-price">${{ item.price }}</p>
              </div>
            </van-swipe-cell>
          </div></van-tab
        >
      </van-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import navBar from '@/components/navBar.vue';
import orderEmpty from '@/assets/images/orderEmpty.png';
import ordeHistory from '@/assets/images/orderHistory.png';
import orderFirst from '@/assets/images/orderFirst.png';
import orderSecond from '@/assets/images/orderSecond.png';
import orderThird from '@/assets/images/orderThird.png';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  components: {
    navBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);
    const checked = ref(true);
    const active = ref(2);
    nextTick(() => {
      document.getElementsByClassName('van-step__line')[0].style.display = 'none';
    });
    const commodityLsit = ref([
      {
        cid: 1,
        fav: 0,
        icon: 'home',
        orderNum: 'Order #346',
        type: 'Delivered',
        date: 'October 26,2014',
        price: '700',
      },
      {
        cid: 1,
        fav: 1,
        icon: 'office',
        orderNum: 'Order #345',
        type: 'Cancelled',
        date: 'October 26,2017',
        price: '425',
      },
    ]);
    return {
      checked,
      type,
      orderEmpty,
      commodityLsit,
      ordeHistory,
      orderFirst,
      orderSecond,
      orderThird,
      active,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.order-content {
  margin-top: 20px;
  .order-empty {
    margin: 30px 25px;
    text-align: center;
    .van-image {
      margin: 20px;
    }
    .title {
      color: #7f4e1d;
      font-weight: bold;
      font-size: 20px;
      margin-top: -8px;
    }
    .definite {
      font-size: 16px;
      line-height: 19px;
      margin-top: -12px;
      color: #7f4e1d;
      letter-spacing: 1px;
    }
  }
  .order-title {
    padding: 0 23px;
    margin-top: 49px;
    .disbetween;
    .order-date {
      .sc(17px,@title-left);
      font-weight: bold;
      // .discenter;
      span {
        margin-left: 5px;
        letter-spacing: 2px;
      }
    }
    .order-minute {
      .sc(13px,#F37A20);
      letter-spacing: 0.5px;
    }
  }
  .order-steps {
    margin: 36px 0 0 10px;
    .order-step {
      display: flex;
      align-items: center;
      padding: 17px;
      margin-left: 10px;
      .order-image {
        flex: 0 0 20%;
        text-align: center;
      }
      span {
        margin-left: 15px;
        letter-spacing: 2px;
        color: @title-left;
      }
    }
  }
  .order-item {
    .discenter;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
    height: 100px;
    .order-desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding-left: 20px;
      .order-num {
        .sc(16px,@title-left);
        font-weight: bold;
        margin-top: 8px;
      }
      .order-type {
        .sc(13px,#5ec401);
        margin: 5px 0;
      }
      .fail {
        color: #f2110d;
      }
      .order-date {
        font-size: 13px;
        color: @title-left;
        span {
          font-size: 6px;
        }
      }
    }
    .order-price {
      .sc(19px,#F37A20);
      font-weight: bold;
    }
  }
}
</style>