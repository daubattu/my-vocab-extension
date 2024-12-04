import { Button, Form, Input } from "antd";

export default function LoginModule() {
  const [form] = Form.useForm()

  function onFinish(values) {
    console.log(values)
  }

  return (
    <div>
      <h1 className="mb-8">Đăng nhập</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" label="" required>
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="password" label="" required>
          <Input placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Đăng nhập
        </Button>
      </Form>
    </div>
  )
}