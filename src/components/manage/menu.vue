<template>
    <div class="menu">
        <slot></slot>
        <menuItem :isCollapse="isCollapse" :list="list"/>
        <div></div>
    </div>
</template>
<script>
import menuItem from './menu-item'
export default {
    name:'Wmenu',
    components:{
        menuItem
    },
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
.menu{
    height:100%;
    overflow: scroll;
}
</style>
