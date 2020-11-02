import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Route, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Users from '@/containers/Users'
import User from '@/containers/Users/User'
import './home.sass'

const { Header, Sider, Content, Footer } = Layout

const Home = () => {
  const history = useHistory()

  const navigateTo = (e) => {
    history.push(e.key)
  }

  return (
    <Layout className="home-container">
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e) => navigateTo(e)}>
          <Menu.Item key="/users">Users</Menu.Item>
          <Menu.Item key="/users/new">Create user</Menu.Item>
          <Menu.Item key="/login">Login</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className="main-content-wrapper">
          Hello Home
          <Switch>
            <Route exact path="/users/new">
              <User />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default connect()(Home)
