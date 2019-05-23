<template>
    <div class="WcheckBox">
        <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(item,index) in list" :key="index" :label="item.label" :disabled="item.disabled" @change="handleChange">{{item.value}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
export default {
    name:'WcheckBox',
    props:{
        list:Array,
        defaultCheck:Array
    },
    data(){
        return {
            checkList:this.defaultCheck
        }
    },
    methods:{
        handleChange(val){
            this.$emit('checkBoxChange',this.checkList)
        }
    }
}
</script>
