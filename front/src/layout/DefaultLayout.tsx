import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import { grey } from '@mui/material/colors';
import Sidebar from '../components/Sidebar'
import palette from 'theme/palette';


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
            // <Container maxWidth='lg' sx={{ minHeight: 500 }}>
            <Grid container style={{ height: '100%', width: '100%' }} >
                <Grid item container xs={3} justifyContent='center' style={{ background: palette.secondaryBackground.default, height: '100vh' }}>
                    <Sidebar width={3} />
                </Grid>
                <Grid item xs={9} mt={5}>
                    {children}
                    <Outlet />
                </Grid>
            </Grid>
            // </Container >
        )
    }

export default DefaultLayout