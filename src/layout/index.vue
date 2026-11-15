<template>
  <el-container class="layout-container">
    <el-aside width="220px" class="sidebar">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<style scoped>
.layout-container {
  height: 100vh;
}
.sidebar {
  background-color: #304156;
  overflow-y: auto;
}
.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.main-content {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>
