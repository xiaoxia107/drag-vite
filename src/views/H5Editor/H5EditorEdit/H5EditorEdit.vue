<template>
    <div id="eidtArea" class="eidtArea">
        <div class="topNav">
            <div class="topNav-l">模板</div>
            <div class="topNav-r">
                <el-button type="text">预览</el-button>
                <el-button type="text">保存</el-button>
                <el-button type="text">删除</el-button>
                <el-button>发布</el-button>
            </div>
        </div>

        <div class="editpannel">
            <div class="editpannel-l">
                <div class="editMenus">
                    <div class="menusitem" @click="changeMenuType(item.type)" :class="(curType == item.type) ? 'curType' : ''" v-for="(item, idx) in menuList" :key="idx">
                        <img v-if="item.imgName" :src="require(`@/images/H5Editor/${item.imgName}${ (curType == item.type) ? '' : '_1'}.png`)" alt="">
                        <div>{{ item.label }}</div>
                    </div>
                </div>
                <div class="menusOptions">
                    <vuedraggable class="dragArea list-group"
                                  dragClass="ghost"
                                  chosenClass="ghost"
                                  :list="menuOptions[curType].subMenu"
                                  :sort="false"
                                  :group="{ name: 'menucomponents', pull: 'clone', put: false }">
                        <div :class="`list-group-item${element.value} list-group-item`"
                             :data-type="element.type"
                             :data-value="element.value"
                             v-for="element in menuOptions[curType].subMenu"
                             :key="element.value">
                            {{ element.label }}
                        </div>
                    </vuedraggable>
                </div>
            </div>
            <div class="editpannel-c">
                <div class="perviewArea" id="perviewArea">
                    <vuedraggable class="menuDragArea"
                                  ghostClass="ghost"
                                  :list="List"
                                  :group="{ name: 'menucomponents', pull: false, put: true,  }"
                                  @add="onAdd">
                        <div class="list-group-item" v-for="(element, idx) in List" :key="idx">
                            {{ element.label }}
                        </div>
                    </vuedraggable>
                  <div class="newitem"
                       :id="item.id"
                       :data-x="item.x"
                       :data-y="item.y"
                       :class="(curEditItem && curEditItem.id == item.id) ? 'curitem' : ''"
                       :style="{ left: item.x, top: item.y, zIndex: item.zIndex, transform: item.transform }"
                       v-for="(item, idx) in componentList" :key="idx"
                       @click="handleItemClick(item, idx)">
                    <ShapeController :editItem="curEditItem" :item="item" @handleDel="handleDel(idx)">
                      <Word v-if="item.type == 1" :editItem="item" />
                    </ShapeController>
                  </div>
                </div>
            </div>
            <div class="editpannel-r">
              <PannelR :editItem="componentList[curIdx]"/>
            </div>
        </div>
    </div>
</template>

<script>
import H5EditorEdit from './H5EditorEdit.js'
export default {
    ...H5EditorEdit
}
</script>

<style lang="scss" scoped>
@import "./H5EditorEdit.scss";
.list-group-item1,.list-group-item2,.list-group-item3{
  text-align: center;
  margin-top: 16px;
}
.list-group-item1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.list-group-item2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.list-group-item3 {
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
}
</style>
