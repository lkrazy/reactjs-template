import React from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'antd'

import { requestSignIn } from '@/store/actions/authen'

const Login = (props) => {
  const handleLogin = () => {
    props.requestSignIn({ username: 'hello', password: 'world' })
  }

  return (
    <div>
      <span>Login</span>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

const mapDispatchToProps = {
  requestSignIn
}

export default connect(null, mapDispatchToProps)(Login)
