<template>
  <div class="qrCode" v-if="editItem">
    <div class="label">内容</div>
    <div class="label">标志</div>
    <div class="label">样式</div>
    <div class="label mt16">自定义</div>
    <div class="mt10 uploadFileBtn">
      <span class="uploadFileBtn-l">上传二维码</span>
      <img :src="require('@/images/H5Editor/upload.png')" alt="" />
    </div>
    <qrcode
        :url="editItem.url"
        :iconurl="editItem.iconurl"
        :wid="editItem.wid"
        :hei="editItem.hei"
        :colorDark="editItem.colorDark"
        :colorLight="editItem.colorLight"
        :imgwid="editItem.imgwid"
        :imghei="editItem.imghei">
    </qrcode>
  </div>
</template>

<script>
import qrcode from 'vue_qrcodes'
export default {
    name: 'CustomQrCode',
    props: {
        editItem: Object
    },
    components: {
        qrcode
    }
}
</script>

<style lang="scss" scoped>
@import '../../PannelR.scss';
</style>
