<template>
  <div class="content">
    <van-image width="80%" :src="register1" class="register-image" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="tag">
          Enter your phone number and <br />
          password to access your account.
        </div>
        <van-field
          class="photoNumber"
          v-model="photoNumber"
          name="photoNumber"
          placeholder="Phone Number"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        >
          <template #label>
            <div class="country-select">
              <van-image :src="sweden" />
              <van-icon name="play" size="12" class="arrows" color="#828282" />
            </div>
          </template>
        </van-field>
        <van-field
          v-model="password"
          :type="passwordType"
          name="password"
          placeholder="Password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #right-icon>
            <span @click="switchPasswordType">
              <van-icon name="eye" size="24px" color="#7F4E1D" v-if="passwordType === 'password'" />
              <van-icon name="closed-eye" v-else />
            </span>
          </template>
        </van-field>
        <p class="forget">Forgote Password</p>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> Sign in </van-button>
      </div>
      <p class="tag" @click="signUp">
        <center>Don't have an account? <font color="#FF5E00">Sign up</font></center>
      </p>
    </van-form>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import register1 from '@/assets/images/Group 7040.png';
import sweden from '@/assets/images/SE-Sweden-Flag-icon.png';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
  setup(props, { emit }) {
    const passwordType = ref('password');
    const store = useStore();
    const state: {
      photoNumber: string;
      password: string;
      userInfo: { phone: string; password: string };
    } = reactive({
      photoNumber: '',
      password: '',
      userInfo: store.state.user.userinfo,
    });
    const switchPasswordType = () => {
      passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
    };
    const onSubmit = (values: { photoNumber: string; password: string }) => {
      if (
        values.photoNumber != state.userInfo.phone ||
        values.password != state.userInfo.password
      ) {
        Toast.fail('账号或密码错误');
        return;
      }
      store.commit('setLogin', true);
      emit('goHome', 'login');
    };
    const signUp = () => {
      emit('signUp', 'Sign up');
    };
    return {
      ...toRefs(state),
      register1,
      sweden,
      passwordType,
      onSubmit,
      signUp,
      switchPasswordType,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.content {
  text-align: center;
  .register-image {
    .im(80%,-13%);
  }
  .photoNumber {
    margin-bottom: 15px;
  }
  .country-select {
    display: flex;
    align-items: center;
    .arrows {
      transform: rotate(90deg);
      margin-left: 9px;
    }
  }
  .tag {
    font-size: 15px;
    // line-height: 15px;
    color: #7f4e1d;
    text-align: left;
    margin-bottom: 10px;
  }
  .forget {
    font-size: 14px;
    color: #ff5e00;
    text-align: right;
  }
}
</style>