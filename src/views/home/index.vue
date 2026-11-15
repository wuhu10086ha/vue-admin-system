<template>
  <div class="home-container">
    <el-card class="welcome-card" shadow="hover">
      <div class="welcome-content">
        <h1 class="welcome-title">码上俊后台管理系统</h1>
        <p class="welcome-subtitle">欢迎回来，{{ userStore.username }}！</p>
        <div class="welcome-icons">
          <el-icon :size="60" color="#409EFF"><HomeFilled /></el-icon>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
}
.welcome-card {
  width: 600px;
}
.welcome-content {
  text-align: center;
  padding: 40px 0;
}
.welcome-title {
  font-size: 36px;
  color: #303133;
  margin-bottom: 16px;
}
.welcome-subtitle {
  font-size: 18px;
  color: #909399;
  margin-bottom: 30px;
}
.welcome-icons {
  margin-top: 20px;
}
</style>
