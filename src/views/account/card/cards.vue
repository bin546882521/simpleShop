<template>
  <div class="home">
    <nav-bar :title="type" addShow="true" @add="addCard"></nav-bar>
    <div class="card-empty" v-if="empty == true">
      <van-image :src="cardBackground" />
      <div>
        <p class="title">No Saved Card</p>
        <p class="definite">You can save your card info to<br />makes purchase easier,faster</p>
      </div>
    </div>
    <div v-else>
      <van-swipe-cell :right-width="50" v-for="(item, index) in commodityLsit" :key="index">
        <div class="card-item">
          <div class="card-image">
            <van-image :src="item.imgUrl" class="fruit" />
          </div>
          <div class="card-desc">
            <span class="card-name">{{ item.name }}</span>
            <div class="card-btn">
              <div class="cardNum">{{ item.cardNum }}</div>
            </div>
          </div>
          <van-icon name="arrow" v-if="item.fav == 0" size="15" />
          <van-icon name="success" v-else color="#58A919" size="20" />
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
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { navBar } from 'comps';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import cardBackground from 'assets/cardBackground.png';
export default {
  components: {
    navBar,
  },
  setup(props, ctx) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const type = ref(route.meta.title);
    const empty = ref(false);
    const commodityLsit = ref([
      {
        cid: 1,
        fav: 0,
        imgUrl: '/src/assets/images/cardTwo.png',
        name: 'My Card',
        cardNum: '5342 **** **** 6745',
      },
      {
        cid: 1,
        fav: 1,
        imgUrl: '/src/assets/images/cardOne.png',
        name: 'Apple Pay',
        cardNum: '5342 **** **** 6745',
      },
    ]);
    const deleteGood = (index: number) => {
      ctx.emit('deleteGood', index);
    };
    const addCard = (item: {}) => {
      router.push({ path: '/account/newCard' });
    };
    return {
      type,
      commodityLsit,
      empty,
      cardBackground,
      deleteGood,
      addCard,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.card-empty {
  margin: 0 25px;
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
.card-item {
  .discenter;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  .card-image {
    flex: 0 0 20%;
    // margin: 10px;
    text-align: center;
  }
  .card-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 40px 10px 10px 10px;
    .card-name {
      .sc(18px,@title-left);
      font-weight: bold;
    }
    .card-btn {
      display: flex;
      justify-content: space-between;
      .van-stepper {
        background: #f4f4f4;
        padding: 2px;
        width: 98px;
        .disbetween();
        .borderRadius(30px);
      }
      .card-add {
        .sc(14px,@orange);
      }
      .cardNum {
        font-size: 13px;
        color: @title-left;
        line-height: 28px;
        margin-top: 10px;
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