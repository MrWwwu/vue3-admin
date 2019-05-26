<template>
    <div class="menu-item">
        <el-menu :default-active="$route.name"
        class="el-menu-vertical-demo" 
        :collapse="isCollapse" router>
            <template v-for="(item,index) in list">
                <WsubMenu :key="index" v-if="item.children" :parent="item"/>
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
