import LoginLayout from '../Layouts/LoginLayout'
import Login from "@/pages/Login";
import NotFound from '@/pages/NotFound'
import {Navigate} from 'react-router-dom'


 const Routers = [
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      // 配置默认的页面
      { path: "/", element: <Login /> },
      // 注意:children 中的path ,前一层路由要和父级保持一致,否则会报错
      { path: "/login", element: <Login /> },
      // {
      //   path: '*',
      //   element: <Login />,
      //   // Use the `redirectTo` property to specify the target path to redirect to
      //   redirectTo: '/login',
      // },
    ],
  },
  
  // not fund
  {
    path: '*',
    element: <NotFound />,
  },
]

export default Routers;