import React from 'react';
import { Tabs } from 'antd';

import Header from './components/Header';
import Tab1 from './containers/Tab1';
import Tab2 from './containers/Tab2';
import Tab3 from './containers/Tab3';

export default function MainModule() {
  const items = [
    {
      key: '1',
      label: 'Thêm mới',
      children: <Tab1 />,
    },
    {
      key: '2',
      label: 'Đã thêm',
      children: <Tab2 />,
    },
    {
      key: '3',
      label: 'Luyện tập',
      children: <Tab3 />,
    },
  ];

  return (
    <>
      <Header />
      <div className='px-2'>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </>
  )
}