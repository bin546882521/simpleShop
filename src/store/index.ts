import { createStore } from 'vuex';
import user, { UserState } from './modules/user';
import shop from './modules/shop';
export default createStore<{ user: UserState }>({
  modules: {
    user,
    shop,
  },
});
