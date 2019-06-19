import { BackTop, Col, Layout, Row } from 'antd'
import React, { Component, ReactHTML } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar, { IInfo } from './Sidebar/Sidebar'
import Articles from '../views/Articles/Articles'

const { Content } = Layout

interface IProps {
  info: IInfo
  children: ReactHTML
}

class BasicLayout extends Component<IProps> {
  render() {
    const { info, children } = this.props
    return (
      <Layout>
        <BackTop />
        <Header />
        <Layout>
          <Content>
            <Route path="/articles" componen={Articles} />
          </Content>
          <Sidebar />
        </Layout>
        <Footer />
      </Layout>
    )
  }
}

export default BasicLayout
