<template>
  <div class="sidebar-wrapper">
    <div class="logo">
      <span>码上俊管理系统</span>
    </div>
    <el-menu
      :default-active="activeMenu"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      router
    >
      <el-menu-item index="/home">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="system">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/user">用户管理</el-menu-item>
        <el-menu-item index="/system/role">角色管理</el-menu-item>
        <el-menu-item index="/system/menu">菜单管理</el-menu-item>
        <el-menu-item index="/system/dept">部门管理</el-menu-item>
        <el-menu-item index="/system/post">岗位管理</el-menu-item>
        <el-menu-item index="/system/dict">字典管理</el-menu-item>
        <el-menu-item index="/system/param">参数管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="tools">
        <template #title>
          <el-icon><Tools /></el-icon>
          <span>系统工具</span>
        </template>
        <el-menu-item index="/tools/report">报表管理</el-menu-item>
        <el-menu-item index="/tools/log">日志管理</el-menu-item>
        <el-menu-item index="/tools/job">定时任务</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.sidebar-wrapper {
  height: 100%;
}
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #2b3a4d;
  border-bottom: 1px solid #1f2d3d;
}
</style>
