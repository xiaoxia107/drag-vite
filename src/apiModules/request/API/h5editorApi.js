const tracklog_prefix = '/api-tracklog-center'

const h5editorApi = {
    addH5Info: tracklog_prefix + '/h5App/addInfo', // 新增H5应用信息
    getH5InfoDetail: tracklog_prefix + '/h5App/getInfoDetail/', // 获取H5应用信息详情
    getH5Page: tracklog_prefix + '/h5App/getPage', // 获取H5应用信息分页列表
    modifyH5Info: tracklog_prefix + '/h5App/modifyInfo', // 修改H5应用信息
    removeH5Info: tracklog_prefix + '/h5App/removeInfo', // 删除H5应用信息
    getBgPrivatePage: tracklog_prefix + '/background/getPrivatePage', // 获取我的背景图信息分页列表
    uploadPrivateBackground: tracklog_prefix + '/background/uploadPrivateBackground', // 上传我的背景图信息
    getVideoPrivatePage: tracklog_prefix + '/video/getPrivatePage', // 上传我的背景图信息
    getVideoPublicPage: tracklog_prefix + '/video/getPublicPage', // 获取公共视频信息分页列表
    uploadPrivateVideo: tracklog_prefix + '/video/uploadPrivateVideo', // 上传我的视频信息

}

export default h5editorApi


