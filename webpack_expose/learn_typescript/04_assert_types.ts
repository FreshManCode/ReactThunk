import e from "express";

// 10 类型断言
const myCancas = document.getElementById('main_canvas') as HTMLCanvasElement;

const myCanvas2= <HTMLCanvasElement> document.getElementById('main_canvas')

// const x = 'hello' as number;


// 11.文字类型
let testString = "hello_world"
testString = "可以修改"

// const 修饰的变量不支持修改
const constString = "hello_world"
// constString = "const"

// 给参数中设置约束,只能传递这些参数之一的参数
function printText(s:string,alignment:'left'|'center'|'right') {

}
printText('abc','left')

function compare(a:string,b:string):-1|0|1 {
    return a === b ? 0 : a > b ? 1 :-1
}

function config(x:number | 'auto') {

}
config(100)
config('auto')

function handleRequst(url:string,method:'GET'|'POST') {

}
const req = {
    url : 'https://',
    method:'GET,'
}
// const req2 = {
//     url : 'https://',
//     method:'GET,'
// } as const

handleRequst(req.url,req.method as ('GET' | 'POST'))


//12. null undefined
function doSomethind(x:string | null) {
    if (x === null) {
        //该干啥干啥
    } else {
        console.log('');
    }
}

// 使用! 去强制解包的时候只能用在确定该类型的值存在否则会出问题
function optionalType(x?:number | null) {
    console.log(x?.toFixed());
    if (x !== null) {
        console.log(x!.toFixed());
    }
}


// 13. 枚举 enum 枚举名字 枚举内容
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log('Direction:',Direction.Right);
