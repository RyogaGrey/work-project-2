import {useEffect, useState} from "react";


export default function useLocalTheme() {
    //в зависимости от темы на устройстве пользователя
    const userDeviceTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = userDeviceTheme ? 'dark' : 'light'

    const [localTheme, setLocalTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)

    useEffect(() => {
        localStorage.setItem('app-theme', localTheme)
    }, [localTheme])

    return {localTheme, setLocalTheme}
}