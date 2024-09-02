import {IconButton, Typography, Toolbar, Box, AppBar} from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {INavBarProps} from "../../helpers/types";
import "./NavBarComponent.css"
import {useTranslation} from "react-i18next";

export default function NavBarComponent({ dataButtons = [], isIconButton = false, isTypography = false, typography = '', translation }: INavBarProps) {
    const { t } = useTranslation();
    const navBarButtons: string[] = t(translation, { returnObjects: true });
    return (
        <AppBar position="sticky">
            <Toolbar>
                {isIconButton && (
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                )}
                {isTypography && (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t("navBarTypography")}
                    </Typography>
                )}
                <Box>
                    {dataButtons.map((data, index) => (
                        <Link key={index} className="NavLink" to={data.path} style={{ textDecoration: 'none' }} color="inherit">
                            {navBarButtons[index]}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}