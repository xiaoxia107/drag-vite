import WordOption from './WordOption'
import ImgOption from './ImgOption'
import BgImgOption from './BgImgOption'
import CustomOption from './CustomOption'
const menuList = [
    WordOption,
    ImgOption,
    BgImgOption,
    CustomOption
]

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
