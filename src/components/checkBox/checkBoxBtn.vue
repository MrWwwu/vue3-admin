<template>
    <div class="checkBoxBtn">
        <el-checkbox-group v-model="checkBoxGroup" @change="handleChange">
            <el-checkbox-button v-for="(item,index) in list" :label="item.label" :key="index" :disabled="item.disabled">{{item.value}}</el-checkbox-button>
        </el-checkbox-group>
    </div>
</template>
<script>
export default {
    name:'checkBoxBtn',
    props:{
        list:Array,
        defaultCheck:Array
    },
    data(){
        return {
            checkBoxGroup:this.defaultCheck
        }
    },
    methods:{
        handleChange(){
            this.$emit('chackBoxBtnChange',this.checkBoxGroup)
        }
    }
}
</script>
