<template>
  <div>
    <NavCrumbs>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>素材管理</el-breadcrumb-item>
        <el-breadcrumb-item>H5工具制作</el-breadcrumb-item>
      </el-breadcrumb>
    </NavCrumbs>
    <div class="mainWrapper p20">
      <div class="msgSearch">
        <div class="msgSearch-form">
          <el-input v-model="searchForm.appName"
                    class="msgSearch-input"
                    placeholder="请输入页面标题"
                    prefix-icon="el-icon-search"
                    clearable>
          </el-input>
          <el-date-picker
              class="ml10 w180"
              v-model="searchForm.time"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
          <el-button class="ml10"
                     type="primary"
                     icon="el-icon-search"
                     @click="getList(1)">查询</el-button>
        </div>
        <div class="msgSearch-operate">
          <el-button type="primary"
                     plain
                     icon="el-icon-plus"
                     @click="handleAdd()">新建页面</el-button>
        </div>
      </div>
      <div class="shTable mtop20">
        <el-table class="w100"
                  v-loading="loading"
                  header-row-class-name="headerRow"
                  header-cell-class-name="headerCell"
                  row-class-name="rowClass"
                  :data="tableData">
          <el-table-column show-overflow-tooltip
                           label="页面标题"
                           prop="appName">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="链接地址"
                           prop="appDwzUrl">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="创建时间"
                           min-width="110"
                           prop="createTime">
          </el-table-column>
          <el-table-column label="操作"
                           width='300px'>
            <template slot-scope="scope">
              <el-button type="text"  @click="handlePreview(scope.row.id)">预览</el-button>
              <el-button type="text"  @click="handleEdit(scope.row.id)">编辑</el-button>
              <el-button type="text"  >统计</el-button>
              <el-button type="text"  >配置渠道</el-button>
              <el-button type="text"  @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="tr">
        <el-pagination :current-page="pageInfo.page"
                       @current-change="handleChangePage"
                       @size-change="handleSizeChange"
                       :page-size="pageInfo.rows"
                       :page-sizes="[10,25,50,100]"
                       background layout="total, sizes, prev, pager, next, jumper"
                       :total="pageInfo.total">
        </el-pagination>
      </div>
    </div>
    <Perview ref="Perview"  :componentList="componentList" :bgItem="bgItem"/>
  </div>
</template>

<script>
import index from './index.js'
export default {
    ...index
}
</script>
