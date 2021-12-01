<template>
  <div class="main">
    <div class="login-screen">
      <Screen :screenData="screenData"></Screen>
    </div>
    <bottom-btn
      firstFont="Sign up"
      secondFont="Sign in"
      @firstNext="goRegister('Sign up')"
      @secondNext="goRegister('Sign in')"
      show="true"
    ></bottom-btn>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { bottomBtn, Screen } from 'comps';
import illustration from 'assets/illustration.png';
const router = useRouter();
const screenData = {
  imageUrl: illustration,
  title: 'Realax and shop',
  definite:
    'Shop online and get grocories <br> delivered from stores to your home <br> in as fast as 1 hour .',
};
const goRegister = (data: string) => {
  router.push({ path: 'register', query: { type: data } });
};
</script>
<style lang="less" scoped>
.login-screen {
  margin: 0 25px;
  text-align: center;
}
</style>