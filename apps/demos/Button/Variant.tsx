import React from 'react'

import { Button, DuoduoProvider } from '@duoduo/ui'

const Variant: React.FC = () => {
    return (
        <DuoduoProvider>
            <Button variant="default">default</Button>
            <Button variant="filled">filled</Button>
            <Button variant="gradient">gradient</Button>
            <Button variant="light">light</Button>
            <Button variant="outline">outline</Button>
            <Button variant="subtle">subtle</Button>
            <Button variant="transparent">transparent</Button>
            <Button variant="white">white</Button>
        </DuoduoProvider>
    )
}

export default Variant
