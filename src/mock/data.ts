import apple from 'assets/images/apple.png';
import banana from 'assets/images/banana.png';
import pear from 'assets/images/pear.png';
import vegtables from 'assets/images/vegtables.png';
import fruits from 'assets/images/fruits.png';
import meat from 'assets/images/meat.png';
import adver from 'assets/images/adver.png';
const menus: Array<{ name: string; url: string; icon: string }> = [
  {
    name: 'Shop',
    url: '/shop',
    icon: 'shop',
  },
  {
    name: 'Explore',
    url: '/explore',
    icon: 'explore',
  },
  {
    name: 'Cart',
    url: '/cart',
    icon: 'cart',
  },
  {
    name: 'Favorite',
    url: '/favorite',
    icon: 'favorite',
  },
  {
    name: 'Account',
    url: '/account',
    icon: 'account',
  },
];
const shopVariety = [
  {
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    name: 'Vegtables',
    imgUrl: vegtables,
  },
  {
    name: 'Meat',
    imgUrl: meat,
  },
  {
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    name: 'Fruits',
    imgUrl: fruits,
  },
];
const shopCommodityLsit = [
  {
    cid: 1,
    name: 'Red Apple',
    imgUrl: apple,
    price: '4.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
  {
    cid: 2,
    name: 'Orginal Banana',
    imgUrl: banana,
    price: '5.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
  {
    cid: 3,
    name: 'Red Apple',
    imgUrl: apple,
    price: '4.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
  {
    cid: 4,
    name: 'Orginal Banana',
    imgUrl: banana,
    price: '5.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
  {
    cid: 5,
    name: 'Red Apple',
    imgUrl: apple,
    price: '4.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
  {
    cid: 6,
    name: 'Orginal Banana',
    imgUrl: banana,
    price: '5.99',
    num: 0,
    fav: 0,
    introduce:' Golen Ripe Alphonsa mangoes delivered to yor house in the most hygenic way ever Best for eating plain but can also be made intoshakes and cakes.',
  },
];
const exploreCommodityLsit = [
  {
    cid: 1,
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    cid: 2,
    name: 'Vegtables',
    imgUrl: vegtables,
  },
  {
    cid: 3,
    name: 'Meat',
    imgUrl: meat,
  },
  {
    cid: 4,
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    cid: 5,
    name: 'Vegtables',
    imgUrl: vegtables,
  },
  {
    cid: 6,
    name: 'Meat',
    imgUrl: meat,
  },
  {
    cid: 7,
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    cid: 8,
    name: 'Vegtables',
    imgUrl: vegtables,
  },
  {
    cid: 9,
    name: 'Meat',
    imgUrl: meat,
  },
  {
    cid: 10,
    name: 'Fruits',
    imgUrl: fruits,
  },
  {
    cid: 11,
    name: 'Vegtables',
    imgUrl: vegtables,
  },
  {
    cid: 12,
    name: 'Meat',
    imgUrl: meat,
  },
];
const explore = [
  {
    name: 'Red Apple',
    imgUrl: apple,
    type: 'commodity',
    price: '4.99',
  },
  {
    name: '',
    imgUrl: adver,
    type: 'adver',
  },
  {
    name: 'Orginal Banana',
    imgUrl: banana,
    type: 'commodity',
    price: '5.99',
  },
  {
    name: 'Red Apple',
    imgUrl: apple,
    type: 'commodity',
    price: '4.99',
  },
  {
    name: 'Orginal Banana',
    imgUrl: banana,
    type: 'commodity',
    price: '5.99',
  },
  {
    name: 'Red Apple',
    imgUrl: apple,
    type: 'commodity',
    price: '4.99',
  },
];
const exploreMenus = [
  {
    categories_name: 'Fruits',
    cid: 1,
    lists: explore,
  },
  {
    categories_name: 'Vegtables',
    cid: 2,
    lists: [],
  },
  {
    categories_name: 'Meat',
    cid: 3,
    lists: [],
  },
  {
    categories_name: 'Fish',
    cid: 4,
    lists: [],
  },
  {
    categories_name: 'Fruits',
    cid: 5,
    lists: [],
  },
  {
    categories_name: 'Fruits',
    cid: 6,
    lists: [],
  },
  {
    categories_name: 'Fruits',
    cid: 7,
    lists: [],
  },
]
export { menus, shopVariety, shopCommodityLsit, explore, exploreCommodityLsit, exploreMenus };
