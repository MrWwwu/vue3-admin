<template>
    <div class="manage">
        <el-container>
            <el-header>
                <Wheader @isCollapse="isShrink"/>
            </el-header>
            <el-container>
                <el-aside :class="{'isCollapse':isCollapse}">
                    <Wmenu :isCollapse='isCollapse' :list="list"/>
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
            isCollapse : false,
            list:[{
                name:'home',
                icon:'Wicon-home',
                title:'首页',
                children:[{
                    name:'404',
                    title:'组件用法',
                    children:[{
                        name:'home',
                        title:'demo',
                    },{
                        name:'demo',
                        title:'demo1',
                        children:[
                            {
                                name:'demo2',
                                title:'demo2'
                            }
                        ]
                    }]
                },{
                    name:'explain',
                    title:'首页1',
                },]
            },{
                name:'about',
                icon:'Wicon-qrcode',
                title:'关于'
            }]
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
        padding-left: 0;
        border-bottom: 1px solid #ccc;
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
