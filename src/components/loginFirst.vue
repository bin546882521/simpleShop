<template>
  <div class="content">
    <van-image width="80%" :src="register1" class="register-image" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="tag">
          Enter your phone number and <br />
          password to access your account.
        </div>
        <phone-Input></phone-Input>
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
import register1 from 'assets/Group 7040.png';
import phoneInput from 'comps/phoneInput.vue';
import { useStore } from 'vuex';
import { Toast } from 'vant';

export default {
  components: {
    phoneInput,
  },
  setup(props, { emit }) {
    const passwordType = ref('password');
    const store = useStore();
    const state: {
      password: string;
      userInfo: { phone: string; password: string };
    } = reactive({
      password: '',
      userInfo: store.state.user.userinfo,
    });
    const switchPasswordType = () => {
      passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
    };
    const onSubmit = (values: { phoneNumber: string; password: string }) => {
      if (
        values.phoneNumber != state.userInfo.phone ||
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
  .tag {
    font-size: 15px;
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