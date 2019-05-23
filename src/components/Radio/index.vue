<template>
    <div class="Radio">
        <el-radio v-for="(item,index) in list" :key="index" v-model="radio" :label="item.label" @change="handleChange">{{item.value}}</el-radio>
    </div>
</template>
<script>
export default {
    name:'Radio',
    props:{
        list:Array
    },
    data(){
        return {
            radio:this.list[0].label
        }
    },
    methods:{
        handleChange(msg){
            this.$emit('radioChange',msg)
        }
    }
}
</script>
