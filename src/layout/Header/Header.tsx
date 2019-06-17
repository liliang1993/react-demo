import { Col, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.less'

const { Header } = Layout
const { Search } = Input

interface IProps {
  // fetchArtice: (payload: object) => void
}

const HeaderDom = (props: IProps) => {
  const headerTitle = [
    { title: '主页', icon: { __html: '&#xe600;' }, url: '/' },
    { title: '归档', icon: { __html: '&#xe660;' }, url: '/time-file' },
    { title: '说说', icon: { __html: '&#xe6a1;' }, url: '/say' },
    { title: '收藏', icon: { __html: '&#xe60e;' }, url: '/collect' }
  ]
  const menu = (
    <Menu className="menu">
      {headerTitle.map(item => (
        <Menu.Item key={item.title} className="header-title-item">
          <Link to={item.url}>
            <span
              className="icon-font"
              style={{ marginRight: 5 }}
              dangerouslySetInnerHTML={item.icon}
            />
            {item.title}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <div className="header">
      <Header>
        <Row>
          <Col md={0} lg={1} xl={3} xxl={5} />
          <Col md={22} lg={20} xl={18} xxl={14}>
            个人博客
          </Col>
        </Row>
      </Header>
      <Row className="header-footer">
        <Col lg={1} xl={4} xxl={5} />
        <Col lg={22} xl={18} xxl={14}>
          <Row>
            <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17}>
              {headerTitle.map(item => (
                <div key={item.title} className="header-title-item">
                  <Link to={item.url}>
                    <span
                      className="icon-font"
                      style={{ marginRight: 5 }}
                      dangerouslySetInnerHTML={item.icon}
                    />
                    {item.title}
                  </Link>
                </div>
              ))}
            </Col>
            <Col
              xs={24}
              sm={0}
              md={{ span: 6, offset: 1 }}
              xl={{ span: 6, offset: 1 }}
              xxl={{ span: 6, offset: 1 }}>
              <Search
                placeholder="输入搜索标题"
                onSearch={value => {
                  // props.fetchArticle({
                  //   pageIndex: 1,
                  //   pageSize: 10,
                  //   title: value
                  // })
                }}
                className="search-input"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={1} xl={4} xxl={5} />
      </Row>
    </div>
  )
}

export default HeaderDom
