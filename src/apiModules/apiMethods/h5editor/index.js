import * as basicAxios from '@/apiModules/request/basicAxios'
import API from '@/apiModules/request/API/index'

// H5应用信息
const addH5Info = (data) => basicAxios.post(API.addH5Info, data) // 新增H5应用信息
const getH5InfoDetail = (data) => basicAxios.get(API.getH5InfoDetail, data, 2) // 获取H5应用信息详情
const getH5Page = (data) => basicAxios.post(API.getH5Page, data) // 获取H5应用信息分页列表
const modifyH5Info = (data) => basicAxios.post(API.modifyH5Info, data) // 修改H5应用信息
const removeH5Info = (data) => basicAxios.post(API.removeH5Info, data, 2) //  删除H5应用信息

// 背景
const getBgPrivatePage = (data) => basicAxios.post(API.getBgPrivatePage, data) // 获取我的背景图信息分页列表
const uploadPrivateBackground = (data) => basicAxios.post(API.uploadPrivateBackground, data) // 上传我的背景图信息

// 视频信息
const getVideoPrivatePage = (data) => basicAxios.post(API.getVideoPrivatePage, data) // 上传我的背景图信息
const getVideoPublicPage = (data) => basicAxios.post(API.getVideoPublicPage, data) // 获取公共视频信息分页列表
const uploadPrivateVideo = (data) => basicAxios.post(API.uploadPrivateVideo, data) // 上传我的视频信息

const filesAnon = (data) => basicAxios.postImport(API.fileUpload, data) // 上传文件

export {
    addH5Info,
    getH5InfoDetail,
    getH5Page,
    modifyH5Info,
    removeH5Info,
    getBgPrivatePage,
    uploadPrivateBackground,
    getVideoPrivatePage,
    getVideoPublicPage,
    uploadPrivateVideo,
    filesAnon
}
