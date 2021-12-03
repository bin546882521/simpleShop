<template>
  <div class="home">
    <nav-bar :title="type"></nav-bar>
    <register-First v-if="type == 'Sign up'" @login="login" @goHome="goHome"></register-First>
    <login-First v-if="type == 'Sign in'" @goHome="goHome" @signUp="signUp"></login-First>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { registerFirst, navBar, loginFirst } from 'comps';
import { Toast } from 'vant';
const router = useRouter();
const route = useRoute();
const type = ref(route.query.type);
const goHome = (data: String) => {
  if (data == 'register') {
    Toast.success('注册成功');
  }
  router.push({ path: '/' });
};
const signUp = () => {
  type.value = 'Sign up';
};
const login = () => {
  type.value = 'Sign in';
};
</script>

