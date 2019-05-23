<template>
    <div class="Winput">
        <span>{{inputSet.title?inputSet.title:'搜索条件'}} : </span><el-input v-model="inputSet.value" :placeholder="inputSet.placeholder" :disabled="inputSet.disabled" clearable @change="handleChange"/>
    </div>
</template>
<script>
export default {
    name:'Winput',
    props:{
        inputSet:Object 
    },
    methods:{
        handleChange(val){
            this.$emit('inputChange',val)
        }
    }
}
</script>
<style lang="less" scoped>
.Winput{
    width:320px;
    display: flex;
    span{
        display: inline-block;
        width: 80px;
        line-height: 38px;
    }
    .el-input{
        width: 240px;
        height: 38px;
    }
}
</style>
