<template>
  <div class="main">
    <nav-bar :title="type"></nav-bar>
    <ul class="user-list">
      <li class="van-hairline--bottom" @click="goTo('/account/editProfile')">
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="account" size="22" />
          <span>Edit Profile</span>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/account/changePassword')">
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="key" size="22" />
          <span>Change Password</span>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="van-hairline--bottom" @click="goTo('/account/cards', { from: 'mine' })">
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="cards" size="22" />
          <span>My Cards</span>
        </div>
        <van-icon name="arrow" />
      </li>
      <p class="profile-title">App Settings</p>
      <li>
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="bell" size="22" />
          <span>Notifications</span>
        </div>
        <van-switch
          :model-value="checked"
          @update:model-value="onUpdateValue"
          size="22px"
          active-color="#FF5E00"
        />
      </li>
      <li>
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="language" size="22" />
          <span>Language</span>
        </div>
        <div class="profile-right">
          <span>Engilish</span>
          <van-icon name="arrow" />
        </div>
      </li>
      <li @click="logout('/login')">
        <div class="profile-left">
          <van-icon class="iconfont" class-prefix="icon" name="logout" size="22" />
          <span>Logout</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import navBar from '@/components/navBar.vue';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  components: {
    navBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);
    const checked: any = ref(true);
    const goTo = (r: string, query: any) => {
      router.push({ path: r, query: query || {} });
    };
    const logout = () => {
      router.push({ path: '/login' });
      store.commit('setLogin', false);
    };
    const onUpdateValue = (newValue: Boolean) => {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？',
      }).then(() => {
        checked.value = newValue;
      });
    };
    return {
      checked,
      type,
      goTo,
      onUpdateValue,
      logout,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/common/style/mixin';
.user-list {
  padding: 0 20px;
  margin-top: 20px;
  .profile-title {
    font-weight: bold;
    .sc(22px,@orange);
  }
  li {
    height: 50px;
    line-height: 50px;
    .sc(17px,@title-left);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.5px;
    margin-bottom: 7px;
    .profile-left {
      .discenter();
      span {
        margin-left: 15px;
      }
    }
    .profile-right {
      span {
        .sc(15px,#804f1e);
        font-weight: 100;
        margin-right: 10px;
      }
    }
  }
}
</style>