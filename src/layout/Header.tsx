import { Col, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Header } = Layout
const { Search } = Input

interface IProps {
  fetchArtice: (payload: object) => void
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
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Header
