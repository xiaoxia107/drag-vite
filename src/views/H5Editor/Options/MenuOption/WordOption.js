const WordOption = {
    label: '文字',
    type: 1,
    imgName: 'word',
    subMenu: [
        {
            type: 1,
            label: '点击添加标题文字',
            value: 1,
            style: {
                fontFamily: '宋体',
                fontKey: 1,
                fontWeight: 'bold',
                fontSize: 20,
                lineHeight: 28,
                color: '#000000',
                fontStyle: 'normal',
                textDecoration: 'none',
                width: 194,
                height: 40
            },
            ifHref: false,
            href: ''
        },
        {
            type: 1,
            label: '点击添加副标题文字',
            value: 2,
            style: {
                fontFamily: '宋体',
                fontKey: 1,
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 20,
                color: '#000000',
                fontStyle: 'normal',
                textDecoration: 'none',
                width: 194,
                height: 40
            },
            ifHref: false,
            href: ''
        },
        {
            type: 1,
            label: '点击添加正文文字',
            value: 3,
            style: {
                fontFamily: '宋体',
                fontKey: 1,
                fontWeight: 'normal',
                fontSize: 12,
                lineHeight: 17,
                color: '#000000',
                fontStyle: 'normal',
                textDecoration: 'none',
                width: 194,
                height: 40
            },
            ifHref: false,
            href: ''
        }
    ]
}

export default WordOption
