<template>
<div class="h5bg">
  <div class="bgColor">
    <div class="label">推荐颜色</div>
    <div class="recommendColor">
      <div class="recommendColor-item pointer"
           v-for="(color, idx) in colorList"
           :style="{ background: color }"
           :key="idx"
            @click="changeBgColor(color)">
      </div>
    </div>
    <el-button class="w100" type="primary" @click="uploadBgImg">上传背景图片</el-button>
  </div>
  <div class="bgAllImg">
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="图片" name="1"></el-tab-pane>
      <el-tab-pane label="纹理" name="2"></el-tab-pane>
      <el-tab-pane label="我的" name="3"></el-tab-pane>
    </el-tabs>
    <div>
      <el-input
        class="bgSearchInput"
        placeholder="搜索您想要的图片"
        suffix-icon="el-icon-search"
        v-model="searchForm.videoName">
      </el-input>
    </div>
    <div>
      <vuedraggable class="dragArea list-group bgImg" dragClass="ghost" chosenClass="ghost" :sort="false" :group="{ name: 'menucomponents', pull: 'clone', put: false }">
        <div class="bgImg-item list-group-item" v-for="(item, idx) in bgImgList" :key='idx' :data-type="item.type" :data-value="item.value">{{ item.value }}</div>
      </vuedraggable>
    </div>
  </div>
  <input style="display: none" ref="form" type="file" class="fileHidden" @change="changeUpload($event)" />
</div>
</template>

<script>
import vuedraggable from 'vuedraggable'
import { filesAnon, getBgPrivatePage, uploadPrivateBackground } from '@/apiModules/apiMethods/h5editor/index'

export default {
    name: 'BgImgOption',
    props: {
        bgItem: Object
    },
    components: {
        vuedraggable,
    },
    data () {
        return {
            activeName: '1',
            searchForm: {
                videoName: '',
            },
            bgImgList: [
                {
                    type: 3,
                    value: 1
                },
                {
                    type: 3,
                    value: 2
                },
                {
                    type: 3,
                    value: 3
                },
                {
                    type: 3,
                    value: 4
                },
            ],
            colorList: ['#fff', '#FFCE3C', '#FF9844', '#E94548', '#E23B78', '#B546F9', '#30CBE2', '#45D396', '#91D869', '#C4C4C4', '#A0A0A0', '#5B5B5B']
        }
    },
    methods: {
        changeUpload (event) {
            let file = event.target.files[0]
            this.setValue(file)
            this.resetInputForm()
        },
        setValue (file) {
            let fileType = 'png|jpg|jpeg'
            let fileSize = 2
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
                    this.bgItem.style.backgroundImage = res.url
                    let params = {
                        imageName: file.name,
                        imageSize: fileSize,
                        imageUrl: res.url
                    }
                    uploadPrivateBackground(params).then(() => {
                        this.$messeage.success('上传成功')
                    })
                    console.log('this.bgItem', this.bgItem)
                })
            }
        },
        resetInputForm () {
            if (this.$refs['form']) {
                this.$refs['form'].value = ''
            }
        },
        handleTabClick () {
            this.getImgList()
        },
        changeBgColor (value) {
            this.bgItem.style.backgroundColor = value
        },
        uploadBgImg () {
            this.$refs['form'].click()
        },
        getImgList () {
            getBgPrivatePage({
                type: this.activeName,
                ...this.searchForm
            }).then(res => {
                this.bgImgList = res.data.records
            })
        }
    },
    mounted () {
        this.getImgList()
    }
}
</script>

<style lang="scss" scoped>
.h5bg{

}
.recommendColor{
  display: grid;
  grid-template-columns: repeat(auto-fill, 28px);;
  grid-column-gap: 14px;
  grid-row-gap: 12px;
  padding: 8px 0 24px 0;
  &-item{
    width: 28px;
    height: 28px;
    border: 1px solid #E1E1E1;
    box-sizing: border-box;
    border-radius: 2px;
  }
}
.bgColor{
  padding: 20px;
}
.bgAllImg{
  border-top: 1px solid #F8F8F8;
  padding: 20px;
}
.bgImg{
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 72px);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  &-item{
    width: 72px;
    height: 104px;
    background: #C4C4C4;
    border-radius: 2px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
<style lang="scss">
.bgSearchInput{
  .el-input__inner{
    border: none;
    background: #F7F8FB;
  }
  .el-input__icon{
    font-size: 18px;
  }
}
</style>
