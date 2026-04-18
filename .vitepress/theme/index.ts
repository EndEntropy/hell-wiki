/**
 * Sentry 暗紫风格 VitePress 自定义主题
 * 配色来源：Sentry Design System
 */

import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 如需扩展 Vue 组件可在此注册
  },
}
