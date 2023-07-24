import LoginLayout from '../Layouts/LoginLayout'
import Login from "@/pages/Login";


 const Routers = [
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      // 注意:children 中的path ,前一层路由要和父级保持一致,否则会报错
      { path: "/login", element: <Login /> },
    ],
  },
]

export default Routers;