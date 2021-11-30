<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="card-content">
          <div class="card-title">Card number</div>
          <van-field
            v-model="name"
            :type="password"
            name="password"
            placeholder="name"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
          </van-field>
        </div>
        <div class="card-content">
          <div class="card-title">Expiry Date</div>
          <van-field
            v-model="result"
            readonly
            name="calendar"
            placeholder="选择日期"
            @click="showCalendar = true"
          />
        </div>
        <div class="card-content">
          <div class="card-title">CCV</div>
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="password"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
          </van-field>
        </div>
      </van-cell-group>
      <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
      <bottom-btn firstFont="Add Card"></bottom-btn>
    </van-form>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import navBar from '@/components/navBar.vue';
import bottomBtn from '@/components/bottomBtn.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import sweden from '@/assets/images/SE-Sweden-Flag-icon.png';
export default {
  components: {
    navBar,
    bottomBtn,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);

    const state = reactive(store.state.user.userinfo);
    const result = ref('');
    const showCalendar = ref(false);
    const onConfirm = (date) => {
      result.value = `${date.getMonth() + 1}/${date.getDate()}`;
      showCalendar.value = false;
    };
    console.log(state);

    const photoNumber = ref('');
    const password = ref('1231');
    const passwordType = ref('password');

    const onSubmit = (values) => {
      console.log('submit', values);
      //  emit('goHome', 'true');
    };
    return {
      ...toRefs(state),
      onSubmit,
      result,
      password,
      onConfirm,
      showCalendar,
      sweden,
      type,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.content {
  .card-content {
    margin: 30px 0 30px 0;
    .card-title {
      .sc(17px,@title-left);
      font-weight: bold;
    }
  }
}
</style>