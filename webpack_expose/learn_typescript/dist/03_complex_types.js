"use strict";
// 联合类型
// 参数可能是 number或者string
function printID(id) {
    console.log('your id is:', id);
    if (typeof id === 'string') {
        console.log(id.toLocaleLowerCase());
    }
    else {
        console.log('传入的是number类型哈');
    }
}
printID(101);
printID('202');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello', +x.join(' and '));
    }
    else {
        console.log('这是一个string');
    }
}
welcomePeople('121221');
welcomePeople(['12', '24']);
function getFisrtThree(x) {
    return x.slice(0, 3);
}
console.log(getFisrtThree('1221211221'));
console.log(getFisrtThree([12, 23, 3, 44, 43, 44]));
// 使用了类型别名的形参
function prrintTypeCoord(pt) {
}
prrintTypeCoord({ x: 100, y: 200 });
function printTypeID(id) {
}
printTypeID("20");
printTypeID(100);
function saniziedInput(str) {
    return str.slice(0, 2);
}
var userInput = saniziedInput('hello');
