import {  Layout, Menu, ConfigProvider  } from 'antd';
import type { MenuProps } from 'antd';
const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}));

const menu = ['用户管理', '比赛管理'].map((label, index) => ({
  key: index,
  label
}));

function App() {
  return (
    <ConfigProvider theme={
      {
        token: {
          "colorPrimary": "#232946",
          "colorInfo": "#232946",
          "colorError": "#ff6e6c",
          "colorWarning": "#ff8906",
          "colorSuccess": "#2cb67d"
        }
      }}
    >
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
          <Sider width={200} >
            <Menu mode="inline"
                defaultSelectedKeys={['0']}
                style={{ height: '100%', borderRight: 0 }}
                items={menu}
            />
          </Sider>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
  </ConfigProvider>
  );
}

export default App;
