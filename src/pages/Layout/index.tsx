import { Layout, Menu, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content } = Layout;
import SideBar from './SideBar';

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default function Index() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#232946',
          colorInfo: '#232946',
          colorError: '#ff6e6c',
          colorWarning: '#ff8906',
          colorSuccess: '#2cb67d',
        },
      }}
    >
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
          <SideBar />
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
