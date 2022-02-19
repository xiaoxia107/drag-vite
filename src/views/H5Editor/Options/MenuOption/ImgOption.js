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
        }, {
            type: 2,
            label: '左右两张拼接图片',
            value: 3,
            imgs: [
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 108
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 108
                    },
                },
            ]
        }, {
            type: 2,
            label: '上边一个长方形下边两个正方形',
            value: 4,
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
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
            ]
        }
        , {
            type: 2,
            label: '左边一个长方形右边两个正方形',
            value: 5,
            imgs: [
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 108
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
            ]
        }
        , {
            type: 2,
            label: '四个正方形',
            value: 6,
            imgs: [
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
            ]
        }
        , {
            type: 2,
            label: '上面大长方形下面三个小长方形',
            value: 7,
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
                        width: 36,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 36,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 36,
                        height: 54
                    },
                },
            ]
        }
        , {
            type: 2,
            label: '上面两个正方形下面三个长方形',
            value: 8,
            imgs: [
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 54,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 36,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 36,
                        height: 54
                    },
                },
                {
                    imgName: 'defaultImg',
                    imgSrc: null,
                    style: {
                        width: 36,
                        height: 54
                    },
                },
            ]
        }
        , {
            type: 2,
            label: 'banner图',
            value: 9,
            style:{
                height:121,
                width:239,
            },
            imgs: [
                {
                    imgName: 'bannerImg1',
                    imgSrc: null,
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                },
                {
                    imgName: 'bannerImg2',
                    imgSrc: null,
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                }
            ]
        }
    ]
}

export default ImgOption
