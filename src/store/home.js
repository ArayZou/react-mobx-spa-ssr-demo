import { observable, action, toJS, runInAction } from 'mobx'
import request from '../client/request'

export default class Home {
  @observable list = [];

  constructor(root) {
    this.root = root
  }
  
  @action
  getHomeList = () => {
    if (context.list) {
      console.log('context.list')
      this.list = context.list
      return
    }
    console.log('getHomeList')
    request.get('/api/users').then((result) => {
      this.list = result.data;
    });
  }

  @action
  setHomeList = (data) => {
    console.log('setHomeList')
    this.list = data
  }
}