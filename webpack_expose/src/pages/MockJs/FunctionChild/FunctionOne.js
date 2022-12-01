// 使用useState Hooks 函数式组件编程
import React,{useState,useEffect} from "react";
import "./FunctionOne.scss"

export default function FunctionOne() {
    // 仅在挂载阶段执行一次的副作用:

    // 传入回调函数,且这个回调函数的返回值不是一个函数,同时传入一个空数组
    // useEffect(()=>{
    //     // 业务逻辑
    // },[])


    // 仅在挂载阶段和卸载阶段执行的副作用:

    // 传入回调函数,且这个函数的返回值是一个函数,同时传入一个空数组
    // useEffect回调中返回的函数被称为 "清除函数"
    // useEffect(()=>{
    //     // 业务逻辑A(挂载阶段执行)
    //     return ()=>{
    //         // 返回函数记为B(卸载阶段执行)
    //     }
    // },[])

    // 每一次渲染都触发,且卸载阶段也会被触发的副作用:

    // 传入回调函数,且这个函数的返回值是一个函数,同时不传第二个参数
    // useEffect(()=>{
    //     // 业务逻辑A (每次渲染都会触发)

    //     // 返回一个函数记为B (卸载阶段)
    //     return ()=>{
    //     }
    // })


    // 根据一定的依赖条件来触发的副作用:传入回调函数,同时传入一个非空的数组
    // useEffect(()=>{
    //     // 这是回调函数的业务逻辑
    //     // 若xxx 是一个函数,则xxx会在组件卸载的时候触发
    //     return xxx

    // },["","",""])


   






    // useState 关联了一个状态
    const [text,setText] = useState("初始文本")
    function changeText() {
        setText("使用setText更改文本");
    }
    return <div className="functionOne">
        <p>{text}</p>
        <button onClick={changeText}>点我有惊喜</button>
    </div>
}