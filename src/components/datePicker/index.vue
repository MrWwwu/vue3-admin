<template>
    <div class="WdatePicker componCss">
        <span>{{title}} : </span>
        <el-date-picker
        v-model="value"
        type="date"
        :placeholder="placeholder"
        :disabled='disabled'
        clearable
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        @change="handleChange">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:'WdatePicker',
    props:{
        date:String,
        placeholder:{
            type:String,
            default:'选择日期'
        },
        disabled:Boolean,
        title:{
            type:String,
            default:'选择日期'
        }
    },
    data(){
        return {
            value:this.date
        }
    },
    methods:{
        handleChange(val){
            this.$emit('dateChange',val)
        }
    }
}
</script>