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
        <van-field v-model="phone" name="phone" placeholder="Phone Number" disabled>
          <template #label>
            <div class="country-select">
              <van-image :src="sweden" />
              <van-icon name="play" size="12" class="arrows" color="#828282" />
            </div>
          </template>
        </van-field>
      </van-cell-group>
      <bottom-btn firstFont="update Profile"></bottom-btn>
    </van-form>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import navBar from '@/components/navBar.vue';
import bottomBtn from '@/components/bottomBtn.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import sweden from '@/assets/images/SE-Sweden-Flag-icon.png';
export default {
  components: {
    navBar,
    bottomBtn,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);
    const state = reactive(store.state.user.userinfo);
    console.log(state);

    const onSubmit = (values: {}) => {
      console.log('submit', values);
      //  emit('goHome', 'true');
      router.push({ path: '/account/changePassword' });
    };
    return {
      ...toRefs(state),
      onSubmit,
      sweden,
      type,
    };
  },
};
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