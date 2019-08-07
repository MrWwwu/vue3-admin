<template>
    <div class="menu-item">
        <el-menu :default-active="$route.name"
        class="el-menu-vertical-demo" 
        :collapse="isCollapse" router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <template v-for="(item,index) in list">
                <WsubMenu :key="index" v-if="item.list.length>0" :parent="item" />
                <el-menu-item :index="item.name" v-else :key="index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
import WsubMenu from './sub-menu-item'
export default {
    name:'menuItem',
    components:{ WsubMenu },
    props:{
        isCollapse:{
            type:Boolean,
            default:false
        },
        list:Array
    }
}
</script>
<style lang="less" scoped>
.el-menu{
    border: none;
    margin-top: 10px;
}
</style>
