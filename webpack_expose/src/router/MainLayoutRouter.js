import MainLayout from '../Layouts/MainLayout'
import MainLayoutComponent from '@/pages/MainContent'
import OptionsOne from '@/pages/MainContent/OptionsOne'
import OptionsTWO from '@/pages/MainContent/Options2Two'

const Routers = [
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      // 配置默认的页面
      { path: "/main/content", element: <MainLayoutComponent /> },
      { path: "/main/optionsone", element: <OptionsOne /> },
      { path: "/main/optionstwo", element: <OptionsTWO /> },
    ],
  },
]

export default Routers;
  