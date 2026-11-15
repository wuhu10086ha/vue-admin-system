<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>报表管理</span></template>
      <p class="page-desc">用于查看和管理系统中的各类报表，支持报表的生成、导出和预览。</p>
      <el-empty description="报表管理页面占位" :image-size="120" />
    </el-card>
  </div>
</template>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
