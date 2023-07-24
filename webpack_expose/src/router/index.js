import {useRoutes } from 'react-router-dom';
import App from '@/App'
// import BottomLayout from '../Layouts/BottomLayout/BottomLayout'
// import Home from '@/pages/Home/Home'
// import Learn from '@/pages/Learn/Learn'
// import LearnSetState from '@/pages/Learn/LearnSetState'
// import MockJS from '@/pages/MockJs'
// import TypeScriptTwo from '@/pages/TypeScriptLearn/TSTwo'

import BottomRouter from './BottomLayoutRouter'
import LoginRouter from './LoginLayoutRouter'

export const GetRoutes = ()=>{
    const routes = useRoutes([
        // {
        //     path:'/',
        //     element:<App/>
        // },
        ...BottomRouter,
        ...LoginRouter,
        // {
        //     path :'/bottom',
        //     element:<BottomLayout/>,
        //     children:[
        //         // 注意:children 中的path ,前一层路由要和父级保持一致,否则会报错 
        //         // 例如:本例:'/bottom' 开头,子路由都是"/bottom" 开头
        //         {path:'/bottom/home',element:<Home/>},
        //         {path:'/bottom/learn',element:<Learn/>},
        //         {path:'/bottom/learnSetState',element:<LearnSetState/>},
        //         {path:'/bottom/mockJS',element:<MockJS/>},
        //         {path:'/bottom/typeScriptOne',element:<TypeScriptTwo age="249" name="typeScriptOne"/>},
        //     ],
        // }
    ])
    return routes;
}