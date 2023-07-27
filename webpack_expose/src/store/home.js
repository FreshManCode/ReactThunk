import {observable,computed,action,makeObservable} from 'mobx'
class Home {

  constructor() {
    // 不添加观察,则相应的组件无法拿到更新后的数据
    makeObservable(this);
    
    // 注意:delaySyncNetwork 函数中使用了 async/await 修饰词,
    // 会导致该函数的上下文中拿不到正确的this,需要在constructor函数中进行一次绑定,否则在其函数内部
    // 调用当前实例对象的的函数会报:Uncaught (in promise) TypeError: Cannot read properties of undefined 
    this.delaySyncNetwork = this.delaySyncNetwork.bind(this);
  }

  @observable
    age = 18

  @computed
    get doubleAge() {
      return this.age * 2
    }
  
  @action 
    increment() {
      this.age ++;
      console.log('this.props.store.home.age:',this.age)

      //数据请求
      // fetch('/data/data.json')
      // .then(res => res.json())
      // .then( result => console.log( result ))
      // .catch( error => console.log( error )
    }

    delayIncrement(delay = 1000) {
      // 延迟++
      console.log("delayIncrement:",delay / 1000 + 's')
      setTimeout(() => {
        // this.age ++;
        this.increment()
      }, delay);
    }

    testAdd() {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve(100)
        }, 1500);
       })
    }

    async delaySyncNetwork() {
      console.log('开始延迟调用哦')
      const res = await this.testAdd();
      console.log('res is:',res)
      console.log('delaySyncNetwork_begin:',this)
      const response = await new Promise((resolve)=>{
        setTimeout(() => {
          resolve(500)
        }, 1000);
      })
      console.log('response:',response)
    } 



   

}
const home = new Home()
export default home