import { Layout } from 'antd';
const { Header: Head } = Layout;

const Header = () => {
  return (
    <Head className="flex items-center justify-between">
      <div></div>
      <div className="color-white">admin</div>
    </Head>
  );
};

export default Header;
