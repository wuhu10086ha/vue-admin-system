<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>日志管理</span></template>
      <p class="page-desc">用于查看系统操作日志和登录日志，支持日志检索、导出和清理。</p>
      <el-table :data="logList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="type" label="日志类型" width="120">
          <template #default="{ row }">
            <el-tag :type="row.type === '登录' ? 'success' : 'warning'">{{ row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="user" label="操作用户" width="120" />
        <el-table-column prop="content" label="操作内容" />
        <el-table-column prop="ip" label="IP地址" width="140" />
        <el-table-column prop="time" label="操作时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const logList = [
  { type: '登录', user: 'admin', content: '用户登录系统', ip: '192.168.1.100', time: '2024-03-01 08:30:00' },
  { type: '操作', user: 'admin', content: '新增用户: zhangsan', ip: '192.168.1.100', time: '2024-03-01 09:15:00' },
  { type: '操作', user: 'admin', content: '修改角色权限', ip: '192.168.1.100', time: '2024-03-01 10:20:00' },
  { type: '登录', user: 'zhangsan', content: '用户登录系统', ip: '192.168.1.101', time: '2024-03-01 14:00:00' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
