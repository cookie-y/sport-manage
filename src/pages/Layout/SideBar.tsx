import {  Layout, Menu  } from 'antd';
const { Sider } = Layout;

const menu = [
  {
    key: '/user', 
    label: '用户管理',
    children: [
      {  
        key: '/examination', 
        label: '用户审核',
      }
    ]
  },
  {
    key: '/race', 
    label: '比赛管理',
    children: [
      {  
        key: '/list', 
        label: '比赛列表',
      }
    ]
  }
]

// 菜单切换
const onMenuChange = (e) => {
  console.log(e.key)
}

export default function SideBar() {
  return (
    <Sider width={200} >
      <Menu mode="inline"
          defaultSelectedKeys={['0']}
          style={{ height: '100%', borderRight: 0 }}
          items={menu}
          onClick={onMenuChange}
      />
    </Sider>
  )
}