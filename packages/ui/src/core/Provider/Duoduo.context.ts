import { createContext } from 'react'
export interface DuoduoContextValue {}

export const DuoduoContext = createContext<DuoduoContextValue | null>(null)
