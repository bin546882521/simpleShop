<template>
  <!-- <div class="container">
    <div class="appbar" v-if="appbar">
      <van-nav-bar
        :title="title"
        left-text="返回"
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div> -->
  <div class="appbar" v-if="appbar">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-image :src="decorate" class="decorate" v-if="imageShow" />
        <van-icon name="plus" size="18" v-if="addShow" @click="add" />
      </template>
    </van-nav-bar>
  </div>
  <!-- title="type == 'up' ? 'Sign up':'Sign in' -->
  <center class="head">{{ testData }}</center>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import decorate from '@/assets/images/top-decorate.png';
export default defineComponent({
  name: 'AppContainer',
  props: {
    appbar: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    back: {
      type: String,
      default: '',
    },
    imageShow: {
      tyoe: Boolean,
      default: false,
    },
    addShow: {
      tyoe: Boolean,
      default: false,
    },
  },
  watch: {
    title(newVal, oldVal) {
      console.log(newVal + oldVal);
      this.testData = newVal;
    },
  },
  setup(props, ctx) {
    const router = useRouter();
    const testData = ref(props.title);
    console.log(testData);
    const onClickLeft = () => {
      router.back();
      ctx.emit('click-left');
    };
    const onClickRight = () => {
      ctx.emit('click-right');
    };
    const add = () => {
      ctx.emit('add');
    };
    return {
      testData,
      onClickLeft,
      onClickRight,
      add,
      decorate,
    };
  },
});
</script>
<style lang="less">
// @import "@assets/style/mixin.scss";
// .container {
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   .appbar {
//     height: 40px;
//     box-shadow: 1px 2px 3px #eeeeee;
//   }
//   .content {
//     flex: 1;
//     overflow: auto;
//   }
// }
.head {
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.41px;
  color: #ff5e00;
}
.decorate {
  top: 73px !important;
  right: -15px !important;
}
</style>
