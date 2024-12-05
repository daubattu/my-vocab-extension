import React from 'react'
import { Button, Form, Input, Space, Tooltip } from 'antd'
import { Framer, Volume2 } from 'react-feather'

import styles from './index.module.scss'

export default function Tab1() {
  const [form] = Form.useForm()

  return (
    <div className={styles.wrapper}>
      <Form form={form}>
        <Form.Item name="text" label="Từ">
          <Space direction="horizontal">
            <Input />
            <Tooltip title="Phát âm">
              <Button style={{ width: 40, padding: 0 }}>
                <Volume2 size={16} />
              </Button>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item name="translate" label="Nghĩa">
          <Space direction="horizontal">
            <Input />
            <Tooltip title="Sinh tự động">
              <Button style={{ width: 40, padding: 0 }}>
                <Framer size={16} />
              </Button>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item name="ipa" label="Phiên âm">
          <Space direction="horizontal">
            <Input />
            <Tooltip title="Sinh tự động">
              <Button style={{ width: 40, padding: 0 }}>
                <Framer size={16} />
              </Button>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <Button type='primary' htmlType='submit'>
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}