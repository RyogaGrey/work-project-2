import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import i18n from "i18next";

export default function LanguageButtonsComponent() {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = () => {
            setCurrentLanguage(i18n.language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <Button
                key="ru"
                color={currentLanguage === 'ru' ? 'primary' : 'inherit'}
                variant={currentLanguage === 'ru' ? 'contained' : 'outlined'}
                onClick={() => changeLanguage('ru')}
            >
                Русский
            </Button>

            <Button
                key="en"
                color={currentLanguage === 'en' ? 'primary' : 'inherit'}
                variant={currentLanguage === 'en' ? 'contained' : 'outlined'}
                onClick={() => changeLanguage('en')}
            >
                English
            </Button>
        </>
    )
}
