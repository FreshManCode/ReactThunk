import e from "express";

// 13. bigint symbol 全局唯一引用
const oneHundred:bigint = BigInt(100)

const firstName = Symbol('name')


// 14.类型缩小
function padLeft(padding:number|string,input:string) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(" ") + input
    } else {
        return padding + input
    }
}


// 15.typeof 类型守卫
function printAll(strs:string | string[] | null) {
    if (typeof strs === 'object') {
        // 此时ts 检测会报错, 因为如果是null 时,typeof 的值为object
        // for (const s of strs) {
        //     console.log('s');
        // }
    } else if (typeof strs === 'string') {
        console.log(strs);
        
    } else {

    }
}


// 16. 真值缩小
function getUsersOnlineMessage(numUsersOnline:number) {
    if (numUsersOnline) {
        return `现在共有${numUsersOnline} 人在线`
    } else {
        return "现在无人在线"
    }
}

function getUsersOnlineMessage2(numUsersOnline:number) {
    // 使用该两个API 可以进行真值判断
    if (Boolean(numUsersOnline)) {

    }
    if (!!numUsersOnline) {

    }
}


//17. in 操作符缩小
type Fish = {
    swim:()=>void
}
type Bird = {
    fly:()=>void
}

type Person = {
    swim?:()=>void;
    fly?:()=>void;
}

function move(animal:Fish|Bird) {
    // 使用 in 操作符缩小 范围
    if ('swim' in animal) {
       return animal.swim()
    } 
    return animal.fly();
}