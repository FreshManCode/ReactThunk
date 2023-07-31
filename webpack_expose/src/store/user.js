import {action,computed,observable,makeObservable} from 'mobx'
import {isValidObj} from '@/utils/tool'

class User { 
  constructor() {
    makeObservable(this);
  }
  @observable 
    userInfo = {};
    name = "";

  @computed
    get userCanEdit () {
     return this.userIsLogin && Number(this.userInfo.auditStatus) > 4
    }

    get userIsLogin() {
      return (isValidObj(this.userInfo) && this.userInfo.memberId)
    }
  
  @action 
    updateUserInfo(userInfo) {
      console.log('updateUserInfo_userInfo:',userInfo)
      if (isValidObj(userInfo)) {
        const {memberInfo} = userInfo;
        this.userInfo = memberInfo;
        this.name = memberInfo.contactName;
        console.log(' this.userInfo:',memberInfo)
      }
      console.log('this:',this)
    }
}

const user = new User();
export default user;