import interact from 'interactjs'
import _ from 'lodash'
import vuedraggable from 'vuedraggable'
import { menuList, menuOptions } from '@/utils/H5EditorOptions'
import PannelR from './components/PannelR/PannelR'
import ShapeController from './components/ShapeController/ShapeController'
import Word from './components/Word/Word'

export default {
    name: 'H5EditorEdit',
    components: {
        vuedraggable,
        PannelR,
        ShapeController,
        Word
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
            curIdx: null
        }
    },
    methods: {
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


            let type = evt.item.dataset.type
            let params = {
                id: new Date().getTime(),
                x: x,
                y: y,
                zIndex: 999,
                type: type,
                value: evt.item.dataset.value,
                label: evt.item.innerHTML
            }

            this.componentList.push(params)
            this.$nextTick(() => {
                let target = document.getElementById(params.id)
                this.setPos(target, x, y)
            })
        },
        setPos (target, x, y) {
            target.style.left = x + 'px'
            target.style.top = y + 'px'
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)

            if (this.componentList[this.curIdx]) {
                this.componentList[this.curIdx].x = x
                this.componentList[this.curIdx].y = y
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
                        target.style.width = event.rect.width + 'px'
                        target.style.height = event.rect.height + 'px'
                        x += event.deltaRect.left
                        y += event.deltaRect.top
                        self.setPos(target, x, y)
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
                self.setPos(target, x, y)
            }
        }
    },
    mounted () {
        this.init()
    }
}
