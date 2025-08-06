export type DuoduoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface VariantColorResolverResult {
    background: string
    hover: string
    color: string
    border: string
    hoverColor?: string
}

export interface DuoduoTheme {}

// need replace partial to deepPartial use type-fest
export type DuoduoThemeOverrides = Partial<DuoduoTheme>
