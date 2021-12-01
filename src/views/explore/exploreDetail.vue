<template>
  <div class="explore-detail">
    <nav-bar :title="name"></nav-bar>
    <van-search v-model="value" placeholder="Search" background="F3F3F3" />
    <van-tabs v-model:active="active" swipeable>
      <van-tab v-for="(item, index) in categories" :key="index" :title="item.categories_name">
        <div class="commodity-content" v-if="item.lists.length > 0">
          <div v-for="(stem, sndex) in item.lists" :key="sndex">
            <div class="commodity-deal-item" v-if="stem.type == 'commodity'">
              <div class="commoditys" @click="goDetail(item)">
                <van-image width="90px" height="85px" :src="stem.imgUrl" />
                <div class="commodity-deal-desc">
                  <div class="name">{{ stem.name }}</div>
                  <div class="weight">1kg</div>
                  <div class="price">$ {{ stem.price }}</div>
                  <div class="add-icon">
                    <van-icon name="plus" color="#FFF" size="15" />
                  </div>
                </div>
              </div>
            </div>
            <div class="commodity-adver" v-if="stem.type == 'adver'">
              <van-image :src="stem.imgUrl" />
            </div>
          </div>
        </div>
        <van-empty image="error" description="There is no data" v-else />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import navBar from '@/components/navBar.vue';
import { exploreMenus } from '@/mock/data';

const value = ref('');
const active = ref(0);
const router = useRouter();
const route = useRoute();
const name = ref(route.query.name);
const categories = reactive(exploreMenus);
const goDetail = () => {
  router.push({ path: '/shopDetail', query: { good: 1 } });
};
</script>
<style lang="less" scoped>
.commodity-content {
  margin: 0 14px;
  column-count: 2;
  column-gap: 10px;
  .commodity-deal-item {
    border-radius: 15px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 6px 2px #e9e9e9;
    margin-top: 14px;
    display: inline-block;
    overflow: hidden;
    .commoditys {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 9px;
      .commodity-deal-desc {
        width: 90%;
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
  }
  .commodity-adver {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9px;
  }
}
</style>

