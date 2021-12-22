<template>
  <!-- <div class="empty">
    <van-image :src="empty" />
    <div>
      <p class="title">Oops! Order Failed!</p>
      <p class="definite">Something went terribly wrong</p>
    </div>
    <bottom-btn firstFont="Try Again" secondFont="Back Home" show="true"></bottom-btn>
  </div> -->
  <!-- <div class="d4"></div>
  //三角形
  <div class="top"></div>
  //向上箭頭 -->
  <div>我是第一</div>
  <div>我是第二</div>
  <div>我是第三</div>
  <div>
    <input v-model="firstName" />
    <input v-model="secondName" />
    <input v-model="fullName" />
    <input v-model="fullName2" />
  </div>
</template>
<script lang="ts" setup>
// import empty from 'assets/images/empty.png';
import { computed, ref, watch, watchEffect } from 'vue';
import empty from 'assets/empty.png';
import { useRoute, useRouter } from 'vue-router';
import { bottomBtn } from 'comps';
import { createLogger } from 'vuex';
const route = useRoute();
const router = useRouter();
const firstName = ref('123123');
const secondName = ref('123123');

const fullName = computed(() => {
  console.log('computed1');
  return firstName.value + '_' + secondName.value;
});
const fullName2 = computed({
  get() {
    console.log('aaa');
    return firstName.value + '_' + secondName.value;
  },
  set(value: string) {
    console.log('bbb');
    const names = value.split('_');
    firstName.value = names[0];
    secondName.value = names[1];
    return firstName.value + '_' + secondName.value;
  },
});
watchEffect(() => {
  console.log('watchEffect');
  //fullName2.value = firstName.value + '_' + secondName.value;
});
watch(
  fullName2,
  (value) => {
    console.log('watch');
    console.log(fullName2.value);
  },
  {
    immediate: true,
  },
);
const goRegister = (data: any) => {
  router.push({ path: 'register', query: { type: data } });
};
</script>
<style lang="less" scoped>
html {
  font-size: 26.6666666vw;
}
div {
  margin: 0.2rem auto;
  width: 3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #fff;
  font-size: 0.16rem;
  text-align: center;
  background-color: #000;
}
input {
  color: red;
}
// .empty {
//   margin: 0 25px;
//   text-align: center;
//   .van-image {
//     margin: 20px;
//   }
//   .title {
//     color: #7f4e1d;
//     font-weight: bold;
//     font-size: 20px;
//   }
//   .definite {
//     font-size: 16px;
//     line-height: 19px;
//     color: #7f4e1d;
//     letter-spacing: -0.165px;
//   }
//   .bottom {
//     padding: 15px 0 0 0;
//     strong {
//       font-size: 15px;
//     }
//     .first-btn {
//       margin: 15px 0;
//     }
//   }
// }

// .d4 {
//   // width: 0;
//   // height: 0;
//   // border-width: 100px;
//   // border-style: solid;
//   // border-color: transparent #0099cc transparent transparent;
//   width: 0;
//   height: 0;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-bottom: 50px solid red;
// }
// .top {
//   position: absolute;
// }
// .top:before,
// .top:after {
//   position: absolute;
//   content: '';
//   border-width: 10px;
//   border-style: solid;
//   border-color: transparent transparent #0099cc transparent;
// }
// .top:before {
//   border-bottom: 10px #0099cc solid;
// }
// .top:after {
//   top: 1px; /*覆盖并错开1px*/
//   border-bottom: 10px #fff solid;
// }
</style>