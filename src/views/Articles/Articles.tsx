import { Card, Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IPayload } from '../../types'
import './style.less'

interface ITag {
  color: string
  title: string
}

export interface IArticle {
  id: string
  tag: ITag
  title: string
  access: string
  type: string
  abstract: string
}

interface IHistory {
  push: (pathname: string) => void
}

interface IArticles {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
}

export default class Articles extends React.Component {
  render() {
    return <div />
  }
}
