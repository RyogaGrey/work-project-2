import React, { useEffect, useState } from 'react';
import AreaChartComponent from "../Components/Charts/AreaChartComponent";
import BarChartComponent from "../Components/Charts/BarChartComponent";
import MultipleChartComponent from "../Components/Charts/MultipleChartComponent";
import { options, BarChartData, AreaChartData, MultipleChartData } from "../Data/chartConfig";
import Chart from "chart.js/auto";
import { Layout } from 'react-grid-layout';
import { Layouts } from "../helpers/types";
import DashboardGrid from '../Components/DashBoard/DashboardGrid';
import ChartWrapper from '../Components/DashBoard/ChartWrapper';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

export default function DashboardPage() {
    const defaultLayouts: Layouts = {
        md: [
            { i: '1', x: 0, y: 0, w: 5, h: 2 },
            { i: '2', x: 5, y: 0, w: 5, h: 2 },
            { i: '3', x: 0, y: 2, w: 5, h: 2 },
            { i: '4', x: 5, y: 2, w: 5, h: 2 },
        ],
    };

    const [layouts, setLayouts] = useState<Layouts>(() => {
        const savedLayouts = localStorage.getItem('dashboard-layouts');
        if (savedLayouts) {
            try {
                return JSON.parse(savedLayouts) as Layouts;
            } catch (e) {
                console.error("Error parsing saved layouts from localStorage", e);
                return defaultLayouts;
            }
        } else {
            return defaultLayouts;
        }
    });

    const handleLayoutChange = (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
        try {
            const layoutsJSON = JSON.stringify(allLayouts);
            localStorage.setItem('dashboard-layouts', layoutsJSON);
            setLayouts(allLayouts as Layouts);
        } catch (e) {
            console.error("Error saving layouts to localStorage", e);
        }
    };

    useEffect(() => {
        const savedLayouts = localStorage.getItem('dashboard-layouts');
        if (savedLayouts) {
            try {
                setLayouts(JSON.parse(savedLayouts) as Layouts);
            } catch (e) {
                console.error("Error parsing saved layouts from localStorage on initial load", e);
            }
        }
    }, []);

    return (
        <DashboardGrid layouts={layouts} onLayoutChange={handleLayoutChange}>
            <ChartWrapper id="1">
                <BarChartComponent data={BarChartData} options={options} />
            </ChartWrapper>
            <ChartWrapper id="2">
                <AreaChartComponent data={AreaChartData} options={options} />
            </ChartWrapper>
            <ChartWrapper id="3">
                <MultipleChartComponent data={MultipleChartData} />
            </ChartWrapper>
            <ChartWrapper id="4">
                <BarChartComponent data={BarChartData} options={options} />
            </ChartWrapper>
        </DashboardGrid>
    );
}
