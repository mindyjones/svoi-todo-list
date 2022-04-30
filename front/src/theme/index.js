import PropTypes from 'prop-types';
import {useMemo} from 'react';
// material
import {CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme, StyledEngineProvider} from '@mui/material/styles';
//
import typography from './typography';
// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
    children: PropTypes.node
};

export default function ThemeConfig({children}) {
    const themeOptions = useMemo(
        () => ({
            // palette,
            // shape: {borderRadius: 8},
            typography,
            // shadows,
            // customShadows,
            // breakpoints
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
