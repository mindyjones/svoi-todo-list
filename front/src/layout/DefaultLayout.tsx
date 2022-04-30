import { Container, Grid } from '@mui/material'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


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
            <Container maxWidth='lg' sx={{ minHeight: 500 }}>
                <Grid container style={{ background, height: '100%', width: '100%' }} >
                    <Grid item xs={3}>
                        <Sidebar width={3} />
                    </Grid>
                    <Grid item xs={9} mt={5}>
                        {children}
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        )
    }

export default DefaultLayout