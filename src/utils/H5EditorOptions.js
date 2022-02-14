const menuList = [{
    label: '文字',
    type: 1,
    imgName: 'word',
    subMenu: [
        {
            type: 1,
            label: '点击添加标题文字',
            value: 1,
        },
        {
            type: 1,
            label: '点击添加副标题文字',
            value: 2
        },
        {
            type: 1,
            label: '点击添加正文文字',
            value: 3
        }
    ]
}, {
    label: '图片',
    type: 2,
    imgName: 'img',
    subMenu: []
}, {
    label: '背景',
    type: 3,
    imgName: 'bg',
    subMenu: []
}, {
    label: '组件',
    type: 4,
    imgName: 'component',
    subMenu: []
}]

let obj = {}
menuList.forEach((menu) => {
    obj[menu.type] = {
        ...menu
    }
})
const menuOptions = obj

export {
    menuList,
    menuOptions
}
