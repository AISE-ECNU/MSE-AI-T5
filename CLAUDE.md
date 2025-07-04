# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

MSE-AI-T5 是一个用于GitHub仓库AI智能分析的多组件系统，包含：

1. **浏览器扩展** (`extension/`) - 在GitHub页面注入分析功能的Chrome扩展
2. **前端应用** (`frontend/`) - 基于React的可视化仪表板
3. **Flask后端** (`flask-backend/`) - 与大模型交互的Python API服务器

## 开发命令

### 扩展开发
```bash
cd extension/
yarn install
yarn start    # 开发服务器，支持热重载
yarn build    # 生产构建
```

### 前端开发
```bash
cd frontend/
npm install
npm run dev     # Vite开发服务器 (localhost:5173)
npm run build   # 生产构建
npm run lint    # ESLint代码检查
```

### 后端开发
```bash
cd flask-backend/
pip install -r requirements.txt
python app.py   # 启动Flask服务器，端口5001
```

## 架构说明

### 扩展架构
- **功能系统**: 通过 `feature-manager.ts` 进行模块化功能注册
- **内容脚本**: 向GitHub页面注入分析UI (`ContentScripts/features/analysis/`)
- **后台服务**: 处理标签页URL变化和消息传递
- **API集成**: 获取OpenDigger指标数据并显示分析弹窗
- **平台检测**: 支持GitHub和Gitee仓库

### 数据流程
1. 扩展检测GitHub仓库页面并提取仓库元数据
2. 调用OpenDigger API获取仓库指标（活跃度、OpenRank、关注度等）
3. 将聚合数据发送到Flask后端进行AI分析
4. 在GitHub页面的原生弹窗中显示分析结果

### 核心组件
- **NativePopover**: GitHub风格的提示框组件，用于显示分析结果
- **OpenDigger集成**: 通过 `/api/repo.ts` 中的函数获取指标数据
- **AI分析**: Flask后端调用大模型API（华师大平台）生成仓库洞察
- **功能注册**: 使用 `features.add()` 配合页面检测条件

## 配置说明

### 环境变量
- `ECNU_API_KEY`: Flask后端大模型集成必需

### 扩展清单
- 使用Manifest V3，内容脚本在 `<all_urls>` 上运行
- 需要 `storage` 和 `identity` 权限
- 使用Webpack构建系统，支持TypeScript和React

## 测试和代码检查

前端配置了ESLint。扩展和后端组件目前未设置测试框架。

## 开发注意事项

- 扩展使用jQuery进行DOM操作，同时使用React组件
- 功能检测系统防止页面导航时重复加载
- 支持GitHub的SPA架构的Turbo导航
- 为前后端通信配置了CORS（localhost:5173 ↔ localhost:5001）