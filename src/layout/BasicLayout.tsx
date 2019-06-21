import { BackTop, Layout } from 'antd'
import React, { Component, ReactHTML } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Articles from '../views/Articles/Articles'

const { Content } = Layout

interface IProps {
  info: object
  children: ReactHTML
}

class BasicLayout extends Component<IProps> {
  render() {
    const { info } = this.props
    return (
      <Layout>
        <BackTop />
        <Header />
        <Layout>
          <Content>
            <Route path="/articles" componen={Articles} />
          </Content>
          <Sidebar info={info} />
        </Layout>
        <Footer />
      </Layout>
    )
  }
}

export default BasicLayout
