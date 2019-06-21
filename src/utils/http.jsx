import axios from 'axios'
import { message } from 'antd'

console.log('process.env.REACT_APP_BASEURL', process.env.REACT_APP_BASEURL)
axios.defaults.timeout = 5000
axios.defaults.headers.poest['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = process.env.REACT_APP_BASEURL

const requestList = []
const CancelToken = axios.CancelToken
let sources = {}

axios.interceptors.request.use(
  config => {
    const request = JSON.stringify(config.url) + JSON.stringify(config.data)
    config.cancelToken = new CancelToken(cancel => {
      sources[request] = cancel
    })
    if (requestList.includes(request)) {
      sources[request]('取消重复请求')
    } else {
      requestList.push(request)
    }
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    const request =
      JSON.stringify(response.config.url) + JSON.stringify(response.config.data)
    requestList.splice(requestList.findIndex(item => item === request), 1)
    if (requestList.data.code === 9000401) {
    }
    // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
    // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
    return response
  },
  function(error) {
    // 对响应错误做点什么
    if (axios.isCancel(error)) {
      //   requestList.length = 0
      //   store.dispatch('changeGlobalState', { loading: false })
      throw new axios.Cancel('cancel request')
    } else {
      message.error('网络请求失败', 1000)
    }
    return Promise.reject(error)
  }
)

const request = opts => {
  const { url, methods, data, ...configs } = opts
  let options = {
    url,
    methods,
    [methods == 'get' ? 'params' : 'data']: data,
    ...configs
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          if (err.cancel) {
            console.log(err)
          } else {
            reject(err)
          }
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}

export { sources, request }
