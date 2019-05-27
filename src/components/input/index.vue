<template>
    <div class="Winput componCss">
        <span>{{title}} : </span>
        <template>
            <el-input v-model="value" :placeholder="placeholder" :disabled="disabled" clearable @change="handleChange" v-if="type==='text'"/>
            <el-input-number v-model="value1" @change="handleChange" :disabled="disabled" :min="min" :max="max" v-else-if="type==='number'"/>
        </template>
    </div>
</template>
<script>
export default {
    name:'Winput',
    props:{
        type:{
            type:String,
            default:'text'
        },
        title:{
            type:String,
            default:'搜索条件'
        },
        inputValue:String,
        numValue:Number,
        min:{
            type:Number,
            default:1
        },
        max:{
            type:Number,
            default:999999999999
        },
        placeholder:{
            type:String,
            default:'请输入内容'
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            value:this.inputValue,
            value1:this.numValue
        }
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
    .el-input{
        width: 240px;
    }
}
</style>
