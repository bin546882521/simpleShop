<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view class="router-view" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </van-config-provider>
</template>

<script lang="ts">
export default {
  setup() {
    const themeVars = {
      buttonPrimaryBorderColor: '#FF5E00',
      buttonPrimaryBackgroundColor: '#FF5E00',
      buttonDefaultHeight: '50px',
      buttonNormalFontSize: '20px',
      tabbarHeight: '60px',
      searchContentBackgroundColor: '#F3F3F3',
      navBarHeight: '40px',
      navBarIconColor: '#FF5E00',
      tabsBottomBarWidth: '85px',
      tabTextColor: '#804F1E',
      tabFontSize: '20px',
      tabActiveTextColor: '#804F1E',
      tabsBottomBarColor: '#FF5E00',
      stepperButtonRoundThemeColor: '#fff',
      stepperInputTextColor: '#6D3805',
      stepperInputFontSize: '20px',
      buttonDangerBackgroundColor: '#A42B32',
      fieldInputTextColor: '#6D3805',
      // dividerBorderColor:'#6D3805'
    };
    document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    });
    var lastTouchEnd = 0;
    document.addEventListener(
      'touchend',
      function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false,
    );
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault();
    });
    return {
      themeVars,
    };
  },
};
</script>

<style lang="less">
// @import '@/common/style/common';
</style>
