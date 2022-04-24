import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'


interface LayoutProps {
    background?: string
    children?: ReactNode
}

const DefaultLayout: React.FC<LayoutProps> =
    ({
        background,
        children
    }) => {
        return (
            <div style={{ background }}>
                {children}
                <Outlet />
            </div>
        )
    }

export default DefaultLayout