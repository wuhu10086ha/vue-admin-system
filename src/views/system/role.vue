<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>角色管理</span></template>
      <p class="page-desc">用于管理系统中的角色信息，包括角色的创建、编辑、删除及权限分配。</p>
      <el-table :data="roleList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="name" label="角色名称" width="180" />
        <el-table-column prop="code" label="角色编码" width="180" />
        <el-table-column prop="desc" label="描述" />
        <el-table-column prop="createTime" label="创建时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const roleList = [
  { name: '超级管理员', code: 'admin', desc: '拥有系统全部权限', createTime: '2024-01-01 10:00:00' },
  { name: '普通用户', code: 'user', desc: '仅拥有基本查看权限', createTime: '2024-01-01 10:05:00' },
  { name: '部门主管', code: 'leader', desc: '管理部门内用户和数据', createTime: '2024-01-02 09:00:00' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
