<template>
    <el-submenu :index="parent.name">
        <template slot="title">
            <i :class="parent.icon"></i>
            <span slot="title">{{parent.title}}</span>
        </template>
        <template v-for="(item,index) in parent.children">
            <WsubMenu :key="index" v-if="item.children" :parent="item"/>
            <el-menu-item :index="item.name" v-else :key="index"> {{item.title}} </el-menu-item>
        </template>
    </el-submenu>
</template>
<script>
export default {
    name:'WsubMenu',
    props:{
        parent:Object
    }
}
</script>
