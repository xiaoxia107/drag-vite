<template>
    <transition name="el-fade-in">
        <div id="eidtArea" class="eidtArea">
            <TopNav :templateName.sync="templateName" @handleNavClick="handleNavClick" />

            <div class="editpannel">
                <div class="editpannel-l">
                    <div class="editMenus">
                        <div class="menusitem" @click="changeMenuType(item.type)" :class="(curType == item.type) ? 'curType' : ''" v-for="(item, idx) in menuList" :key="idx">
                            <img v-if="item.imgName" :src="require(`@/images/H5Editor/${item.imgName}${ (curType == item.type) ? '' : '_1'}.png`)" alt="">
                            <div>{{ item.label }}</div>
                        </div>
                    </div>
                    <div class="menusOptions">
                        <vuedraggable class="dragArea list-group" dragClass="ghost" chosenClass="ghost" :list="menuOptions[curType].subMenu" :sort="false" :group="{ name: 'menucomponents', pull: 'clone', put: false }">
                            <div class="list-group-item" :data-type="element.type" :data-value="element.value" v-for="element in menuOptions[curType].subMenu" :key="element.value">
                                <MenuWord v-show="curType == 1" :element="element" />
                                <MenuCustom v-show="curType == 4" :element="element" />
                            </div>
                        </vuedraggable>
                    </div>
                </div>
                <div class="editpannel-c">
                    <div class="perviewArea" id="perviewArea">
                        <vuedraggable class="menuDragArea" ghostClass="ghost" :list="List" :group="{ name: 'menucomponents', pull: false, put: true,  }" @add="onAdd">
                            <div class="list-group-item" v-for="(element, idx) in List" :key="idx">
                                {{ element.label }}
                            </div>
                        </vuedraggable>
                        <div class="newitem" :id="item.id" :data-x="item.x" :data-y="item.y" :class="(curEditItem && curEditItem.id == item.id) ? 'curitem' : ''" :style="{
                         left: item.x + 'px',
                         top: item.y + 'px',
                         width: item.w + 'px',
                         height: item.h + 'px',
                         zIndex: item.zIndex
                       }" v-for="(item, idx) in componentList" :key="idx" @click="handleItemClick(item, idx)">
                            <ShapeController :editItem="curEditItem" :item="item" @handleDel="handleDel(idx)">
                                <Word v-if="item.type == 1" :editItem="item" />
                                <CustomView v-if="item.type == 4" :editItem="item" />
                            </ShapeController>
                        </div>
                    </div>
                </div>
                <div class="editpannel-r">
                    <PannelR :editItem="componentList[curIdx]" @changeWord="changeWord" />
                </div>
            </div>
            <Perview ref="Perview" :componentList="componentList" />
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
