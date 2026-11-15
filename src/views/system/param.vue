<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>参数管理</span></template>
      <p class="page-desc">用于管理系统的配置参数，支持参数的动态配置和缓存刷新。</p>
      <el-table :data="paramList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="name" label="参数名称" width="180" />
        <el-table-column prop="key" label="参数键名" width="200" />
        <el-table-column prop="value" label="参数键值" width="150" />
        <el-table-column prop="desc" label="描述" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const paramList = [
  { name: '主框架版本', key: 'sys.index.version', value: 'v1.0.0', desc: '系统主框架版本号' },
  { name: '用户管理-开关', key: 'sys.user.enabled', value: 'true', desc: '是否开启用户管理功能' },
  { name: '自检脚本', key: 'sys.self.test', value: 'false', desc: '是否开启自检脚本' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
