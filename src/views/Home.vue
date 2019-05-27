<template>
  <div class="home">
      <el-row>
        <el-col :span="12">单选框 : <Wradio :list="radioList" @radioChange="radioChange" :defaultRadio="defaultRadio"/></el-col>
        <el-col :span="12">按钮型单选框 : <WradioBut :list="radioList" @radioBtnChange="radioChange" :defaultRadio="defaultRadio"/></el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col :span="12">多选框 : <WcheckBox :list="radioList" :defaultCheck="defaultCheck" @checkBoxChange="checkBoxChange"/></el-col>
        <el-col :span="12">按钮型多选框 : <WcheckBoxBtn :list="radioList" :defaultCheck="defaultCheck" @chackBoxBtnChange="checkBoxChange"/></el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col :span="12">文本输入框 : <Winput :inputValue="inputValue" :placeholder="inputPlaceholder" @inputChange="inputChange" :type="'text'"/></el-col>
        <el-col :span="12">数字输入框 : <Winput :numValue="numValue" :placeholder="inputPlaceholder" @inputChange="inputChange" :type="'number'"/></el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col :span="12">选择框 : <Wselect :selectSet="selectSet" @selectChange="selectChange"/></el-col>
        <el-col :span="12">级联选择器 : <Wcascader :options="casOptions" :selectedOptions="selectedOptions" @casChange="casChange" :title="'请选择'"/></el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col :span="12">单个日期选择器 : <WdatePicker :date="date" @dateChange="dateChange"/></el-col>
        <el-col :span="12">双日期选择 : <WdoubleDate /></el-col>
      </el-row>
      
  </div>
</template>
<script>
import mixins from '../mixins'
export default {
  mixins:[mixins],
  name: 'home',
  methods:{
    radioChange(val){
      console.log(val)
    },
    checkBoxChange(val){
      console.log(val)
    },
    inputChange(val){
      console.log(val)
    },
    selectChange(val){
      console.log(val)
    },
    casChange(val){
      console.log(val)
    },
    dateChange(val){
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  background: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
