<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>岗位管理</span></template>
      <p class="page-desc">用于管理系统中的岗位信息，支持岗位的增删改查操作。</p>
      <el-table :data="postList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="name" label="岗位名称" width="180" />
        <el-table-column prop="code" label="岗位编码" width="180" />
        <el-table-column prop="sort" label="排序" width="100" align="center" />
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
const postList = [
  { name: '董事长', code: 'chairman', sort: 1, status: '正常', createTime: '2024-01-01 10:00:00' },
  { name: '项目经理', code: 'pm', sort: 2, status: '正常', createTime: '2024-01-01 10:05:00' },
  { name: '开发工程师', code: 'dev', sort: 3, status: '正常', createTime: '2024-01-01 10:10:00' },
  { name: '测试工程师', code: 'qa', sort: 4, status: '正常', createTime: '2024-01-01 10:15:00' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
