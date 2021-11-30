export interface UserState {
  name: string;
  userinfo: {};
}

export default {
  state: {
    userinfo: {
      name: 'chenchen',
      phone: '18268217720',
      password: '1231',
      login:true,
      favorite:[]
    },
  },
  mutations: {
    setFavorite(state:UserState,data:{}){
      if(data.fav == 0){
       state.userinfo.favorite.forEach((item,index)=>{
         if(item.cid == data.cid){
          state.userinfo.favorite.splice(index,1);
         }
       })
      }else{
        state.userinfo.favorite.push(data);
      }
    },
    setFav(state,data){
      state.userinfo.favorite = data
    },
    setLogin(state: UserState,data:Boolean){
      state.userinfo.login = data;
    },
    setUserInfo(state: UserState, data: {}) {
      state.userinfo = data;
    },
    // setUserInfo(state: UserState, data: string) {
    //   state.name = data;
    // },
  },
};
