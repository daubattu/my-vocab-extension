import React from 'react'
import { LogOut, Menu, Settings } from 'react-feather'
import { Dropdown } from 'antd'

import styles from './index.module.scss'

export default function Header() {
  const items = [
    {
      key: '1',
      label: 'Cài đặt',
      icon: <Settings size={16} />,
    },
    {
      key: '2',
      label: 'Đăng xuất',
      icon: <LogOut size={16} />,
    },
  ];

  return (
    <div className={`${styles.wrapper} px-2`}>
      <div className='logo'>
        <span>I'm</span>
        <span>Yumae</span>
      </div>
      <Dropdown trigger={['click']} menu={{ items }}>
        <div style={{ cursor: 'pointer' }}>
          <Menu />
        </div>
      </Dropdown>
    </div>
  )
}