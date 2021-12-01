import { setLocal, getLocal } from 'utils/common'
import { FavState, UserState } from 'utils/type'

export default {
  state: {
    userinfo: {
      name: 'admin',
      phone: '18268217720',
      password: '123456',
      login: false,
      favorite: [] 
    },
  },
  mutations: {
    setFavorite(state: UserState, data: FavState){
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
    setFav(state: UserState,data: {}){
      state.userinfo.favorite = data
    },
    setLogin(state: UserState,data: Boolean){
      state.userinfo.login = data;
      setLocal('userinfo',state.userinfo);
    },
    setUserInfo(state: UserState, data: UserState) {
      state.userinfo = data;
    },
    setUserPassword(state: UserState, data: string) {
      state.userinfo.password = data;
    },
  },
};
