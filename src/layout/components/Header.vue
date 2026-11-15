<template>
  <div class="header-wrapper">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="parentTitle">{{ parentTitle }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentTitle && currentTitle !== '首页'">{{ currentTitle }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <span class="user-dropdown">
          <el-icon><UserFilled /></el-icon>
          {{ userStore.username }}
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const currentTitle = computed(() => route.meta.title || '')
const parentTitle = computed(() => route.meta.parent || '')

function handleCommand(command) {
  if (command === 'logout') {
    ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      userStore.logout()
      router.push('/login')
    }).catch(() => {})
  }
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.user-dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #333;
}
</style>
