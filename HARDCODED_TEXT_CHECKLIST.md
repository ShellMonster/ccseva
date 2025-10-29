# CCSeva 项目硬编码英文文本详细清单

## 文件位置与具体内容

### 📄 Dashboard.tsx

#### 状态相关文本（第266-276行）
```javascript
// 行266-269：工具提示中的状态标签
'🔴 Critical Usage'          // 严重使用
'🟡 Warning Level'           // 警告级别
'🟢 Safe Usage'              // 安全使用
```

#### 状态说明（第271-276行）
```javascript
'Over 90% of daily limit used'        // 超过每日限额的90%
'70-90% of daily limit used'          // 每日限额的70-90%
'Less than 70% of daily limit used'   // 每日限额低于70%
```

#### 关键指标标签
| 行号 | 文本 | 使用场景 |
|------|------|---------|
| 124 | `of` | "tokens of limit" |
| 324 | `Current Plan` | 当前计划标题 |
| 330 | `Daily Limit` | 每日限额标签 |
| 373 | `Tokens/Hour` | 燃烧率单位 |
| 390 | `Depletion Time` | 耗尽时间标签 |
| 400 | `No active session` | 无活跃会话提示 |
| 414-417 | `High Usage` / `Moderate Usage` / `Normal Usage` | 使用量状态 |
| 443 | `Today` | 今天的标题 |
| 444 | `Usage Summary` | 使用总结描述 |
| 450 | `Tokens` | Tokens标签 |
| 456 | `Cost` | 成本标签 |
| 491 | `This Week` | 本周标题 |
| 492 | `7-Day Summary` | 7日总结描述 |
| 498 | `Total Cost` | 总成本标签 |
| 504 | `Total Tokens` | 总Tokens标签 |
| 510 | `Avg Daily` | 平均每日标签 |
| 599 | `No model usage data available` | 无数据提示 |

#### 工具提示内容
| 行号 | 文本 | 位置 |
|------|------|------|
| 319 | `Your detected Claude plan based on daily token limit: {count} tokens/day` | 计划卡片工具提示 |
| 377-378 | `Current burn rate - how fast you're consuming your daily token allowance` | 燃烧率工具提示 |
| 395 | `Estimated time until your daily token limit is reached at current usage rate` | 耗尽时间工具提示 |

---

### 📄 TerminalView.tsx

| 行号 | 文本 | 类型 | 说明 |
|------|------|------|------|
| 40 | `No reset info` | 说明文本 | 无重置信息时显示 |
| 256 | `ccmonitor@terminal` | 命令行提示符 | 终端风格的用户标识 |

**注意**：大部分TerminalView文本都已通过`t()`翻译函数处理。

---

### 📄 LiveMonitoring.tsx

#### 标题和说明（第209-210行）
```javascript
'Live Monitoring'                        // 实时监控
'Real-time terminal-style usage tracking' // 实时终端风格的使用追踪
```

#### 状态指示器（第219行）
```javascript
isLiveMode ? 'live' : 'paused'  // 直播/暂停状态
```

#### 核心标签
| 行号 | 文本 | 上下文 |
|------|------|--------|
| 241 | `Token Usage` (title属性) | 状态卡片标题 |
| 250 | `Time Progress` (title属性) | 时间进度卡片标题 |
| 255 | `until reset` | 重置倒计时后缀 |
| 266 | `Live Feed` | 日志面板标题 |
| 275 | `Last Update:` | 最后更新标签 |
| 283 | `ccmonitor@live` | 终端提示符 |
| 293 | `Waiting for events...` | 空日志占位符 |
| 314 | `Current Session` | 会话信息卡片标题 |
| 342 | `Trend` | 趋势标签 |
| 352 | `Confidence` | 置信度标签 |
| 369 | `Force Refresh` | 按钮文本 |
| 378 | `Checkpoint` | 按钮文本 |
| 387 | `Clear Logs` | 按钮文本 |

**已翻译项**（使用t()）:
- 第322: `liveMonitoring.tokensPerHour`
- 第330: `liveMonitoring.currentPlan`
- 第331: `liveMonitoring.autoDetected`

---

### 📄 Analytics.tsx

#### 图表类型标签（第107-115行）
```javascript
'area'    // 区域图
'line'    // 折线图
'bar'     // 柱状图
```

#### 空状态文本
| 行号 | 文本 | 使用场景 |
|------|------|---------|
| 544 | `No data available` | 图表无数据时 |
| 743 | (通过t()翻译) | 模型分布无数据时 |

---

### 📄 SettingsPanel.tsx

| 行号 | 文本 | 说明 |
|------|------|------|
| 198 | `Current detected plan:` | 当前检测到的计划标签 |

**其他项已通过i18n翻译**。

---

### 📄 LoadingScreen.tsx

| 行号 | 文本 | 类型 |
|------|------|------|
| 17 | `CC` | Logo文本 |
| 42 | `CCSeva` | 应用名称 |

---

### 📄 App.tsx

这个文件中大多数用户界面文本都已通过`t()`函数翻译，包括错误消息、按钮标签等。

---

## 统计总结

### 按优先级分类

**🔴 高优先级（17项）** - 影响用户体验的核心文本
- Dashboard状态标签和说明 (12项)
- LiveMonitoring标题和核心功能 (5项)

**🟡 中优先级（27项）** - 界面标签和提示
- Dashboard指标标签 (13项)
- TerminalView和LiveMonitoring文本 (9项)
- Analytics图表类型 (3项)
- SettingsPanel (1项)
- LoadingScreen (1项)

**🟢 低优先级（10项）** - 辅助内容
- 工具提示和详细说明
- 命令行符号和符号
- 应用名称和Logo文本

### 按文件分类

| 文件 | 硬编码数 | 已翻译数 | 需翻译数 |
|------|---------|---------|---------|
| Dashboard.tsx | 28 | 4 | 24 |
| TerminalView.tsx | 2 | 9+ | 2 |
| LiveMonitoring.tsx | 13 | 3 | 13 |
| Analytics.tsx | 3 | 多数 | 3 |
| SettingsPanel.tsx | 1 | 多数 | 1 |
| LoadingScreen.tsx | 2 | 1 | 2 |
| App.tsx | 0 | 全部 | 0 |
| **合计** | **49** | **20+** | **45** |

---

## 翻译建议

### 处理顺序
1. **第一阶段**：Dashboard.tsx - 状态和关键标签
2. **第二阶段**：LiveMonitoring.tsx - 实时监控相关
3. **第三阶段**：其他组件的零散文本
4. **第四阶段**：工具提示和低优先级内容

### 翻译方法
所有文本应该：
1. 在 `src/lib/i18n/` 目录的翻译文件中定义
2. 在组件中通过 `const { t } = useTranslation()` 使用
3. 格式：`t('context.key')` 例如 `t('dashboard.criticalUsage')`

### 示例转换

```javascript
// 之前
<p>Current Plan</p>

// 之后
const { t } = useTranslation();
<p>{t('dashboard.currentPlan')}</p>
```

