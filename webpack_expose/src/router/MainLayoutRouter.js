import MainLayout from '../Layouts/MainLayout'
import MainLayoutComponent from '@/pages/MainContent'
import OptionsOne from '@/pages/MainContent/OptionsOne'
import OptionsTWO from '@/pages/MainContent/Options2Two'
import Mobx from '@/pages/Mobx'
import UseStore from '@/pages/Mobx/UseStore'

const Routers = [
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      // 配置默认的页面
      { path: "/main/content", element: <MainLayoutComponent /> },
      { path: "/main/optionsone", element: <OptionsOne /> },
      { path: "/main/optionstwo", element: <OptionsTWO /> },
      { path: "/main/optionstwo", element: <OptionsTWO /> },
    ],
  },
  {
    path:'/mobx',
    element:<MainLayout/>,
    children:[
      { path: "/mobx/home", element: <Mobx /> },
      { path: "/mobx/usestore", element: <UseStore /> },
    ]

  }
]

export default Routers;
  