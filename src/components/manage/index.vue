<template>
    <div class="manage">
        <el-container>
            <el-header>
                <Wheader @isCollapse="isShrink"/>
            </el-header>
            <el-container>
                <el-aside :class="{'isCollapse':isCollapse}">
                    <Wmenu :isCollapse='isCollapse'/>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Wheader from './header'
import Wmenu from './menu'
export default {
    name:'manage',
    components:{
        Wheader,
        Wmenu
    },
    data(){
        return {
            isCollapse : false
        }
    },
    methods:{
        isShrink(msg){
            this.isCollapse = msg
        }
    }
}
</script>
<style lang="less" scoped>
.manage{
    height: 100vh;
    overflow: scroll;
    .el-header{
        padding: 0;
    }
    .el-container{
        height: 100vh;
        .el-aside{
            height: 100%;
            width: 200px !important;
            transition: all .3s;
        }
        .isCollapse{
            width: 64px !important;
        }
        .el-main{
            height: 100%;
            background-color:#eee;
            padding: 10px;
        }
    }
}

</style>
