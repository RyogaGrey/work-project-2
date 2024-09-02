import React from 'react';
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import {Grid, useTheme, useMediaQuery} from '@mui/material'
import {Outlet} from "react-router-dom";
import {routes} from "./index";
import {secondNavBarData} from "./Data/data";
import {ThemeProvider} from "./theme/ThemeProvider";
import {ToggleThemeComponent} from "./Components/ToggleThemeComponent";
import LanguageButtonsComponent from "./Components/LanguageButtonsComponent";

export default function App() {
    const themeResponsive = useTheme();
    const isMobile = useMediaQuery(themeResponsive.breakpoints.down('sm'));
    return (
        <ThemeProvider>
            <Grid container direction={isMobile ? 'column' : 'row'} alignItems="top" spacing={0}>
                <Grid item xs={12} md={10}>
                    <NavBarComponent
                                isIconButton={true}
                                dataButtons={routes}
                                isTypography={true}
                                typography="lsiiel-prod"
                                translation="firstNavBarButtons"
                    />
                    <Outlet />
                </Grid>
                <Grid item xs={12} md={2}>
                    <NavBarComponent
                                dataButtons={secondNavBarData}
                                isTypography={false}
                                translation="secondNavBarButtons" />
                    <ToggleThemeComponent />
                    <LanguageButtonsComponent />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}