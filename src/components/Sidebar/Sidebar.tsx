import React, { useState } from 'react';
import {
  UserOutlined,
  BookOutlined ,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  // getItem('Option 1', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Manage', 'sub1', <SettingOutlined />, [
    getItem('Author Setup ', '3'),
    getItem('Category Setup', '4'),
    getItem('Customer Setup', '5'),
    getItem('Book Setup', '6'),
  ]),
  getItem('Transaction', 'sub2', <BookOutlined />, [getItem('Rent a book', '7'), getItem('Return a book', '8')]),
getItem('Manage Users', '9', <UserOutlined />),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (

    <> 
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    {/* <div className=' justify-end mb-4'> <Typography.Title level={4} className='text-2xl font-bold text-grey' >   Book Rental System </Typography.Title> */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

      </Sider>
     
    </Layout> 
    </>
   
  
  );

};

export default Sidebar;