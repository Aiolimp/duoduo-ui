import React from 'react'

import '../ThemeProvider/global.css'

import { DuoduoThemeProvider } from '../ThemeProvider/DuoduoThemeProvider'
import { DuoduoThemeOverrides } from '../types/theme.types'

import { DuoduoContext } from './Duoduo.context'

export interface DuoduoProviderProps {
    /**
     * 应用主题
     */
    theme?: DuoduoThemeOverrides
    /**
     * 子组件
     */
    children?: React.ReactNode
}

export const DuoduoProvider: React.FC<DuoduoProviderProps> = ({ theme, children }) => {
    return (
        <DuoduoContext value={{}}>
            <DuoduoThemeProvider theme={theme}>{children}</DuoduoThemeProvider>
        </DuoduoContext>
    )
}

// 为 React 组件设置显示名称，主要用于调试和开发工具中的显示。
DuoduoProvider.displayName = '@duoduo/ui/DuoduoProvider'
