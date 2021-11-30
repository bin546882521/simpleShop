<template>
  <div class="container">
    <div class="vcode" id="vertifycode">
      <input v-model="code" maxlength="5" :disabled="disabled" class="code" id="code" ref="divef" />
      <div class="labels">
        <label
          class="label"
          for="code"
          :class="{ active: focus === true && index === currentIndex }"
          v-for="(item, index) in length"
          :key="index"
          v-text="arrCode[index]"
        >
        </label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, computed, watch, onMounted } from 'vue';
import { Toast } from 'vant';
export default {
  setup(props, { emit }) {
    const state = reactive({
      length: 5,
      //currentIndex: 0,
      code: '',
      focus: true,
      //arrCode: [],
      disabled: false,
    });

    const arrCode = computed(() => {
      return state.code.split('');
    });
    const currentIndex = computed(() => {
      console.log(state.code.length);
      return state.code.length;
    });
    //     watch([() => state.code], values => {
    //       //state.code = values.replace(/[^\d]/g,'');
    //       console.log('监视多个数据', values)
    //       console.log(values.join(''))
    //       state.code = values.join('').replace(/[^\d]/g,'');
    //       if(state.code.length > 2){
    //           state.disabled = true;1231
    //           //state.focus = false;
    //           console.log('disabled');
    //       }
    //    })
    const divef = ref(null);
    onMounted(() => {
      divef.value.focus();
    }),
      watch(
        () => state.code,
        (newValue, oldValue) => {
          state.code = newValue.replace(/[^\d]/g, '');
          if (state.code.length >= 5) {
            if (state.code != '66666') {
              state.code = '';
              Toast.fail('验证码是:66666');
            } else {
              state.disabled = true;
              divef.value.blur();
              emit('getCode', state.code);
            }
            console.log(state.code);
          }
        },
      );
    return {
      ...toRefs(state),
      divef,
      arrCode,
      currentIndex,
    };
  },
};
</script>
<style lang="less" scoped>
@keyframes animate {
  100% {
    opacity: 0;
  }
}
.container {
  // padding: 5%;
  margin-bottom: 30px;
}
.vcode {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.code {
  width: 100%;
  padding: 0;
  height: 40px;
  font-size: 35px;
  overflow: hidden;
  border: none;
  outline: none;
  opacity: 0;
  margin-left: -100%; // ios上透明度为0时依然有光标
  -webkit-tap-highlight-color: transparent;
}
.labels {
  display: flex;
  display: -webkit-flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin-top: -40px;
  -webkit-tap-highlight-color: transparent; // 解决ios点击灰色阴影的问题
}
.label {
  height: 34px;
  width: 12%;
  border-bottom: solid 2px #7f4e1d;
  float: left;
  color: #7f4e1d;
  font-size: 35px;
  text-align: center;
  padding-bottom: 4px;
}
.active:after {
  // 伪类实现光标效果
  content: ' ';
  display: inline-block;
  height: 100%;
  width: 2px;
  background: #7f4e1d;
  animation: 0.8s animate infinite;
}
</style>