// 常用的 三个 基元 类型 string number boolean
let str:string = 'hello typescript'
let number:number = 100
let bool:boolean = true

// 数组的定义 有两种写法
// type[] Array<type>
let arr:number[] = [1,2,3]

let arr2:Array<number> = [1,2,3,4]


// any类型
// 执行以下操作都不会有编译问题,但是在执行相应的js文件时会报错
let obj:any = {
    x:0
}
// obj.foo()
// obj.bar = 100
// obj = 'hell0'



// 变量上的类型注释
let muName:string = '李白'



// 函数
function noReturnValue(name:string) {
    console.log('noReturnValue_name is:',name);
}
noReturnValue("王伟")

// 函数返回值类型注释
// 也可以不用进行返回值注释,类型推断
function returnValue(name:string):string {
    return `returnValue_name is${name}`
}

const names = ['a','c','b']
// 类型推断
names.forEach((item)=>{
    console.log('item:',item.toUpperCase());
})



// 参数对象类型
function printCoord(pt:{x:number;y:number}) {
    console.log('坐标x值为:',pt.x);
    console.log('坐标y值为:',pt.y);
}
printCoord({x:10.5,y:20})


// 可选参数 last
function printName(obj:{first:string,last?:string}){
    if(obj.last) {
        console.log('last:',obj.last.toLowerCase());
    }
    // 等同于
    console.log('last:',obj.last?.toLowerCase());

}
printName({first:"李白"})
printName({first:'李',last:"白"})