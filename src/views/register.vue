<template>
  <div class="home">
    <nav-bar :title="type"></nav-bar>
    <register-First v-if="type == 'Sign up'" @login="login" @goHome="goHome"></register-First>
    <login-First v-if="type == 'Sign in'" @goHome="goHome" @signUp="signUp"></login-First>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import navBar from '@/components/navBar.vue';
import registerFirst from '@/components/registerFirst.vue';
import loginFirst from '@/components/loginFirst.vue';
import { Toast } from 'vant';
import { useStore } from 'vuex';
import { getServerTime } from '@/api/index';
export default {
  components: {
    navBar,
    registerFirst,
    loginFirst,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const type = ref(route.query.type);
    const store = useStore();
    const goHome = (data: String) => {
      if (data == 'register') {
        Toast.success('注册成功');
      }
      console.log(store.state.user.userinfo);
      router.push({ path: '/' });
    };
    // const init = async () => {
    //   Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true
    //   });
    //   const { id } = route.query
    //   const { data } = await getOrderDetail(id)
    //   state.detail = data
    //   Toast.clear()
    // }
    // const goHome = async () => {
    //   let res = await getServerTime();
    //   console.log('res', res);
    // };
    const signUp = (data) => {
      type.value = 'Sign up';
      console.log(type);
      // router.push({path:'/register',query: {type:data}})
    };
    const login = (data) => {
      type.value = 'Sign in';
    };
    return {
      type,
      goHome,
      signUp,
      login,
    };
  },
};
</script>
<style lang="less">
</style>

