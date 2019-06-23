// import { Card } from 'antd'
import React from 'react'
// import { Link } from 'react-router-dom'
import './style.less'

// const { Meta } = Card

interface ITag {
  title: string
  color: string
}

export interface IInfo {
  classList: string[]
  tag: ITag[]
  ArticleNum: string
  access: number
  present: string
  name: string
  authorImg: string
  lastArticle: any[]
}

export interface IProps {
  info: IInfo
}

const Sidebar = (props: IProps) => {
  // const {
  //   tag,
  //   present,
  //   access,
  //   ArticleNum,
  //   name,
  //   authorImg,
  //   lastArticle
  // } = this.props.info
  return <div className="Sidebar" />
}

export default Sidebar
