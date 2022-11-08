import {useRoutes } from 'react-router-dom';
import BottomLayout from '../Layouts/BottomLayout/BottomLayout'
import App from '@/App'
import Home from '@/pages/Home/Home'
import Learn from '@/pages/Learn/Learn'

export const GetRoutes = ()=>{
    const routes = useRoutes([
        {
            path:'/',
            element:<App/>
        },
        {
            path :'/bottom',
            element:<BottomLayout/>,
            children:[
                {path:'/bottom/home',element:<Home/>},
                {path:'/bottom/learn',element:<Learn/>},
            ],
        }
    ])
    return routes;
}