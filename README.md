# MSE-AI-T5
开放·智能·软件-第五组仓库

## 这是我们的成员及分工：
- 彭佳恒 52285903013 产品宣讲、调度与交付（CEO）
- 张志凡 51275903003 产品迭代记录（CKO）
- 谢思怡 51275903081 产品代码实现、测试（CTO）
- 郑舒岩 51275903054 产品代码实现、测试
- 李雨峰 51275903028 产品代码实现、测试
- 史雪涛 51275903021 产品代码实现、测试
- 王千予 51275903082 产品需求分析与功能设计 （CPO）
- 洪蔚伦 51275903038 产品需求分析与功能设计


最终的产品定义：
基于OpenDigger项目的数据分析指标，制作一个自动化生成对应开源仓库分析报告的浏览器插件

目标用户：：
在GitHub网站上的**项目管理者、核心开发者**

核心价值：
通过AI自动解读GitHub数据，降低开源项目分析门槛，解决用户"**看不懂图表、没时间分析**"的痛点。

## 项目启动流程

### 1. 环境准备
首先安装uv（Python包管理工具）：
```bash
pip install uv
```

### 2. 启动后端服务
```bash
cd flask-backend/
uv venv                          # 创建虚拟环境
source .venv/bin/activate        # 激活虚拟环境 (macOS/Linux)
# 或者 .venv\Scripts\activate   # Windows
uv pip install -r requirements.txt  # 安装依赖
```

在 `flask-backend/` 目录下创建 `.env` 文件：
```bash
ECNU_API_KEY=你的华师大API密钥
```

启动后端：
```bash
uv run python app.py
# 或者
python app.py
```
后端将在 http://localhost:5001 启动

### 3. 启动前端服务
```bash
cd frontend/
npm install      # 安装依赖
npm run dev      # 启动开发服务器
```
前端将在 http://localhost:5173 启动

### 4. 启动扩展开发
```bash
cd extension/
yarn install     # 安装依赖
yarn start       # 启动开发服务器
```

### 5. 安装浏览器扩展
1. 打开Chrome浏览器
2. 访问 `chrome://extensions/`
3. 开启"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择 `extension/build` 目录

## 使用方式
启动完成后访问GitHub仓库页面，扩展会自动注入分析功能并显示AI分析结果。