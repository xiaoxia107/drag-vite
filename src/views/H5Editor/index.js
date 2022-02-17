import Perview from '@/components/H5EditorPerview/H5EditorPerview'

export default {
    name: 'index',
    components: {
        Perview
    },
    data () {
        return {
            searchForm: {
                templateType: '',
                templateName: ''
            },
            pageInfo: {
                page: 1,
                rows: 10,
                total: 0
            },
            tableData: [{
                name: 'aaa'
            }],
            visibleDialog: false,
            Options: [],
            loading: false
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
                // removeTemplate(templateId).then(res => {
                //     this.$message({
                //         type: 'success',
                //         message: '删除成功!'
                //     })
                //     this.getList(1)
                // })
            })
        },
        handlePreview (templateId) {
            // dingDetail(templateId).then(res => {
            //     let infoObj = res.data
            //     Object.keys(this.templateForm).forEach(key => {
            //         if (infoObj[key]) {
            //             this.templateForm[key] = _.cloneDeep(infoObj[key])
            //         }
            //     })
            //     this.visibleDialog = true
            // })
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
            let params = {
                page,
                rows,
                ...this.searchForm
            }
            // this.loading = true
            // this.tableData = []
            // dingPage(params).then(res => {
            //     this.tableData = res.data.records
            //     this.pageInfo.total = res.data.total
            // }).then(() => {
            //     this.loading = false
            // }).catch(() => {
            //     this.loading = false
            // })
        }
    },
    created () {
        this.getList()
    }
}
