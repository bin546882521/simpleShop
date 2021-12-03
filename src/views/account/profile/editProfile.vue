<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          class="firstInput"
          v-model="name"
          :type="name"
          name="name"
          placeholder="name"
          disabled
        >
        </van-field>
        <phone-Input></phone-Input>
      </van-cell-group>
      <bottom-btn firstFont="update Profile"></bottom-btn>
    </van-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import { bottomBtn, navBar, phoneInput } from 'comps';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();
const type = ref(route.meta.title);
const state = reactive(store.state.user.userinfo);
const onSubmit = (values: {}) => {
  router.go(-1);
};
const { name } = toRefs(state);
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.content {
  .firstInput {
    margin-bottom: 30px;
    margin-top: 58px;
  }
  .country-select {
    display: flex;
    align-items: center;
    .arrows {
      transform: rotate(90deg);
      margin-left: 9px;
    }
  }
}
</style>