const CustomOption = {
    label: '组件',
    type: 4,
    imgName: 'component',
    subMenu: [{
        type: 4,
        label: '视频',
        subLabel: '生成视频在设计中使用',
        value: 1,
        elementType: 4,
        imgName: 'video',
        customSrc: '',
        commonVideo: '',
        style: {
            width: 280,
            height: 140
        },
        ifHref: false,
        href: ''
    }, {
        type: 4,
        label: '二维码',
        subLabel: '生成二维码在设计中使用',
        value: 2,
        elementType: 5,
        imgName: 'qrcode',
        customSrc: '',
        url: 'www.baidu.com',
        iconurl: '',
        wid: 90,
        hei: 90,
        colorDark: '#000000',
        colorLight: '#ffffff',
        imgwid: 30,
        imghei: 30,
        style: {
            width: 90,
            height: 90
        },
        ifHref: false,
        href: ''
    }, {
        type: 4,
        label: '自定义',
        subLabel: '生成跳转链接在设计中使用',
        value: 3,
        elementType: 6,
        imgName: 'custom',
        style: {
            width: 90,
            height: 36,
            color: '#fff',
            background: '#1391CC',
            lineHeight: 36,
            borderRadius: 0,
            opacity: 1,
            fontSize: 14
        },
        ifHref: false,
        href: ''
    }, {
        type: 4,
        label: '电话',
        subLabel: '生成电话链接在设计中使用',
        value: 4,
        elementType: 7,
        imgName: 'phone',
        style: {
            width: 104,
            height: 36,
            color: '#fff',
            background: '#58C171',
            lineHeight: 36,
            borderRadius: 0,
            opacity: 1,
            fontSize: 14
        },
        ifHref: false,
        href: ''
    }]
}

export default CustomOption
