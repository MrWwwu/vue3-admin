<template>
    <div class="radioButton">
        <el-radio-group v-model="radioValues" @change="handleChange">
            <el-radio-button v-for="(item,index) in list" :key="index" :label="item.label" :disabled="item.disabled">{{item.value}}</el-radio-button>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    name:'radioButton',
    props:{
        list:Array,
        defaultRadio:String
    },
    data(){
        return {
            radioValues:this.defaultRadio?this.defaultRadio:this.list[0].label
        }
    },
    methods:{
        handleChange(val){
            this.$emit('radioBtnChange',val)
        }
    }
}
</script>
