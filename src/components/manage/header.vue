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
        
    </div>
</template>
<script>
export default {
    name:'Wheader',
    data(){
        return {
            isCollapse:false
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
        .Wicon-Gitlab{
            font-size: 24px;
            margin-right: 10px;
        }
    }
    .isCollapse{
        transform: rotate(-90deg)
    }
}
</style>
