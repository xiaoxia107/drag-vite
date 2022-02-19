<template>
    <transition name="el-fade-in">
        <div id="eidtArea" class="eidtArea">
            <TopNav :appName.sync="infoForm.appName" @handleNavClick="handleNavClick" />
            <div class="editpannel">
                <div class="editpannel-l">
                    <div class="editMenus">
                        <div class="menusitem" @click="changeMenuType(item.type)" :class="(curType == item.type) ? 'curType' : ''" v-for="(item, idx) in menuList" :key="idx">
                            <img v-if="item.imgName" :src="require(`@/images/H5Editor/${item.imgName}${ (curType == item.type) ? '' : '_1'}.png`)" alt="">
                            <div>{{ item.label }}</div>
                        </div>
                    </div>
                    <div class="menusOptions">
                        <p v-if="curType == 2" style="padding:22px">选择样式</p>
                        <div v-for="(element) in menuOptions[curType].subMenu" :key="element.value">
                            <MenuWord v-if="curType == 1" :element="element" />
                            <MenuImage v-if="curType == 2" :element="element" />
                            <MenuBgImg v-if="curType == 3" :bgItem="bgItem" />
                            <MenuCustom v-if="curType == 4" :element="element" />
                        </div>
                    </div>
                </div>
                <div class="editpannel-c" @click.stop="handleSpaceClick">
                    <div class="perviewArea"
                         id="perviewArea"
                         :style="{
                            width: bgItem.style.width + 'px',
                            height: bgItem.style.height + 'px',
                            backgroundColor: bgItem.style.backgroundColor,
                            backgroundImage: bgItem.style.backgroundImage,
                         }"
                         @click.stop="handleBgImg"
                         :class="((curEditItem && curEditItem.id) == bgItem.id) ? 'curitem' : ''">
                      <div v-show="(curEditItem && curEditItem.id) == bgItem.id" class="delItemIcon" @click.stop="handleBgImgDel">
                        <span class="el-icon-circle-close"></span>
                      </div>

                        <vuedraggable class="menuDragArea" ghostClass="ghost"  :group="{ name: 'menucomponents', pull: false, put: true,  }" @add="onAdd">
                           <div></div>
                        </vuedraggable>
                        <div class="newitem" :id="item.id" :data-x="item.x" :data-y="item.y" :class="(curEditItem && curEditItem.id == item.id) ? 'curitem' : ''" :style="{
                         left: item.x + 'px',
                         top: item.y + 'px',
                         width: item.w + 'px',
                         height: item.h + 'px',
                         zIndex: item.zIndex
                       }" v-for="(item, idx) in componentList" :key="idx" @click.stop="handleItemClick(item, idx)">
                            <ShapeController :editItem="curEditItem" :item="item" @handleDel="handleDel(idx)">
                                <Word v-if="item.type == 1" :editItem="item" />
                                <Imagee v-if="item.type == 2" :editItem="item" />
                                <CustomView v-if="item.type == 4" :editItem="item" />
                            </ShapeController>
                        </div>
                      <div class="stretch"><span class="el-icon-d-caret stretchbtn"></span></div>
                    </div>
                </div>
                <div class="editpannel-r">
                    <PannelR :editItem="(curEditItem && curEditItem.id) == bgItem.id ? bgItem : componentList[curIdx]" @wordEdit="wordEdit" @imageEdit="imageEdit" />
                </div>
            </div>
            <Perview ref="Perview" :componentList="componentList" :bgItem="bgItem"/>
        </div>
    </transition>
</template>

<script>
import H5EditorEdit from './H5EditorEdit.js'
export default {
    ...H5EditorEdit
}
</script>

<style lang="scss" scoped>
@import './H5EditorEdit.scss';
</style>
