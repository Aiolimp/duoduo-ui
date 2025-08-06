import { useContext } from 'react'

import { DEFAULT_THEME } from './default-theme'
import { DuoduoThemeContext } from './DuoduoTheme.context'

// 安全获取主题，如果没有找到上下文则返回默认主题
export const useSafeDuoduoTheme = () => useContext(DuoduoThemeContext) || DEFAULT_THEME

// 获取主题，如果没有找到上下文则抛出错误
export const useDuoduoTheme = () => {
    const ctx = useContext(DuoduoThemeContext)
    if (!ctx) {
        throw new Error('@duoduo/ui: DuoduoProvider was not found in component tree, make sure you have it in your app')
    }

    return ctx
}
