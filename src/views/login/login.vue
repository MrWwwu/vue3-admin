<template>
  <div class="login">
    <div class="loginContent">
      <p class="loginTitle">{{isRegister?'注 册':'登 录'}}</p>
      <Winput :title="'用户名'" :placeholder="'请输入用户名'" :inputValue="userName" @inputChange="(val)=>{userName=val}"/>
      <Winput :title="'密码'" :placeholder="'请输入密码'" :inputValue="password" @inputChange="(val)=>{password=val}" :type="'password'" style="margin-top:30px;"/>
      <div style="margin-top:40px;text-align:center;" v-show="!isRegister">
        <el-button type="primary" size="small" style="margin-right:70px;" @click="register">注 册</el-button>
        <el-button type="primary" size="small" @click="login">登 录</el-button>
      </div>
      <div style="margin-top:40px;text-align:center;" v-show="isRegister">
        <el-button type="primary" size="small" style="margin-right:70px;" @click="loginBack">返 回</el-button>
        <el-button type="primary" size="small">确 定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { useLogin } from '@/api'
import axios from 'axios'
import { loginApi } from '@/api/app'
export default {
  name:'login',
  data(){
    return {
      isRegister:false,
      userName:'',
      password:''
    }
  },
  methods:{
    register(){
      this.isRegister = true;
    },
    loginBack(){
      this.isRegister = false;
    },
    async login(){
      if(this.userName === ''){
        this.$message.error('请输入用户名');
      }else if(this.password === ''){
        this.$message.error('请输入密码');
      }else{
        // let res = await useLogin({
        //   userName:this.userName,
        //   password:this.password
        // })
        // sessionStorage.setItem('token',res.token)
        // sessionStorage.setItem('menu',JSON.stringify(res.children))
        // this.$message({
        //   message: '登录成功',
        //   type: 'success'
        // });
        this.$router.push({name:'home'})
      }
      
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  background-image: url('../../assets/img/huanbao.jpg'); 
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;
  background-color: #CCCCCC;
  position: relative;
  color:#999;
  .loginContent{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 200px;
    margin: auto;
    box-shadow: #ccc 0 0 10px;
    padding:20px 80px;
    .loginTitle{
      line-height: 50px;
      font-size: 24px;
      text-align: center;
    }
  }
}
</style>

