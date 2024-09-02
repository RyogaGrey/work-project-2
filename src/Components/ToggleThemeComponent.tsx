import {FormControlLabel, Switch} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../theme/ThemeProvider";
import {useTranslation} from "react-i18next";

export const ToggleThemeComponent = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    const { t } = useTranslation();
    return (
        <FormControlLabel
                label={t('changeThemeSwitch')}
                control={
                    <Switch
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        name="themeToggle"
                    />
        }  />
    );
}