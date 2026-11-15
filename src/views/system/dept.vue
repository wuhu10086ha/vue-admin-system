<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>部门管理</span></template>
      <p class="page-desc">用于管理系统的组织架构，支持树形结构的部门层级管理。</p>
      <el-table :data="deptList" border style="width: 100%" row-key="name">
        <el-table-column prop="name" label="部门名称" width="200" />
        <el-table-column prop="leader" label="负责人" width="120" />
        <el-table-column prop="count" label="人数" width="100" align="center" />
        <el-table-column prop="status" label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag type="success">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const deptList = [
  { name: '研发部', leader: '张三', count: 20, status: '正常', createTime: '2024-01-01 10:00:00' },
  { name: '产品部', leader: '李四', count: 8, status: '正常', createTime: '2024-01-01 10:05:00' },
  { name: '测试部', leader: '王五', count: 12, status: '正常', createTime: '2024-01-01 10:10:00' },
  { name: '运营部', leader: '赵六', count: 6, status: '正常', createTime: '2024-01-01 10:15:00' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
