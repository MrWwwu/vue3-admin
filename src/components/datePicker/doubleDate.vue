<template>
    <div class="WdoubleDate componCss">
        <span>{{title}} : </span>
        <el-date-picker
        v-model="value"
        type="daterange"
        :disabled='disabled'
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="handleChange">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:'WdoubleDate',
    props:{
        doubleDate:String,
        disabled:Boolean,
        title:{
            type:String,
            default:'选择日期'
        }
    },
    data(){
        return {
            value:this.doubleDate
        }
    },
    methods:{
        handleChange(val){
            console.log(val)
        }
    }
}
</script>
<style lang="less" scoped>
.WdoubleDate{
    .el-date-editor--daterange.el-input__inner{
        width: 240px;
    }
}
</style>
