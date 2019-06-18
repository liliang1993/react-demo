import { BackTop, Col, Layout, Row } from 'antd'
import React, { Component } from 'react'
import { ReactHTML } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar, { IInfo } from './Sidebar/Sidebar'

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
          <Content>{children}</Content>
          <Sidebar info={info} />
        </Layout>
        <Footer />
      </Layout>
    )
  }
}

export default BasicLayout
