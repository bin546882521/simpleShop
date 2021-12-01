<template>
  <div class="content">
    <van-image width="80%" :src="image" class="register-image" />
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-cell-group inset>
        <p class="title" v-show="registerType != 1">{{ title }}</p>
        <p class="tag" v-html="remark" v-show="registerType == 2"></p>
        <p class="sms" v-html="sms" v-if="registerType == 3"></p>
        <div v-if="registerType == 1">
          <van-field
            class="account"
            v-model="username"
            name="username"
            placeholder="Name Surname"
            :rules="[{ required: true, message: '请输入账号' }]"
          />
          <phone-Input></phone-Input>
        </div>
        <div v-if="registerType == 2">
          <van-field
            v-model="password"
            name="password"
            :type="passwordType"
            placeholder="Password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <template #left-icon>
              <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
            </template>
            <template #right-icon>
              <span @click="switchPasswordType">
                <van-icon name="eye-o" size="24px" color="#FF5E00" v-if="passwordType === 'text'" />
                <van-icon name="closed-eye" v-else />
              </span>
            </template>
          </van-field>
          <van-field
            class="secondInput"
            v-model="conPassword"
            :type="passwordType"
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
              <span @click="switchPasswordType">
                <van-icon name="eye-o" size="24px" color="#FF5E00" v-if="passwordType === 'text'" />
                <van-icon name="closed-eye" v-else />
              </span>
            </template>
          </van-field>
        </div>
        <div v-if="registerType == 3">
          <verfication-Code @getCode="getCode"></verfication-Code>
        </div>
        <p class="tag" v-show="registerType == 1" v-html="remark2"></p>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          {{ btnFont }}
        </van-button>
      </div>
      <p class="tag" @click="login" v-show="registerType == 1">
        <center>Already have an account? <font color="#FF5E00">Login</font></center>
      </p>
    </van-form>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onUpdated, onMounted } from 'vue';
import verficationCode from '../components/verificationCode.vue';
import registerFirst from '@/assets/images/registerFirst.png';
import registerSecond from '@/assets/images/registerSecond.png';
import registerThird from '@/assets/images/registerThird.png';
import phoneInput from 'comps/phoneInput.vue';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
  components: {
    verficationCode,
    phoneInput,
  },
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive({
      title: '',
      remark: 'For the security & safety please choose a <br/> password',
      remark2: 'We need to verify you. We will send you a <br> one time verification code.',
      image: registerFirst,
      username: '',
      password: '',
      conPassword: '',
      phoneNumber: '',
      registerType: 1,
      btnFont: 'Next',
      sms: '',
      code: '',
      passwordType: 'text',
    });
    const passValidator = (val: string) => {
      return val == state.password ? true : false;
    };
    const onSubmit = (values: any) => {
      if (values.phoneNumber) {
        state.phoneNumber = values.phoneNumber;
      }
      state.registerType++;
      if (state.registerType == 2) {
        state.image = registerSecond;
        state.title = 'Enter the password';
        state.remark = 'For the security & safety please choose a <br/> password';
      } else if (state.registerType == 3) {
        state.title = 'Enter Verification Code';
        state.image = registerThird;
        state.btnFont = 'Sign in';
        state.sms = 'We have sent SMS to: <br/> 66  666';
      } else if (state.registerType > 3) {
        getData();
        emit('goHome', 'true');
      }
    };
    const getCode = (code: string) => {
      state.code = code;
      if (state.code == '66666') {
        const toast = Toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner',
        });
        getData();
        setTimeout(() => {
          toast.clear();
          emit('goHome', 'register');
        }, 3000);
      }
    };
    const getData = () => {
      let data = {
        name: state.username,
        phone: state.phoneNumber,
        password: state.password,
        login: false,
        favorite: [],
      };
      store.commit('setUserInfo', data);
    };
    const login = () => {
      emit('login', 'Sign in');
    };
    const onFailed = (errorInfo: string) => {
      console.log('failed', errorInfo);
    };
    const switchPasswordType = () => {
      state.passwordType = state.passwordType === 'password' ? 'text' : 'password';
    };
    return {
      ...toRefs(state),
      onSubmit,
      getCode,
      login,
      passValidator,
      onFailed,
      getData,
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
  .title {
    color: @brown;
    font-weight: bold;
    font-size: 20px;
    text-align: left;
  }
  .account {
    margin-bottom: 15px;
  }
  .tag {
    font-size: 16px;
    line-height: 17px;
    color: @brown;
    text-align: left;
  }
  .sms {
    font-size: 18px;
    line-height: 22px;
    text-align: left;
    color: @brown;
  }
  .secondInput {
    margin-top: 15px;
  }
}
</style>