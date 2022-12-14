"use strict";
// 常用的 三个 基元 类型 string number boolean
var str = 'hello typescript';
var number = 100;
var bool = true;
// 数组的定义 有两种写法
// type[] Array<type>
var arr = [1, 2, 3];
var arr2 = [1, 2, 3, 4];
// any类型
// 执行以下操作都不会有编译问题,但是在执行相应的js文件时会报错
var obj = {
    x: 0
};
// obj.foo()
// obj.bar = 100
// obj = 'hell0'
// 变量上的类型注释
var muName = '李白';
// 函数
function noReturnValue(name) {
    console.log('noReturnValue_name is:', name);
}
noReturnValue("王伟");
// 函数返回值类型注释
// 也可以不用进行返回值注释,类型推断
function returnValue(name) {
    return "returnValue_name is".concat(name);
}
var names = ['a', 'c', 'b'];
// 类型推断
names.forEach(function (item) {
    console.log('item:', item.toUpperCase());
});
// 参数对象类型
function printCoord(pt) {
    console.log('坐标x值为:', pt.x);
    console.log('坐标y值为:', pt.y);
}
printCoord({ x: 10.5, y: 20 });
// 可选参数 last
function printName(obj) {
    var _a;
    if (obj.last) {
        console.log('last:', obj.last.toLowerCase());
    }
    // 等同于
    console.log('last:', (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLowerCase());
}
printName({ first: "李白" });
printName({ first: '李', last: "白" });
