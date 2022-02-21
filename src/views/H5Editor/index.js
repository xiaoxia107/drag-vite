import Perview from '@/components/H5EditorPerview/H5EditorPerview'
import { getH5Page, removeH5Info, getH5InfoDetail } from '@/apiModules/apiMethods/h5editor/index'
import {menuOptions} from '@/views/H5Editor/Options/MenuOption'
import _ from 'lodash'

export default {
    name: 'index',
    components: {
        Perview
    },
    data () {
        return {
            searchForm: {
                appName: '',
                time: ''
            },
            pageInfo: {
                page: 1,
                rows: 10,
                total: 0
            },
            tableData: [{
                name: 'aaa'
            }],
            Options: [],
            loading: false,
            componentList: [],
            bgItem: _.cloneDeep(menuOptions[3]),
        }
    },
    methods: {
        handleSizeChange (size) {
            this.pageInfo.rows = size
            this.getList(1)
        },
        handleChangePage (pageNum) {
            this.getList(pageNum)
        },
        handleEdit (id) {
            this.$router.push({
                path: '/h5EditorEdit',
                query: {
                    id: id
                }
            })
        },
        handleDelete (templateId) {
            this.$confirm('确认删除', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                removeH5Info(templateId).then(res => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                    this.getList(1)
                })
            })
        },
        handlePreview (id) {
            getH5InfoDetail(id).then(res => {
                let obj = res.data
                if (obj.layout) {
                    let layout = JSON.parse(obj.layout)
                    this.componentList = layout.componentList
                    this.bgItem = layout.bgItem
                    this.$refs.Perview.openDialog()
                }
            })
        },
        handleAdd () {
            this.$router.push({
                path: 'h5EditorEdit'
            })
        },
        getList (pageNum) {
            if (typeof pageNum == 'number') {
                this.pageInfo.page = pageNum
            }
            let { page, rows } = this.pageInfo
            let startTime = ''
            let endTime = ''
            if (this.searchForm.time) {
                startTime = this.searchForm.time[0]
                endTime = this.searchForm.time[1]
            }

            let params = {
                page,
                rows,
                startTime,
                endTime,
                appName: this.searchForm.appName
            }
            this.loading = true
            this.tableData = []
            getH5Page(params).then(res => {
                this.tableData = res.data.records
                this.pageInfo.total = res.data.total
            }).then(() => {
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        }
    },
    created () {
        this.getList()
    }
}
