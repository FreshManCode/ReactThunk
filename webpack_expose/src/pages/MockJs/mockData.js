import {Random} from 'mockjs'
const Mock = require("mockjs")

Random.extend({
    cusName:function() {
        const man = [
            "李白",
            "王维",
            "杜甫",
            "王勃",
            "李商隐",
            "杜牧",
            "白居易",
            "李绅",
            "骆宾王",
            "孔融"
        ]
        return  this.pick(man)
    }
}
   
);


const objctData = Mock.mock({
    // 属性名   name
    // 生成规则 rule
    // 属性值   value
    // 'name|rule': value
    'list|1-10':[{  //属性list的值是一个数组,其中含有1-10个元素
        'id|+1':1
        // 属性 id 是一个自增数,起始值为1,每次增1
    }]
})

const userInfo = Mock.mock({
    'user':{
        // 用 @ 来标识其后的字符串是 占位符
        // 占位符 引用的是 Mock.Random 中的方法,自定义配置cusName 中读取的数据
        'name|1':"@cusName",
        'age|20-50':1,
    }
})



export {
    objctData,
    userInfo
}