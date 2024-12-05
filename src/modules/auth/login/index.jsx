import { useState } from "react";
import { Button, Form, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from '../../../configs/firebase.config'

export default function LoginModule() {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  async function onFinish(values) {
    setLoading(true)

    console.log(12313123)

    signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage)
    })
    .finally(() => {
      setLoading(false)
    })

  }

  return (
    <div>
      <h1 className="mb-8">Đăng nhập</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" label="" required>
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="password" label="" required>
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
          Đăng nhập
        </Button>
      </Form>
    </div>
  )
}