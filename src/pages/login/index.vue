<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    style="max-width: 600px"
    class="demo-ruleForm"
  >
    <el-form-item prop="adminname">
      <el-input
        v-model="loginForm.adminname"
        placeholder="用户名"
        :prefix-icon="UserFilled"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="密码"
        :prefix-icon="Lock"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
// 引入图标组件
import { UserFilled, Lock } from "@element-plus/icons-vue";

import { login } from "@/api";
const loginForm = reactive({
  adminname: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const res = await login(loginForm);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};  


</script>

<style scoped></style>
