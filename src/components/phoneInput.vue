<template>
  <div>
    <van-field
      class="phoneNumber"
      v-model="phoneNumber"
      name="phoneNumber"
      placeholder="Phone Number"
      :rules="[
        { required: true, message: '请填写手机号码' },
        { validator: phoneValidator, message: '请输入正确手机号' },
      ]"
    >
      <template #label>
        <div class="country-select" @click="show = true">
          <van-image :src="imageType" width="28px" />
          <van-icon name="play" size="12" class="arrows" color="#828282" />
        </div>
      </template>
    </van-field>
    <van-action-sheet v-model:show="show" cancel-text="取消" close-on-click-action>
      <div
        class="action-title"
        v-for="(item, index) in actionLsit"
        :key="index"
        @click="onSelect(index)"
      >
        <van-image :src="item.imageUrl" width="30px" />
        <span>{{ item.country }}</span>
      </div>
    </van-action-sheet>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import sweden from 'assets/SE-Sweden-Flag-icon.png';
import china from 'assets/china.jpg';

const show = ref(false);
const imageType = ref(china);
const phoneNumber = ref('');
const actionLsit = [
  {
    imageUrl: china,
    country: '中国',
  },
  {
    imageUrl: sweden,
    country: '瑞典',
  },
];
const onSelect = (index: number) => {
  show.value = false;
  imageType.value = index == 0 ? china : sweden;
};
const phoneValidator = (val: string) =>
  new Promise((resolve) => {
    resolve(new RegExp(/^[1][3,4,5,7,8,9][0-9]{9}$/).test(val));
  });
</script>
<style lang="less">
@import '@/common/style/mixin';
.phoneNumber {
  margin-bottom: 15px;
}
.country-select {
  height: 28px;
  display: flex;
  align-items: center;
  .arrows {
    transform: rotate(90deg);
    margin-left: 9px;
  }
}
.action-title {
  .discenter;
  padding: 10px;
  span {
    .sc(15px,@title-left);
    margin-left: 10px;
  }
}
</style>