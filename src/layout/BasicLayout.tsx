import { BackTop, Layout } from 'antd'
import React, { Component, ReactHTML } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar, { IInfo } from './Sidebar/Sidebar'
import Articles from '../views/Articles/Articles'
import { connect } from 'react-redux'
import { getInfo } from '../store/action'

const { Content } = Layout

interface IProps {
  info: IInfo
  children: ReactHTML
  getInfo: () => void
}

class BasicLayout extends Component<IProps> {
  componentDidMount() {
    console.log('123')
    this.props.getInfo()
  }
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

interface IInfoState {
  info: IInfo
}

const mapStateToProps = ({ info }: IInfoState) => {
  return { info }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getInfo() {
      console.log('getInfo', getInfo())
      dispatch(getInfo())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicLayout)
