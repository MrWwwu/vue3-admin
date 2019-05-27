<template>
    <div class="Wcascader componCss">
        <span>{{title}} : </span>
        <el-cascader 
            :options="options"
            v-model="value"
            @change="handleChange">
        </el-cascader>
    </div>
</template>
<script>
export default {
    name:'Wcascader',
    props:{
        title:{
            type:String,
            default:'请选择'
        },
        options:Array,
        selectedOptions:Array
    },
    data(){
        return {
            value:this.selectedOptions
        }
    },
    methods:{
        handleChange(val){
            this.$emit('casChange',val)
        }
    }
}
</script>
<style lang="less" scoped>
.Wcascader{
    .el-cascader {
        width: 240px;
    }
}
</style>

