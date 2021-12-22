import { observable, action, toJS, runInAction } from 'mobx'

export default class Counter {
  @observable number = 0

  constructor(root) {
    this.root = root
  }

  @action
  increment = (count) => {
    this.number = count + this.number
  }
}