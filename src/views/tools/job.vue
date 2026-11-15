<template>
  <div class="page-container">
    <el-card shadow="never">
      <template #header><span>定时任务</span></template>
      <p class="page-desc">用于管理系统的定时任务，支持任务的创建、启动、停止及执行日志查看。</p>
      <el-table :data="jobList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="name" label="任务名称" width="180" />
        <el-table-column prop="cron" label="Cron表达式" width="160" />
        <el-table-column prop="target" label="调用目标" />
        <el-table-column prop="status" label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === '运行中' ? 'success' : 'info'">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="{ row }">
            <el-button type="primary" link>{{ row.status === '运行中' ? '暂停' : '启动' }}</el-button>
            <el-button type="info" link>日志</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
const jobList = [
  { name: '系统状态检查', cron: '0 0 * * * ?', target: 'ryTask.checkSystemStatus()', status: '运行中' },
  { name: '数据备份', cron: '0 30 2 * * ?', target: 'ryTask.backupData()', status: '运行中' },
  { name: '日志清理', cron: '0 0 3 ? * MON', target: 'ryTask.cleanLog()', status: '已暂停' },
  { name: '缓存刷新', cron: '0 0/5 * * * ?', target: 'ryTask.refreshCache()', status: '运行中' }
]
</script>

<style scoped>
.page-desc {
  color: #909399;
  margin-bottom: 16px;
}
</style>
