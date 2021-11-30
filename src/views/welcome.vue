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
<script lang="ts">
import illustration from 'assets/images/illustration.png';
import { useRoute, useRouter } from 'vue-router';
import Screen from 'comps/screen.vue';
import bottomBtn from 'comps/bottomBtn.vue';
// import { useCurrentInstance } from 'utils/common';
export default {
  components: {
    Screen,
    bottomBtn,
  },
  setup() {
    const router = useRouter();
    // const { proxy } = useCurrentInstance();
    //getCurrentInstance().appContext.config.globalProperties.$Toast('this');
    //proxy.$Toast('this');
    const screenData = {
      imageUrl: illustration,
      title: 'Realax and shop',
      definite:
        'Shop online and get grocories <br> delivered from stores to your home <br> in as fast as 1 hour .',
    };
    const goRegister = (data: string) => {
      console.log(data);
      router.push({ path: 'register', query: { type: data } });
    };
    return {
      screenData,
      illustration,
      goRegister,
    };
  },
};
</script>
<style lang="less" scoped>
.login-screen {
  margin: 0 25px;
  text-align: center;
}
</style>