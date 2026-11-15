# 码上俊后台管理系统

> 基于 Vue 3 + Vite + Element Plus 的后台管理系统

## 项目简介

码上俊后台管理系统是一个基于 Vue 3 + Vite + Element Plus 的前端后台管理系统，包含登录页面和主页面布局，支持多级菜单导航。

## 技术栈

| 技术 | 说明 |
|------|------|
| Vue 3 | 前端框架（Composition API） |
| Vite | 构建工具 |
| Element Plus | UI 组件库 |
| Vue Router | 路由管理 |
| Pinia | 状态管理 |

## 功能特性

### 登录系统
- 默认用户名：admin
- 默认密码：admin123
- 表单验证
- 登录状态 localStorage 持久化

### 主页面布局
- 顶部导航栏（含用户名和退出登录按钮）
- 左侧菜单栏
- 右侧内容区域

### 菜单结构

| 一级菜单 | 二级菜单 |
|---------|---------|
| 首页 | - |
| 系统管理 | 用户管理、角色管理、菜单管理、部门管理、岗位管理、字典管理、参数管理 |
| 系统工具 | 报表管理、日志管理、定时任务 |

## 项目结构

```
vue-admin-system/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.js
    ├── App.vue
    ├── router/index.js
    ├── store/user.js
    ├── layout/
    │   ├── index.vue
    │   └── components/
    │       ├── Sidebar.vue
    │       └── Header.vue
    └── views/
        ├── login/index.vue
        ├── home/index.vue
        ├── system/
        │   ├── user.vue
        │   ├── role.vue
        │   ├── menu.vue
        │   ├── dept.vue
        │   ├── post.vue
        │   ├── dict.vue
        │   └── param.vue
        └── tools/
            ├── report.vue
            ├── log.vue
            └── job.vue
```

## 快速开始

```bash
npm install
npm run dev
```

## 访问地址

打开浏览器访问 http://localhost:3000，使用 admin / admin123 登录。

## 页面说明

### 首页
展示「码上俊后台管理系统」欢迎信息，居中大字体显示。

### 系统管理
- **用户管理**：展示用户列表表格（含 mock 数据）
- **角色管理**：角色信息管理
- **菜单管理**：系统菜单配置管理
- **部门管理**：组织部门管理
- **岗位管理**：岗位信息管理
- **字典管理**：数据字典管理
- **参数管理**：系统参数配置

### 系统工具
- **报表管理**：报表配置与查看
- **日志管理**：系统日志查看
- **定时任务**：定时任务管理