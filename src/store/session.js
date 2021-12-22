import { observable, action, toJS, runInAction } from 'mobx'
import request from '../client/request'

export default class Session {
  @observable user = null

  constructor(root) {
    this.root = root
  }

  @action
  login = (u) => {
    request.post('/api/login',u).then((result) => {
      let data  = result.data;//响应体
      this.user = data.data.user;
   });
  }

  @action
  logout = () => {
    request.get('/api/logout').then((result) =>{
       let data  = result.data;//响应体
       this.user = data.data.user;
    });
  }

  @action
  getUser = () => {
    request.get('/api/user').then((result) =>{
      let data  = result.data;//响应体
      this.user = data.data.user;
   });
  }
}