<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          class="firstInput"
          v-model="password"
          name="password"
          placeholder="Old Password"
          disabled
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
        <van-field
          class="secondInput"
          v-model="newPassword"
          name="newPassword"
          placeholder="New Password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
        <van-field
          v-model="conPassword"
          name="conPassword"
          placeholder="Confirm Password"
          :rules="[{ required: true, message: '请确认密码' }]"
        >
          <template #left-icon>
            <van-icon class="iconfont" class-prefix="icon" name="Vector" color="#FF5E00" />
          </template>
          <template #right-icon>
            <van-icon name="eye-o" size="24px" color="#FF5E00" />
          </template>
        </van-field>
      </van-cell-group>
      <bottom-btn firstFont="Confirm" secondFont="Back To Sign In" show="true"></bottom-btn>
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
    const type = ref(route.meta.title);

    const state = reactive({
      password: store.state.user.userinfo.password,
      newPassword: '',
      conPassword: '',
    });
    console.log(state);
    const onSubmit = (values) => {
      console.log('submit', values);
      //  emit('goHome', 'true');
    };
    return {
      ...toRefs(state),
      onSubmit,
      type,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.content {
  .firstInput {
    margin-bottom: 40px;
    margin-top: 58px;
  }
  .secondInput {
    margin-bottom: 10px;
  }
  .country-select {
    display: flex;
    align-items: center;
    .arrows {
      transform: rotate(90deg);
      margin-left: 9px;
    }
  }
}
</style>