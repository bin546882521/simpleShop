<template>
  <div class="content">
    <nav-bar :title="type"></nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="card-content">
          <van-field
            v-model="title"
            name="picker"
            is-link
            placeholder="Address Title"
            @click="picker('title')"
          >
          </van-field>
        </div>
        <div class="card-content">
          <van-field v-model="name" name="name" placeholder="Name Surname" />
        </div>
        <div class="card-content">
          <van-field
            v-model="city"
            is-link
            name="picker"
            placeholder="City"
            @click="picker('city')"
          >
          </van-field>
        </div>
        <div class="card-content">
          <van-field
            v-model="address"
            name="address"
            placeholder="Address"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
          </van-field>
        </div>
      </van-cell-group>
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
      <bottom-btn firstFont="Update Address"></bottom-btn>
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
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const type = ref(route.meta.title);
    const state: {
      title: string;
      name: string;
      city: string;
      address: string;
      columns: Array<string>;
    } = reactive({
      title: '',
      name: '',
      city: '',
      address: '',
      columns: [],
    });
    const showPicker = ref(false);
    const pickType = ref('');
    const picker = (type: string) => {
      pickType.value = type;
      if (pickType.value == 'title') {
        state.columns = ['Home', 'Office'];
      } else {
        state.columns = ['Hangzhou', 'Shanghai'];
      }
      console.log(state.columns);
      showPicker.value = true;
    };
    const onConfirm = (value: string) => {
      if (pickType.value == 'title') {
        state.title = value;
      } else {
        state.city = value;
      }
      showPicker.value = false;
    };

    const onSubmit = (values: {}) => {
      console.log('submit', values);
      //  emit('goHome', 'true');
    };
    return {
      ...toRefs(state),
      onSubmit,
      picker,
      onConfirm,
      sweden,
      type,
      showPicker,
      pickType,
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