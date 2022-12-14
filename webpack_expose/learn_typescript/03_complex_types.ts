// 联合类型
// 参数可能是 number或者string
function printID(id:number | string) {
    console.log('your id is:',id);
    if (typeof id === 'string') {
        console.log(id.toLocaleLowerCase());        
    } else {
        console.log('传入的是number类型哈');
        
    }
}
printID(101)
printID('202')

function welcomePeople(x:string|string[]) {
    if (Array.isArray(x)) {
        console.log('Hello',+ x.join(' and ')); 
    } else {
        console.log('这是一个string');
    }
}
welcomePeople('121221')
welcomePeople(['12','24'])

function getFisrtThree(x:number[] | string) {
    return x.slice(0,3)
}
console.log(getFisrtThree('1221211221'));
console.log(getFisrtThree([12,23,3,44,43,44]));


// 08-类型别名
// 使用type 关键字定义类型别名
type Point = {
    x:number,
    y:number,
}

type ID = string | number;

type UserInputSanitizedString = string;

// 使用了类型别名的形参
function prrintTypeCoord(pt:Point) {

}
prrintTypeCoord({x:100,y:200})


function printTypeID(id:ID) {

}
printTypeID("20")
printTypeID(100)

function saniziedInput(str:string):UserInputSanitizedString {
    return str.slice(0,2)
}
let userInput = saniziedInput('hello')



// 09-接口 和类型别名类似
interface PointInterface {
    x:number;
    y:number;
}

function printInterfaceCoord(pt:PointInterface) {
    console.log('坐标X的值是:',pt.x);
    console.log('坐标Y的值是:',pt.y);
}
printInterfaceCoord({x:100,y:200})

// 扩展接口
interface Animal {
    name:string
}
interface Bear extends Animal {
    honey:boolean
}

const bear:Bear = {
    name : 'wine',
    honey :true,
}
console.log('bear_name:',bear.name);

// 使用类型别名
type Animal2 = {
    name:string
}
// 类型别名 扩展
type Bear2 = Animal2 & {
    honey:boolean
}
const bear2 : Bear2 = {
    name:'wear',
    honey:true,
}

// 向现有的类型添加字段
interface MyWindow {
    count:number
}
interface MyWindow {
    title:string
}
// interface 声明类型之后可以继续使用interface添加字段
const w : MyWindow =  {
    title:'哈哈',
    count : 2
}

// type 类型创建后是不能更改
// type MyWindow2 = {
//     count:number
// }
// type MyWindow2 = {
//     count:number
// }


