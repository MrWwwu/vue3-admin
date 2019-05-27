<template>
  <div class="home">
      单选框 : <Wradio :list="radioList" @radioChange="radioChange" :defaultRadio="defaultRadio"/>
      <hr>
      按钮型单选框 : <WradioBut :list="radioList" @radioBtnChange="radioChange" :defaultRadio="defaultRadio"/>
      <hr>
      多选框 : <WcheckBox :list="radioList" :defaultCheck="defaultCheck" @checkBoxChange="checkBoxChange"/>
      <hr>
      按钮型多选框 : <WcheckBoxBtn :list="radioList" :defaultCheck="defaultCheck" @chackBoxBtnChange="checkBoxChange"/>
      <hr>
      文本输入框 : <Winput :inputValue="inputValue" :placeholder="inputPlaceholder" @inputChange="inputChange" :type="'text'"/>
      <hr>
      数字输入框 : <Winput :numValue="numValue" :placeholder="inputPlaceholder" @inputChange="inputChange" :type="'number'"/>
      <hr>
      选择框 : <Wselect :selectSet="selectSet" @selectChange="selectChange"/>
      <hr>
      级联选择器 : <Wcascader :options="casOptions" :selectedOptions="selectedOptions" @casChange="casChange" :title="'请选择'"/>
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
