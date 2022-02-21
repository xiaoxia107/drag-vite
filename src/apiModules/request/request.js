import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
const service = axios.create({
    baseURL: 'http://192.168.1.125:9900/',
    timeout: 5000
})
const filePath = '/files-anon'
const whiteList = []

service.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token', true)
        let merchantsId = localStorage.getItem('merchantsId', true)
        if (merchantsId) {
            config.headers['AUTH_MERCHANTS_ID'] = localStorage.getItem('merchantsId', true)
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        let isFile = response.config.url.includes(filePath)
        if ((!isFile) && (res.code !== 0)) {
            return Promise.reject(res.msg || 'Error')
        }
        return res
    },
    (error) => {
        let res = error.response
        let msg = res && res.data && res.data.msg
        if (error.response) {
            if (res.status == 401) {
                msg = '暂无权限'
            }
            if (res.status == 403) {
                msg = '暂无权限'
            }
        }
        return Promise.reject(msg || 'Error')
    }
)

export default {
    post (url, jsonData, urlData, isFormParams) {
        // url: 接口地址;  jsonData： json格式的数据;  urlData： 接口地址拼的参数; isFormParams(true or false): 为true时使用form格式传递参数,默认json格式传递参数
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url: urlData ? (url + '/' + urlData) : url,
                data: !isFormParams ? jsonData : qs.stringify(jsonData)
            }).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    deleteFunc (url) {
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url: url
            }).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    postImport (url, data) { // 上传图片
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url,
                data: data,
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token', true)
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    get (url, data) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: data,
            }).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    getExport (url, data) { // 导出excel
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: data,
                responseType: 'blob',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token', true),
                    AUTH_MERCHANTS_ID: localStorage.getItem('merchantsId', true)
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    whiteList
}
