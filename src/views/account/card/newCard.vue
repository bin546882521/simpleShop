<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="card-content">
          <div class="card-title">Card number</div>
          <van-field
            v-model="cardNumber"
            type="password"
            name="cardNumber"
            placeholder="cardNumber"
            :rules="[{ required: true, message: '请输入卡账号' }]"
          >
          </van-field>
        </div>
        <div class="card-content">
          <div class="card-title">Expiry Date</div>
          <van-field
            v-model="cardDate"
            readonly
            name="calendar"
            placeholder="选择日期"
            @click="showCalendar = true"
          />
        </div>
        <div class="card-content">
          <div class="card-title">CCV</div>
          <van-field
            v-model="cardCcv"
            type="password"
            name="ccv"
            placeholder="ccv"
            :rules="[{ required: true, message: '请输入验证码' }]"
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
export default {
  components: {
    navBar,
    bottomBtn,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      type: route.meta.title,
      cardNumber: '',
      cardDate: '',
      cardCcv: '',
      showCalendar: false,
    });
    const onConfirm = (date: any) => {
      state.cardDate = `${date.getMonth() + 1}/${date.getDate()}`;
      state.showCalendar = false;
    };
    const onSubmit = (values: any) => {
      console.log('submit', values);
      // router.push({ path: '/account/cards', query: { empty: false } });
      // router.push({path:'/account/cards',{empty:false}})
    };
    return {
      ...toRefs(state),
      onSubmit,
      onConfirm,
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