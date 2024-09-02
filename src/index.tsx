import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import './configLanguages';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import DashboardPage from "./Pages/DashboardPage";
import SettingsPage from "./Pages/SettingsPage";
import DrillingPage from "./Pages/DrillingPage";
import BigBundlePage from "./Pages/BigBundlePage";
import WellParsePage from "./Pages/WellParsePage";

export const routes = [
    { path: '/table', element: <MainPage />, name: "Таблица" },
    { path: '/analytics', element: <AnalyticsPage />, name: "Аналитика" },
    { path: '/dashboard', element: <DashboardPage />, name: "Дашборд" },
    { path: '/drilling', element: <DrillingPage />, name: "Бурение" },
    { path: '/settings', element: <SettingsPage />, name: "Настройки" },
    { path: '/large', element: <BigBundlePage />, name: "Большой компонент" },
    { path: '/wells', element: <WellParsePage/>, name: "Парсинг с сайта"}
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routes.map(({ path, element, name }) => ({ path, element })),
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);