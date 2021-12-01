import { createRouter, createWebHistory, Router, } from 'vue-router';

import BaseLayout from '@/layout/baseLayout.vue';
import Welcome from '@/views/welcome.vue';
import Register from '@/views/account/register.vue';
import ShopIndex from '@/views/shop/index.vue';
import ShopDetail from '@/views/shop/shopDetail.vue';
import ExploreIndex from '@/views/explore/index.vue';
import ExploreDeatil from '@/views/explore/exploreDetail.vue';
import Cart from '@/views/cart/index.vue';
import Favorite from '@/views/favorite/index.vue';
import Account from '@/views/account/index.vue';
import Profile from '@/views/account/profile/profile.vue';
import EditProfile from '@/views/account/profile/editProfile.vue';
import ChangePassword from '@/views/account/profile/changePassword.vue';
import Cards from '@/views/account/card/cards.vue';
import NewCard from '@/views/account/card/newCard.vue';
import Addresses from '@/views/account/address/addresses.vue';
import NewAddress from '@/views/account/address/newAddress.vue';
import EditAddress from '@/views/account/address/editAddress.vue';
import Orders from '@/views/account/orders/orders.vue';
import Payment from '@/views/account/payment/payMent.vue';
import Empty from '@/views/empty.vue';
import Success from '../views/account/payment/success.vue'

const routes = [
  {
    path: '/',
    component: BaseLayout,
    name: 'BaseLayout',
    redirect: { name: 'ShopIndex' },
    children: [
      {
        path: 'shop',
        component: ShopIndex,
        name: 'ShopIndex',
        meta: {
          title: 'shop',
        },
      },
      {
        path: 'shopDetail',
        component: ShopDetail,
        name: 'shopDetail',
        meta: {
          title: 'shopDetail',
        },
      },
    ],
  },
  {
    path: '/explore',
    name: 'explore',
    component: BaseLayout,
    redirect: { name: 'ExploreIndex' },
    children: [
      {
        path: '',
        component: ExploreIndex,
        name: 'explore',
        meta: {
          title: 'explore',
        },
      },
      {
        path: 'detail',
        component: ExploreDeatil,
        name: 'exploreDeatil',
        meta: {
          title: 'exploreDeatil',
        },
      },
    ],
  },
  {
    path: '/cart',
    name: 'cart',
    component: BaseLayout,
    redirect: { name: 'Cart' },
    children: [
      {
        path: '',
        component: Cart,
        name: 'cart',
        meta: {
          title: 'Cart',
        },
      },
    ],
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: BaseLayout,
    redirect: { name: 'Favorite' },
    children: [
      {
        path: '',
        component: Favorite,
        name: 'favorite',
        meta: {
          title: 'Favorite',
        },
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    component: BaseLayout,
    redirect: { name: 'Account' },
    children: [
      {
        path: '',
        component: Account,
        name: 'account',
        meta: {
          title: 'Account',
        },
      },
      {
        path: 'profile',
        component: Profile,
        name: 'profile',
        meta: {
          title: 'Profile',
        },
      },
      {
        path: 'editProfile',
        component: EditProfile,
        name: 'editProfile',
        meta: {
          title: 'Edit Profile',
        },
      },
      {
        path: 'changePassword',
        component: ChangePassword,
        name: 'changePassword',
        meta: {
          title: 'Change Password',
        },
      },
      {
        path: 'cards',
        component: Cards,
        name: 'cards',
        meta: {
          title: 'My Cards',
        },
      },
      {
        path: 'newCard',
        component: NewCard,
        name: 'newCard',
        meta: {
          title: 'New Card',
        },
      },
      {
        path: 'addresses',
        component: Addresses,
        name: 'addresses',
        meta: {
          title: 'Addresses',
        },
      },
      {
        path: 'newAddress',
        component: NewAddress,
        name: 'newAddress',
        meta: {
          title: 'New Addresses',
        },
      },
      {
        path: 'editAddress',
        component: EditAddress,
        name: 'editAddress',
        meta: {
          title: 'Edit Addresses',
        },
      },
      {
        path: 'orders',
        component: Orders,
        name: 'orders',
        meta: {
          title: 'Orders',
        },
      },
      {
        path: 'payment',
        component: Payment,
        name: 'payment',
        meta: {
          title: 'Payment',
        },
      },
      {
        path: 'success',
        component: Success,
        name: 'success',
        meta: {
          title: 'success',
        },
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Welcome,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册',
    },
  },
  {
    path: '/empty',
    name: 'Empty',
    component: Empty,
    meta: {
      title: 'empty',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'BaseLayout' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router

