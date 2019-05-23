<template>
  <div class="home">
      <Wradio :list="radioList" @radioChange="radioChange"/>
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
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  background: #fff;
}
</style>
