import { ChartData } from "chart.js/auto";
import { faker } from "@faker-js/faker";
import { data } from "./data";

// Цвета для графиков
export const AreaChartColors = {
    borderColor: "rgba(255, 99, 132, 0.4)",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
};

// Конфигурация для графика с областями
export const AreaChartData: ChartData<'line'> = {
    labels: data.map((item) => item.Name.split(" ")),
    datasets: [
        {
            fill: false,
            label: "Случайное число",
            data: data.map(() => faker.number.int({ min: 1, max: 500 })),
            borderColor: AreaChartColors.borderColor,
        },
    ],
};

// Конфигурация для гистограммы
export const BarChartData: ChartData<'bar'> = {
    labels: AreaChartData.labels,
    datasets: [
        {
            label: 'Статус',
            data: data.map((item) => item.Status),
            borderColor: "#A5D1F5",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Случайное число',
            data: data.map((item) => item.Rnd_Int),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

// Конфигурация для полярной области
export const PolarAreaChartData = {
    labels: AreaChartData.labels,
    datasets: [
        {
            label: '# of Votes',
            data: data.map((item) => item.Rnd_Int),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: "#A5D1F5",
            borderWidth: 1,
        },
    ],
};

// Конфигурация для комбинированного графика
export const MultipleChartData = {
    labels: AreaChartData.labels,
    datasets: [
        {
            ...AreaChartData.datasets[0],
            type: 'line' as const,
        },
        {
            ...BarChartData.datasets[0],
            type: 'bar' as const,
        },
        {
            ...BarChartData.datasets[1],
            type: 'bar' as const,
        },
    ],
};

// Общие опции для графиков
export const options = {
    responsive: true,
};
