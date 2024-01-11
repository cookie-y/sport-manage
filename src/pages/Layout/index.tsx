import { Layout, ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;
import SideBar from './components/SideBar';
import Header from './components/Header';

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
        <Header />
        <Layout>
          <SideBar />
          <Content style={{ height: 'calc(100vh - 64px)' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
