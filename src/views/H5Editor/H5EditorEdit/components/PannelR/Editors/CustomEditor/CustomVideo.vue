<template>
  <div class="editorVideo">
    <div class="label">视频设置</div>
    <div class="sublabel mt10">视频通用代码</div>
    <div class="setcontent mt16">
      <el-input v-model="editItem.commonVideo" class="setcontent-area" type="textarea" placeholder="请输入内容"></el-input>
    </div>
    <div class="label mt16">自定义</div>
    <div class="mt10 uploadFileBtn" @click="handleOpen">
      <span class="uploadFileBtn-l">选择视频</span>
      <img :src="require('@/images/H5Editor/upload.png')" alt="" />
    </div>
    <el-dialog
        title="视频素材"
        custom-class="h5custom"
        :modal-append-to-body="false"
        :append-to-body="true"
        :visible.sync="dialogVisible"
        width="698px"
        :before-close="handleClose"
        @open="openDialog">
      <div class="flexCenter h5dialog">
        <div class="h5dialog-l">
          <div class="lbox">
            <div class="litem"
                 :class="curIdx == item.value ? 'activeitem' : ''"
                 @click="changeType(item)"
                 v-for="item in typeList" :key="item.value">{{ item.label }}</div>
          </div>
          <el-button class="lbtn" type="primary" @click="uploadFile">上传视频</el-button>
        </div>
        <div class="flex-1 h5dialog-r">
          <div class="rbox">
            <div class="rbox-item" v-for="(item, idx) in List" :key="idx">
              <div class="rbox-img">
                <video style="width: 100%;height: 100%;" controls :autoplay="false" :src="item.videoUrl"></video>
                <div class="rbox-mask">
                  <el-button class="maskbtn" type="text" @click="selectVideo(item)">选择</el-button>
                </div>
              </div>
              <div class="rbox-name mtop10"> {{ item.videoName }}</div>
            </div>
          </div>
          <div style="text-align: center;">
            <el-pagination :current-page="pageInfo.page"
                           @current-change="handleChangePage"
                           :page-size="pageInfo.rows"
                           background layout="prev, pager, next"
                           :total="pageInfo.total">
            </el-pagination>
          </div>
        </div>
      </div>
    </el-dialog>
    <input style="display: none" ref="form" type="file" class="fileHidden" @change="changeUpload($event)" />
  </div>
</template>

<script>
import { getVideoPrivatePage, getVideoPublicPage, uploadPrivateVideo, filesAnon } from '@/apiModules/apiMethods/h5editor/index'

export default {
    name: 'CustomVideo',
    props: {
        editItem: Object
    },
    data () {
        return {
            dialogVisible: false,
            curIdx: 1,
            List: [],
            pageInfo: {
                page: 1,
                rows: 10,
                total: 0
            },
            typeList: [
                {
                    label: '视频库',
                    value: 1
                },
                {
                    label: '我的视频',
                    value: 2
                }
            ]
        }
    },
    methods: {
        selectVideo (item) {
            this.dialogVisible = false
            this.editItem.customSrc = item.videoUrl
        },
        changeType (item) {
            if (this.curIdx == item.value) return
            this.curIdx = item.value
            this.getList(1)
        },
        handleChangePage (pageNum) {
            this.getList(pageNum)
        },
        uploadFile () {
            this.$refs['form'].click()
        },
        changeUpload (event) {
            let file = event.target.files[0]
            this.setValue(file)
            this.resetInputForm()
        },
        setValue (file) {
            let fileType = 'MP4|mp4'
            let fileSize = 20
            const fileExt = file.name.split('.').pop().toLocaleLowerCase()
            const extArr = fileType.split('|')
            const isAcceptExt = extArr.some(item => {
                return item === fileExt
            })
            const isLt2M = file.size / 1024 / 1024 < fileSize

            if (!isAcceptExt) {
                this.$message.error(`只能是${fileType}格式!`)
            }
            if (!isLt2M) {
                this.$message.error(`大小不能超过 ${fileSize}MB!`)
            }
            if (isAcceptExt && isLt2M) {
                let fd = new FormData()
                fd.append('file', file)
                filesAnon(fd).then(res => {
                    let params = {
                        videoName: file.name,
                        videoSize: file.size,
                        videoUrl: res.url
                    }
                    uploadPrivateVideo(params).then(res => {
                        this.$message.success('上传成功')
                        this.curIdx = 2
                        this.getList()
                    })
                })
            }

        },
        resetInputForm () {
            if (this.$refs['form']) {
                this.$refs['form'].value = ''
            }
        },
        handleClose (done) {
            this.resetInputForm()
            this.List = []
            done()
        },
        handleOpen () {
            this.dialogVisible = true
        },
        openDialog () {
            this.getList()
        },
        getList (pageNum) {
            if (typeof pageNum == 'number') {
                this.pageInfo.page = pageNum
            }
            let { page, rows } = this.pageInfo
            let params = {
                page,
                rows
            }
            let func = this.curIdx == 1 ? getVideoPublicPage : getVideoPrivatePage
            func(params).then(res => {
                this.List = res.data.records
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../PannelR.scss';
.setcontent{
  width: 236px;
  height: 100px;
  &-area{
    /deep/ .el-textarea__inner{
      min-height: 100px !important;
      background: #F7F8FB;
      border: none;
      border-radius: 4px;
    }
  }
}
.h5dialog{
  display: flex;
  align-items: start;
  &-l{
    flex: 0 0 122px;
    padding-top: 20px;
    padding-bottom: 44px;
    display: flex;
    flex-direction: column;
    height: 422px;
    border-right: 1px solid rgba(0, 0, 0, 0.09);
    .lbox{
      flex: 1;
    }
    .litem{
      height: 32px;
      line-height: 32px;
      padding-left: 32px;
      font-size: 14px;
      color: #000000;
      cursor: pointer;
    }
    .activeitem{
      border-left: 2px solid #1960FF;
      background: linear-gradient(90deg, rgba(25, 96, 255, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%);
    }
    .lbtn{
      width: 94px;
      margin: 0 auto;
    }
  }
  &-r{
    flex: 1;
    height: 422px;
    .rbox{
      padding: 36px;
      display: grid;
      grid-template-columns: repeat(4, 108px);
      grid-column-gap: 24px;
      grid-row-gap: 24px;
      &-item{
        border-radius: 2px;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-img{
        width: 108px;
        height: 108px;
        background: #C4C4C4;
        position: relative;
      }
      &-mask{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(1, 1, 1, .3);
        z-index: 2;
        line-height: 108px;
        text-align: center;
        .maskbtn{
          opacity: 0;
        }
        &:hover{
          .maskbtn{
            opacity: 1;
          }
        }
      }
      &-name{
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss">
.h5custom{
  .el-dialog__body{
    padding: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
}
</style>
