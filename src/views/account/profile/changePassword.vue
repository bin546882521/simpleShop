<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          class="firstInput"
          v-model="password"
          name="password"
          placeholder="Old Password"
          disabled
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
        <van-field
          class="secondInput"
          v-model="newPassword"
          name="newPassword"
          placeholder="New Password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
        <van-field
          v-model="conPassword"
          name="conPassword"
          placeholder="Confirm Password"
          :rules="[
            { required: true, message: '请确认密码' },
            { validator: passValidator, message: '密码不一致' },
          ]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
      </van-cell-group>
      <bottom-btn
        firstFont="Confirm"
        secondFont="Back To Sign In"
        show="true"
        @secondNext="signIn"
      ></bottom-btn>
    </van-form>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import navBar from '@/components/navBar.vue';
import bottomBtn from '@/components/bottomBtn.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { delayToast } from 'utils/common';
export default {
  components: {
    navBar,
    bottomBtn,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      type: route.meta.title,
      password: store.state.user.userinfo.password,
      newPassword: '',
      conPassword: '',
    });
    const passValidator = (val: string) => {
      return val == state.newPassword ? true : false;
    };
    //const onSubmit: (data: { conPassword: string }) => {
    //console.log('submit', data.conPassword);
    // const toast = Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner',
    // });
    // setTimeout(() => {
    //   toast.clear();
    //   store.commit('setUserPassword', data.conPassword);
    //
    //   console.log(store.state.user.userinfo.password);
    // }, 3000);
    //  emit('goHome', 'true');
    //};
    const onSubmit = (data: { conPassword: string }) => {
      delayToast(() => {
        store.commit('setUserPassword', data.conPassword);
        state.password = store.state.user.userinfo.password;
        console.log(state.password);
      }, 3000);
    };
    const signIn = () => {
      router.push({ path: '/login' });
    };
    return {
      ...toRefs(state),
      onSubmit,
      passValidator,
      signIn,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.content {
  .firstInput {
    margin-bottom: 40px;
    margin-top: 58px;
  }
  .secondInput {
    margin-bottom: 10px;
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