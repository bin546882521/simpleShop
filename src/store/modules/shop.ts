export interface ShopState {
  cid: number;
  name: string,
  imgUrl: string,
  price: string,
  num: number,
  fav: number,
  introduce: string
}
export interface Cart {
  cart: Array<ShopState>
}
export default {
  state: {
    cart: [],
  },
  mutations: {
    setShop(state: Cart, data: any){
      state.cart = data
    },
    setShopInfo(state: Cart, data: ShopState) {
      if (state.cart.length > 0) {
        let resuse = false;
        state.cart.forEach((item,index) => {
          if (data.cid == item.cid) {
            resuse = true;
            state.cart[index].num += data.num
          }
        });
        if (!resuse) {
          state.cart.push(data);
        }
      } else {
        state.cart.push(data);
      }
    },
  },
};
