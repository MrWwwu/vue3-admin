<template>
  <div class="home">
      单选框 : <Wradio :list="radioList" @radioChange="radioChange" :defaultRadio="defaultRadio"/>
      按钮型单选框 : <WradioBut :list="radioList" @radioBtnChange="radioChange" :defaultRadio="defaultRadio"/>
      多选框 : <WcheckBox :list="radioList" :defaultCheck="defaultCheck" @checkBoxChange="checkBoxChange"/>
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
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  background: #fff;
}
</style>
