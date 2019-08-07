<template>
    <div class="Winput componCss">
        <span>{{title}} : </span>
        <template>
            <el-input-number v-model.trim="value1" @change="handleChange" :disabled="disabled" :min="min" :max="max" v-if="type==='number'" style="width:240px;"/>
            <el-input v-model.trim="value" :placeholder="placeholder" :disabled="disabled" clearable @change="handleChange" :type="type" v-else style="width:240px;"/>
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
        },
        width:{
            type:String,
            default:'240px'
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
