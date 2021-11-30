export interface ShopState {
  cid: number;
  // shop: Array<{ cid: number }>;
}
export default {
  state: {
    cart: [],
  },
  mutations: {
    setShop(state,data){
      state.cart = data
    },
    setShopInfo(state: { cart: Array<ShopState> }, data: ShopState) {
      console.log(data);
      if (state.cart.length > 0) {
        let resuse = false;
        state.cart.forEach((item,index) => {
          if (data.cid == item.cid) {
            resuse = true;
            state.cart[index].num += data.num
            //state.cart[index] = data
          }
        });
        if (!resuse) {
          state.cart.push(data);
        }
        // console.log(data);
       
        // let resuse = state.cart.filter((item) => {
        //   return item.cid == data.cid;
        // });
        // console.log(resuse);
        // if (resuse.length == 0) {
        //   state.cart.push(data);
        // } else {
        //   console.log('重复');
        // }
      } else {
        state.cart.push(data);
      }
    },
  },
};
