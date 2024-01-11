import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const menu = [
  {
    key: '/user',
    label: '用户管理',
    children: [
      {
        key: '/examination',
        label: '用户审核',
      },
    ],
  },
  {
    key: '/race',
    label: '比赛管理',
    children: [
      {
        key: '/list',
        label: '比赛列表',
      },
    ],
  },
];

const SideBar = () => {
  const navigae = useNavigate();

  // 菜单切换
  const onMenuChange = (route: { keyPath: Array<string>; key: string }) => {
    const path = route.keyPath.reduce((accumulator: string, currentValue: string) => currentValue + accumulator, '');
    navigae(path);
  };

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        style={{ height: '100%', borderRight: 0 }}
        items={menu}
        onClick={onMenuChange}
      />
    </Sider>
  );
};

export default SideBar;
