const ImgOption = {
    label: '图片',
    type: 2,
    imgName: 'component',
    subMenu: [
        {
            type: 2,
            label: '图片',
            value: 1,
            imgName: 'defaultImg',
            imgSrc: null,
            style: {
                width: 108,
                height: 108
            },
            ifHref: false,
            href: ''
        }, {
            type: 2,
            label: '上下两张拼接图片',
            value: 2,
            imgs: [
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 108,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 108,
                        height: 54
                    },
                },
            ]
        }
    ]
}

export default ImgOption
