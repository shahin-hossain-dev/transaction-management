'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import { ReactNode } from 'react';

const ThemeProviders = ({children}: {children: ReactNode}) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ThemeProviders;