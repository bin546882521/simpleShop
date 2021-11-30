<template>
  <div class="home">
    <!-- <van-image :src="illustration" />  
        <div>
            <p class="title">Realax and shop</p>
            <p class="definite">Shop online and get grocories <br> delivered from stores to your home <br> in as fast as 1 hour .</p>
        </div> -->
    <div class="login-screen">
      <Screen :screenData="screenData"></Screen>
    </div>
    <!-- <div class="bottom">
      <van-button round block type="primary" class="first-btn" @click="goRegister('Sign up')"
        ><strong>Sign up</strong></van-button
      >
      <van-button
        round
        block
        color="#FF5E00"
        plain
        class="second-btn"
        @click="goRegister('Sign in')"
        ><strong>Sign in</strong></van-button
      >
    </div> -->
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
import { getCurrentInstance, reactive, ref, toRefs } from 'vue';
import illustration from '@/assets/images/illustration.png';
import { useRoute, useRouter } from 'vue-router';
import Screen from '@/components/screen.vue';
import bottomBtn from '@/components/bottomBtn.vue';
import { useCurrentInstance } from '@/util/common';
export default {
  components: {
    Screen,
    bottomBtn,
  },
  setup(ctx, context) {
    const route = useRoute();
    const router = useRouter();
    const { proxy } = useCurrentInstance();
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