import interact from 'interactjs'
import _ from 'lodash'
import vuedraggable from 'vuedraggable'
import { menuList, menuOptions } from '@/utils/H5EditorOptions'
import PannelR from './components/PannelR/PannelR'
import ShapeController from './components/ShapeController/ShapeController'
import Word from './components/Word/Word'
import TopNav from './components/TopNav/TopNav'
import Perview from './components/Perview/Perview'

export default {
    name: 'H5EditorEdit',
    components: {
        vuedraggable,
        PannelR,
        ShapeController,
        Word,
        TopNav,
        Perview
    },
    data () {
        return {
            curType: 1,
            menuList: _.cloneDeep(menuList),
            curDropTarget: null,
            zoomList: [],
            List: [],
            componentList: [],
            menuOptions: _.cloneDeep(menuOptions),
            curEditItem: null,
            curIdx: null,
            templateName: ''
        }
    },
    methods: {
        handleNavClick (func) {
            switch (func) {
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
            let x = evt.originalEvent.clientX - parent.offsetLeft
            let y = evt.originalEvent.clientY - (parent.offsetTop + 108)
            let w = 200
            let h = 50

            let type = evt.item.dataset.type
            let params = {
                id: new Date().getTime(),
                x: x,
                y: y,
                w: w,
                h: h,
                zIndex: 999,
                type: type,
                value: evt.item.dataset.value,
                label: evt.item.innerHTML
            }

            this.componentList.push(params)
            this.$nextTick(() => {
                let target = document.getElementById(params.id)
                this.setPos(target, x, y, w, h)
            })
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
        }
    },
    mounted () {
        this.init()
    }
}
