<template>
    <div class="Wheader">
        <slot>
            <div class="Wlogo">
                <span class="Wicon-Gitlab"></span>
                <span>vue-admin</span>
            </div>
        </slot>
        <div class="Wicon" :class="{'isCollapse':isCollapse}" @click="shrink">
            <i class="Wicon-menu"></i>
        </div>
        <div class="operate">
            <el-button v-popover:popover type="text" style="color:#fff">
                操 作
                <i class="Wicon-edit-square"></i>
            </el-button>
            <el-popover
                ref="popover"
                trigger="hover"
                v-model="visible">
                <p>请选择您要进行的操作</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="samll" type="text">修改密码</el-button>
                    <el-button type="primary" size="small">退出登录</el-button>
                </div>
            </el-popover>
        </div>
    </div>
</template>
<script>
export default {
    name:'Wheader',
    data(){
        return {
            isCollapse:false,
            visible:false
        }
    },
    methods:{
        shrink(){
            this.isCollapse = !this.isCollapse;
            this.$emit('isCollapse',this.isCollapse);
        }
    }
}
</script>
<style lang="less" scoped>
.Wheader{
    height: 100%;
    display: flex;
    background-color: #4682B4;
    position: relative;
    .Wicon{
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
    }
    .Wlogo{
        width: 200px;
        line-height: 60px;
        text-align: center;
        font-size: 22px;
        color: #333;
        font-weight: bold;
        background-color: #4F94CD;
        .Wicon-Gitlab{
            font-size: 24px;
            margin-right: 10px;
        }
    }
    .isCollapse{
        transform: rotate(-90deg)
    }
    .operate{
        position: absolute;
        right: 100px;
        top: 10px;
    }
}
</style>
