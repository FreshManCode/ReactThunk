import { log } from 'console';
import React from 'react'
import "./index.scss"

interface HelloProps{
    name:string,
    age:number
}

const testData = [
    {title:"大戏院",subTitle:"这次的电影很不错哦"},
    {title:"一起学习",subTitle:"一起来学习吧"},
    {title:"演讲讲座",subTitle:"一起来聆听大佬的讲座吧"},
]

export default class TypeScriptTwo extends React.Component  <HelloProps> {

    

    render() {
        return (
            <div className='TypeScriptTwo'>
                我是谁啊,阿西吧
                <p>我的名字是:{this.props.name}</p>
                <p>我的年龄是:{this.props.age}</p>
                
                <ListCard title='1213122121212121' subTitle='122112' click={()=>{console.log('西八');}}/>
                <ListCard title='1213' subTitle='122112呵呵很大的啊哈哈大阿达毒打到底自言本是京城女' click={()=>{console.log('西八');}}/>
                <ListCard title='北大荒' subTitle='我的家在东北松花江上,那里有漫山遍野的大豆高粱,还有那美丽的松花江' click={()=>{console.log('西八');}}/>
            </div>
            );
    }
}

interface ListCardProps {
    title:string,
    subTitle:string,
    click:()=>(void)
}

function ListCard(props:ListCardProps){
    return <div className='listCardContainer' onClick={props.click && props.click}>
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
    </div>
}