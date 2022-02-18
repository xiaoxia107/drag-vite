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
            curType: 3,
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
            isBgImg: false
        }
    },
    methods: {
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
                    console.log('del', func)
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
                let w = obj.style.width
                let h = obj.style.height
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
        }
    },
    mounted () {
        this.init()
    }
}
