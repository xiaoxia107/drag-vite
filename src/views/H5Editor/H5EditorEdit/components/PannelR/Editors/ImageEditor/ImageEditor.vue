<template>
    <div class="ImageEditor" v-if="editItem && editItem.type == 2">
        <h4>图片</h4>
        <p class="replace" @click="changeImage">
            <img src="@/images/H5Editor/imgReplace.png" alt=""> 替换图片
        </p>
        <p class="cd">
            <span class="cut" @click="cutImage">
                <img src="@/images/H5Editor/imgCut.png" alt=""> 裁剪图片
            </span>
            <span class="del" @click="delImage">
                <img src="@/images/H5Editor/imgDel.png" alt=""> 移除图片
            </span>
        </p>
        <p>
            <el-checkbox v-model="ifHref" style="margin:13px 0" @change="changeCheck">启动跳转链接</el-checkbox>
        </p>
        <p>
            <el-input type="text" :disabled="!ifHref" v-model="href" placeholder="请输入内容" @change="changeHref" />
        </p>
        <el-dialog title="图片素材" :visible.sync="dialogVisible" custom-class="customTemplate" :append-to-body="true" width="80%">
            <el-tabs tab-position="left" style="height: 439px">
                <el-tab-pane label="图片库">
                    图片库
                </el-tab-pane>
                <el-tab-pane label="我的图片">
                    我的图片
                </el-tab-pane>
            </el-tabs>
            <div class="tr">
                <el-pagination :current-page="pageInfo.page" @current-change="handleChangePage" @size-change="handleSizeChange" :page-size="pageInfo.rows" :page-sizes="[10,25,50,100]" background layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.total">
                </el-pagination>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ImageEditor from './ImageEditor.js'
export default {
    ...ImageEditor
};
</script>

<style scoped lang="scss">
@import './ImageEditor.scss';
</style>
