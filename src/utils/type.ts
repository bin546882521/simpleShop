interface ShopState {
  cid: number;
  name: string,
  imgUrl: string,
  price: string,
  num: number,
  fav: number,
  introduce: string
}

interface Cart {
  cart: Array<ShopState>
}

interface FavState {
  fav: number,
  cid: number
}

interface UserState {
  userinfo: {
    name:string,
    phone:string,
    password:string,
    login:Boolean,
    favorite:Array<FavState>,
  };
}

interface adressState {
  title: string;
  name: string;
  city: string;
  address: string;
  columns: Array<string>;
}