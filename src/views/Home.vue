<template>
  <div class="home">
      单选框 : <Wradio :list="radioList" @radioChange="radioChange" :defaultRadio="defaultRadio"/>
      按钮型单选框 : <WradioBut :list="radioList" @radioBtnChange="radioChange" :defaultRadio="defaultRadio"/>
      多选框 : <WcheckBox :list="radioList" :defaultCheck="defaultCheck" @checkBoxChange="checkBoxChange"/>
      按钮型多选框 : <WcheckBoxBtn :list="radioList" :defaultCheck="defaultCheck" @chackBoxBtnChange="checkBoxChange"/>
      输入框 : <Winput :inputSet="inputSet" @inputChange="inputChange"/>
      单选框 : <Wselect :selectSet="selectSet" @selectChange="selectChange"/>
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
      console.log(this.inputSet.value)
    },
    selectChange(val){
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  background: #fff;
}
</style>
