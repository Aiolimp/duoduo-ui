import { createContext } from 'react'

import { DuoduoTheme } from '../types/theme.types'

export const DuoduoThemeContext = createContext<DuoduoTheme | null>(null)
