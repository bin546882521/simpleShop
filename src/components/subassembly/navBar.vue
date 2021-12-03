<template>
  <div class="appbar" v-if="appbar">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-image :src="decorate" class="decorate" v-if="imageShow" />
        <van-icon name="plus" size="18" v-if="addShow" @click="add" />
      </template>
    </van-nav-bar>
  </div>
  <center class="head">{{ headData }}</center>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import decorate from 'assets/top-decorate.png';
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
      this.headData = newVal;
    },
  },
  setup(props, ctx) {
    const router = useRouter();
    const headData = ref(props.title);
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
      headData,
      onClickLeft,
      onClickRight,
      add,
      decorate,
    };
  },
});
</script>
<style lang="less">
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
