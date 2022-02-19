import interact from 'interactjs'
import _ from 'lodash'
import uuid from '@/utils/uuid'
import vuedraggable from 'vuedraggable'
import { menuList, menuOptions } from '../Options/MenuOption/index'
import PannelR from './components/PannelR/PannelR.vue'
import ShapeController from './components/ShapeController/ShapeController.vue'
import Word from './components/Word/Word.vue'
import Imagee from './components/Image/Image.vue'
import TopNav from './components/TopNav/TopNav'
import Perview from '@/components/H5EditorPerview/H5EditorPerview'
import MenuWord from './components/MenuComponent/MenuWord'
import MenuImage from './components/MenuComponent/MenuImage'
import MenuCustom from './components/MenuComponent/MenuCustom'
import MenuBgImg from './components/MenuComponent/MenuBgImg'
import CustomView from './components/CustomView/Index'
const orgH5Url = 'http://114.55.96.166:8099/'
// import { addH5Info, getH5InfoDetail, modifyH5Info } from '@/apiModules/apiMethods/h5editor/index'

export default {
    name: 'H5EditorEdit',
    components: {
        vuedraggable,
        PannelR,
        ShapeController,
        Word,
        Imagee,
        TopNav,
        Perview,
        MenuWord,
        MenuImage,
        MenuCustom,
        MenuBgImg,
        CustomView
    },
    data () {
        return {
            curType: 2,
            menuList: _.cloneDeep(menuList),
            curDropTarget: null,
            zoomList: [],
            List: _.cloneDeep(menuList),
            componentList: [],
            menuOptions: _.cloneDeep(menuOptions),
            curEditItem: null,
            curIdx: null,
            templateName: '',
            bgItem: _.cloneDeep(menuOptions[3]),
            isBgImg: false,
            infoForm: {
                id: this.$route.query.id || '',
                appCode: this.$route.query.id ? '' : uuid(),
                appName: '',
                appOrgUrl: '',
                layout: '',
                h5ModuleInfoList: [
                    {
                        elementCode: '',
                        elementJson: '',
                        elementName: '',
                        elementType: 0
                    }
                ]
            }
        }
    },
    methods: {
        submitForm () {
            console.log('submitForm', this.infoForm)
            if (!this.infoForm.appName) {
                this.$message.error('H5应用名称不能为空')
                return
            }
            this.infoForm.appOrgUrl = orgH5Url
            let layout = {
                componentList: this.componentList,
                bgItem: this.bgItem
            }
            this.infoForm.layout = JSON.stringify(layout)

            let h5ModuleInfoList = this.componentList.map(item => {
                let obj = {
                    elementCode: item.id,
                    elementJson: '',
                    elementName: item.label,
                    elementType: item.type
                }
                return obj
            })
            this.infoForm.h5ModuleInfoList = h5ModuleInfoList
            console.log('obj', this.infoForm)

            let params = _.cloneDeep(this.infoForm)
            if (params.id) {
                delete params.appCode
            }
            // let func = this.infoForm.id ? modifyH5Info : addH5Info
            // func(this.infoForm).then(res => {
            //     this.$message.success('操作成功')
            // }).catch(err => {
            //     this.$message.error(err)
            // })
        },
        handleBgImgDel () {
            this.curEditItem = null
            this.bgItem = _.cloneDeep(menuOptions[3])
        },
        handleSpaceClick () {
            console.log('handleSpaceClick')
            this.curEditItem = null
        },
        handleBgImg () {
            this.curEditItem = _.cloneDeep(this.bgItem)
            console.log('handleBgImg', this.curEditItem)
        },
        handleNavClick (func) {
            switch (func) {
                /* eslint-disable */
                case 'preview':
                    console.log('preview', func)
                    this.$refs.Perview.openDialog()
                    break
                case 'save':
                    console.log('save', func)
                    break
                case 'del':
                    if (!this.curEditItem) return
                    let idx = this.componentList.findIndex(item => {
                        return item.id == this.curEditItem.id
                    })
                    this.componentList.splice(idx, 1)
                    this.curEditItem = null
                    this.curIdx = null
                    break
                case 'release':
                    this.submitForm()
                    break
            }
        },
        handleDel (idx) {
            this.componentList.splice(idx, 1)
            this.curEditItem = null
            this.curIdx = null
        },
        handleItemClick (item, idx) {
            this.curEditItem = item
            this.curIdx = idx
        },
        changeMenuType (type) {
            if (this.curType == type) return
            this.curType = type
        },
        onAdd (evt) {
            let parent = document.getElementById('perviewArea')
            let type = evt.item.dataset.type
            let value = evt.item.dataset.value
            let element = this.menuOptions[type].subMenu.find(item => {
                return item.value == value
            })
            let obj = _.cloneDeep(element)
            let params = {}
            if (type !== '3') {
                let x = evt.originalEvent.clientX - (parent.offsetLeft + 50)
                let y = evt.originalEvent.clientY - (parent.offsetTop + 108)
                let w;
                let h;
                if (type == 2) {
                    if (obj.value != 9) {
                        w = 108
                        h = 108
                    } else {
                        w = 239
                        h = 121
                    }

                } else {
                    w = obj.style.width
                    h = obj.style.height
                }

                params = {
                    id: uuid(),
                    x: x,
                    y: y,
                    w: w,
                    h: h,
                    zIndex: 999,
                    ...obj
                }
                this.componentList.push(params)
            } else {
                this.bgStyle = {
                    backgroundColor: 'red'
                }
            }
        },
        setPos (target, x, y, w, h) {
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
            target.setAttribute('data-w', w)
            target.setAttribute('data-h', h)

            if (this.componentList[this.curIdx]) {
                this.componentList[this.curIdx].x = x
                this.componentList[this.curIdx].y = y
                this.componentList[this.curIdx].w = w
                this.componentList[this.curIdx].h = h
            }
        },
        init () {
            let self = this
            const viewArea = interact('.perviewArea')
            viewArea.resizable({
                edges: { left: false, right: false, bottom: '.stretchbtn', top: false },
                listeners: {
                    move (event) {
                        let target = event.target
                        if (target) {
                            let h = event.rect.height
                            self.bgItem.style.height = h > 677 ? h : 677
                        }
                    }
                },
                modifiers: [
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 50 }
                    })
                ],
                inertia: true
            })

            const zoomItem = interact('.newitem')
            zoomItem.resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: {
                    move (event) {
                        let target = event.target
                        let x = (parseFloat(target.getAttribute('data-x')) || 0)
                        let y = (parseFloat(target.getAttribute('data-y')) || 0)
                        let w = event.rect.width
                        let h = event.rect.height
                        x += event.deltaRect.left
                        y += event.deltaRect.top
                        self.setPos(target, x, y, w, h)
                    }
                },
                modifiers: [
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 50 }
                    })
                ],
                inertia: true
            })
            zoomItem.draggable({
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                listeners: {
                    move: dragMoveZoomListener
                }
            })

            function dragMoveZoomListener (event) {
                let target = event.target
                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
                let w = (parseFloat(target.getAttribute('data-w')) || event.rect.width)
                let h = (parseFloat(target.getAttribute('data-h')) || event.rect.height)
                self.setPos(target, x, y, w, h)
            }
        },
        //编辑字体
        wordEdit (item) {
            this.componentList.forEach(ite => {
                if (ite.id == item.id) {
                    ite = item
                }
            })
        },
        //编辑图片
        imageEdit (item) {
            this.componentList.forEach(ite => {
                if (ite.id == item.id) {
                    ite = item
                }
            })
        },
        getDetail (id) {
            if (!id) return
            // getH5InfoDetail(id).then(res => {
            //     let obj = res.data
            //     Object.keys(this.infoForm).forEach(key => {
            //         this.infoForm[key] = _.cloneDeep(obj[key])
            //     })
            //     if (this.infoForm.layout) {
            //         let layout = JSON.parse(this.infoForm.layout)
            //         this.componentList = layout.componentList
            //         this.bgItem = layout.bgItem
            //     }
            //     console.log('this.infoForm', this.infoForm)
            // })
        }
    },
    mounted () {
        this.init()
        this.getDetail(this.$route.query.id)
    }
}
