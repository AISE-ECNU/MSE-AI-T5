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


### 最终的产品定义：
“Rate”，是一款用于GitHub平台的智能数据洞察插件，基于独创的四大核心洞察指标，为开发者提供深度项目数据分析与智能筛选服务。
我们不仅精准定位高价值代码仓库入口，更通过AI大模型解读代码趋势、协作模式和项目潜力，帮助您快速发现优质项目，优化开发决策效率。

如下图所示，我们有：
**极简的用户入口**、**四大核心洞察指标**、**近期火热🔥推荐标识**、**洞察指标发展趋势与总评分**等等，欢迎探索

<img width="648" height="571" alt="image" src="https://github.com/user-attachments/assets/7004b460-dbf9-46b3-bdb0-eceb9bf5475b" />

### 四大核心指标解释：

**OpenRank:** https://open-digger.cn/docs/user-docs/metrics/openrank

**贡献活跃度**：
<img width="698" height="248" alt="image" src="https://github.com/user-attachments/assets/5c8e186b-4197-4e8c-9adc-4efd0689a36e" />




**用户欢迎度** = 2 * Fork数 +Star数

**支持响应度** = <img width="253" height="31" alt="image" src="https://github.com/user-attachments/assets/8a118ed9-58db-4ae0-ab02-7d5413bc8b21" />

其中：
- Issues New：周期内创建的新问题数量。
- R：问题响应时间（从问题创建到首次响应的时间）。
- D：问题平均解决持续时间（从问题创建到关闭的时间）。
- Issue Age：周期末开放问题的平均年龄。
- k：响应时间影响放大常数
- ε：防止除以零
- **关闭率（Closure Rate）**：($$\frac{\text{Issues Closed}}{\text{Issues New} + \epsilon}$$) 表示团队关闭问题相对于新问题的能力。高关闭率表明团队能够有效管理问题积压。
- **时间惩罚因子**：($$\exp\left( - \frac{D + \text{Issue Age}}{\text{D}} \right)$$) 使用指数衰减来惩罚较长的响应时间、解决时间和开放问题年龄。时间越长，分数下降越快。
- **响应时间惩罚因子**:($$-k\times R$$)用于表述问题响应时间，同时设计了一个常数k用于放大或者缩小响应时间对于项目issue处理时间的响应作用程度。
- **公式意义**：关闭率越高，反应了一个团队在一定时间内对于新issue的解决能力，而对于时间参数的结合处理，反应的则是对于特定问题的响应能力。响应越快，时间惩罚项越小，IPI指数就越大


### 目标用户：
在GitHub网站上的**项目管理者、核心开发者**

### 核心价值：
通过AI自动解读GitHub数据，降低开源项目分析门槛，解决用户"**看不懂图表、没时间分析**"的痛点。

## 项目验收相关：

**这是项目难点：https://github.com/AISE-ECNU/MSE-AI-T5/blob/main/%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9.md**

**这是项目演示视频：https://github.com/AISE-ECNU/MSE-AI-T5/blob/main/%E7%AC%AC%E4%BA%94%E7%BB%84_%E9%A1%B9%E7%9B%AE%E6%BC%94%E7%A4%BA%E8%A7%86%E9%A2%91.mp4**

**以下是项目部署启动流程：**

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
