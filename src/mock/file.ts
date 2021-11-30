import Mock from 'mockjs'
import { menus, shopVariety, shopCommodityLsit, explore, exploreCommodityLsit } from '@/mock/data';
const Random = Mock.Random

export default [
  {
    url: '/upload/file',
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: {
          name: 'file',
          url: Random.image('200x100', '#50B347', '#FFF', 'Mfile')
        }
      }
    }
  },
  {
    url: '/api/getMenus',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          menus
        }
      }
    }
  },
  {
    url: '/api/getShopVariety',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          shopVariety
        }
      }
    }
  },
  {
    url: '/api/getShopCommodityLsit',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          shopCommodityLsit
        }
      }
    }
  },
  {
    url: '/api/getCommodityDetail',
    type: 'get',
    response: (data:any) => {
      const cid = JSON.parse(data.body).cid;
      const commodity = shopCommodityLsit.filter((item:any) => {
        return item.cid == cid
      });
      console.log(commodity);
      return {
        code: 200,
        data: {
          commodity
        }
      }
    }
  },
]