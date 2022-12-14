// tsc 命令把ts->js,使用nodejs 可以直接运行
function greet(name:string,age:string) {
    console.log(`我是Hello ${name} 年龄是:${age}`);
}
// greet('李白');
// tsc -noEmitOnError 01_basic_typescript.ts 如果有错误时不执行js编译

// 显示类型
function defineExposeType(name:string,age:Date) {
    console.log('姓名:',name,'年龄是:',age);
}
defineExposeType('李涛',new Date())

// 开启了ts的严格模式之后,下面的赋值都会有报错提示
// let surname:string = undefined
// let age:number = null