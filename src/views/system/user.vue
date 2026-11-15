<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span>用户管理</span>
          <el-button type="primary" :icon="Plus">新增用户</el-button>
        </div>
      </template>
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="username" label="用户名" width="120" />
        <el-table-column prop="nickname" label="昵称" width="120" />
        <el-table-column prop="role" label="角色" width="120" />
        <el-table-column prop="dept" label="部门" width="140" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="status" label="状态" width="80" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === '正常' ? 'success' : 'danger'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="操作" align="center">
          <template #default>
            <el-button type="primary" link>编辑</el-button>
            <el-button type="danger" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'

const userList = [
  { username: 'admin', nickname: '管理员', role: '超级管理员', dept: '研发部', email: 'admin@mashangjun.com', status: '正常', createTime: '2024-01-01 10:00:00' },
  { username: 'zhangsan', nickname: '张三', role: '普通用户', dept: '研发部', email: 'zhangsan@mashangjun.com', status: '正常', createTime: '2024-01-05 14:30:00' },
  { username: 'lisi', nickname: '李四', role: '普通用户', dept: '产品部', email: 'lisi@mashangjun.com', status: '正常', createTime: '2024-01-10 09:15:00' },
  { username: 'wangwu', nickname: '王五', role: '普通用户', dept: '测试部', email: 'wangwu@mashangjun.com', status: '禁用', createTime: '2024-01-15 16:45:00' },
  { username: 'zhaoliu', nickname: '赵六', role: '部门主管', dept: '运营部', email: 'zhaoliu@mashangjun.com', status: '正常', createTime: '2024-02-01 11:20:00' }
]
</script>

<style scoped>
.page-container {
  width: 100%;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
