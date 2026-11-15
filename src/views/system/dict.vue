<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>字典管理</span></template>
      <p class="page-desc">用于管理系统数据字典，维护常用的下拉选项数据，如性别、状态等。</p>
      <el-table :data="dictList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="name" label="字典名称" width="180" />
        <el-table-column prop="type" label="字典类型" width="180" />
        <el-table-column prop="desc" label="描述" />
        <el-table-column prop="createTime" label="创建时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const dictList = [
  { name: '用户性别', type: 'sys_user_sex', desc: '用户性别字典', createTime: '2024-01-01 10:00:00' },
  { name: '菜单状态', type: 'sys_menu_status', desc: '菜单状态字典', createTime: '2024-01-01 10:05:00' },
  { name: '是否标志', type: 'sys_yes_no', desc: '是否标志字典', createTime: '2024-01-01 10:10:00' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
