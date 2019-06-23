import { request } from '../utils/http'

/**
 * @description: 获得用户信息
 * @param {object}
 * @return:
 */
export const getUserInfo = (data: object): Promise<any> => {
  console.log('getUserInfo')
  return request({
    methods: 'get',
    url: '/get-info',
    data
  })
}

/**
 * @description: 获得文章列表
 * @param {type}
 * @return:
 */
interface IArticle {
  id: string
}

export const getArticle = (data: IArticle): Promise<any> => {
  return request({
    methods: 'get',
    url: '/get-article',
    data
  })
}
