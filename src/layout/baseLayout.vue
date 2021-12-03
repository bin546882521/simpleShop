<template>
  <div class="main">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="active" active-color="#FF5E00" inactive-color="#6D3805">
    <van-tabbar-item :icon="item.icon" :to="item.url" v-for="(item, index) in menus" :key="index">
      <span>{{ item.name }}</span>
      <template #icon="">
        <van-icon class="iconfont" class-prefix="icon" :name="item.icon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getMenus } from '@/api/index';
const route = useRoute();
const router = useRouter();
const active = ref(0);
const menus = ref([]);
watch([route], () => {
  setActive();
});
onMounted(() => {
  setActive();
  menusData();
});
const menusData = async () => {
  const res = await getMenus();
  if (res.data) {
    menus.value = res.data.menus;
  }
};
const setActive = () => {
  menus.value.map((v: { url: string }, index: number) => {
    if (v.url === route.path) return (active.value = index);
  });
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 51px);
  overflow-y: auto;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-top: 1px solid #e9e9e9;
  border-radius: 40px 40px 0 0;
  box-shadow: 0px 0px 10px 3px #e9e9e9;
}
</style>
