import React, { useMemo } from 'react'

import { DuoduoThemeOverrides } from '../types/theme.types'

import { DEFAULT_THEME } from './default-theme'
import { DuoduoThemeContext } from './DuoduoTheme.context'
import { useSafeDuoduoTheme } from './useDuoduoTheme'

export interface DuoduoThemeProviderProps {
    /**  是否继承父级主题 默认继承 */
    inherit?: boolean

    /** 主题覆盖对象 */
    theme?: DuoduoThemeOverrides

    /** 应用或应用的一部分，需要不同的主题 */
    children?: React.ReactNode
}

export function DuoduoThemeProvider({ theme, children, inherit = true }: DuoduoThemeProviderProps) {
    const parentTheme = useSafeDuoduoTheme()
    const mergedTheme = useMemo(() => Object.assign(inherit ? parentTheme : DEFAULT_THEME, theme), [theme, parentTheme, inherit])

    return <DuoduoThemeContext value={mergedTheme}>{children}</DuoduoThemeContext>
}

DuoduoThemeProvider.displayName = '@duoduo/ui/DuoduoThemeProvider'
