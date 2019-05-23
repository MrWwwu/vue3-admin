<template>
    <div class="Radio">
        <el-radio v-for="(item,index) in list" :key="index" :disabled="item.disabled" v-model="radio" :label="item.label" @change="handleChange">{{item.value}}</el-radio>
    </div>
</template>
<script>
export default {
    name:'Radio',
    props:{
        list:Array,
        defaultRadio:String
    },
    data(){
        return {
            radio:this.defaultRadio?this.defaultRadio:this.list[0].label
        }
    },
    methods:{
        handleChange(val){
            this.$emit('radioChange',val)
        }
    }
}
</script>
