<template>
  <div class="home">
    <div class="page_header">
      <div class="page_title">
        <header class="good-header">Lungangen</header>
        <van-config-provider>
          <van-search v-model="value" placeholder="Search" background="F3F3F3" />
        </van-config-provider>
      </div>
      <div class="page_search"></div>
    </div>
    <div class="commodity">
      <div class="commodity-content">
        <div
          class="commodity-item"
          v-for="(item, index) in commodityLsit"
          :key="index"
          @click="goDeatail(item, index)"
        >
          <van-image round width="90%" :src="item.imgUrl" />
          <div class="commodity-desc">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped>
import { reactive, ref, toRefs, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { shopVariety, exploreCommodityLsit } from '@/mock/data';
export default {
  setup() {
    const value = ref('');
    const router = useRouter();
    onMounted(() => {
      setTimeout(() => {
        // goLogin()
      }, 2000);
    });
    const state = reactive({
      code: '',
      commodityLsit: exploreCommodityLsit,
    });
    const goDeatail = (item, index) => {
      console.log(item, index);
      router.push({ path: '/explore/detail', query: { name: item.name } });
    };
    return { ...toRefs(state), exploreCommodityLsit, value, goDeatail };
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
    .commodity-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 8px;
      .commodity-item {
        margin: 0 5px;
        text-align: center;
        flex: 0 0 30%;
        margin-bottom: 20px;
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