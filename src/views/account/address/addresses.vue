<template>
  <div class="address">
    <nav-bar :title="type" addShow="true" @add="addCard"></nav-bar>
    <div>
      <van-swipe-cell :right-width="50" v-for="(item, index) in commodityLsit" :key="index">
        <div class="address-item" @click="editAddress(item)">
          <div class="address-image">
            <van-icon
              class="iconfont"
              class-prefix="icon"
              :name="item.icon"
              size="22"
              color="#6D3805"
            />
          </div>
          <div class="address-desc">
            <span class="address-name">{{ item.title }}</span>
            <div class="addressNum">{{ item.address }}</div>
          </div>
          <van-icon name="arrow" size="15" />
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
import navBar from '@/components/navBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import cardBackground from '@/assets/images/cardBackground.png';
export default {
  components: {
    navBar,
  },
  setup(props, ctx) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const type = ref(route.meta.title);
    const empty = ref(true);

    const commodityLsit = ref([
      {
        cid: 1,
        fav: 0,
        icon: 'home',
        title: 'Home',
        address: 'Lungangen6 41722',
      },
      {
        cid: 1,
        fav: 1,
        icon: 'office',
        title: 'Office',
        address: 'Lungangen6 41722',
      },
    ]);
    const deleteGood = (index: number) => {
      ctx.emit('deleteGood', index);
    };
    const addCard = (item: {}) => {
      router.push({ path: '/account/newAddress' });
    };
    const editAddress = (item: {}) => {
      router.push({ path: '/account/editAddress' });
    };
    return {
      type,
      commodityLsit,
      empty,
      cardBackground,
      deleteGood,
      addCard,
      editAddress,
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
.address-item {
  .discenter;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  height: 100px;
  .address-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-left: 10px;
    .address-name {
      .sc(18px,@title-left);
      font-weight: bold;
      margin-top: 8px;
    }
    .addressNum {
      font-size: 13px;
      color: @title-left;
      margin-top: 10px;
      span {
        font-size: 6px;
      }
    }
  }
}
.delete-button {
  // width: 50px;
  height: 100%;
}
</style>