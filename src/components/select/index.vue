<template>
    <div class="Wselect componCss">
        <span>{{selectSet.title?selectSet.title:'查询条件'}} : </span>
        <el-select v-model="selectSet.value" filterable :placeholder="selectSet.placeholder?selectSet.placeholder:'请选择'" clearable @change="handelChange" :disabled="selectSet.disabled" :multiple="selectSet.multiple">
            <el-option
            v-for="(item,index) in selectSet.list"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name:'Wselect',
    props:{
        selectSet:Object
    },
    methods:{
        handelChange(val){
            this.$emit('selectChange',val)
        }
    }
}
</script>
<style lang="less" scoped>
.Wselect{
    .el-select {
        width: 240px;
        height: 38px;
        line-height: 38px;
    }
}
</style>
