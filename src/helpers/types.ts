import {ChartData, ChartOptions, ChartType} from "chart.js/auto";
import {ReactElement} from "react";
import {Layout} from "react-grid-layout";

export type Layouts = {
    md: Layout[];
};

export interface ITableProps {
    Name: string;
    Email: string;
    Status: number;
    Rnd_Int: number;
    Rnd_Date: string;
}

export interface ITableComponentProps {
    data: ITableProps[];
    tableHead: string[];
}

export interface INavBarProps {
    isIconButton?: boolean;
    isTypography?: boolean;
    typography?: string;
    translation: string;
    dataButtons?: Array<NavBarState>;
}

interface NavBarState {
    name: string
    path: string
}

export interface ICardData {
    imagePath: string,
    imageTitle: string,
    title: string,
    text: string,
}

export interface IThemeContextType {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

type onChangeFunctionType = () => void;
export interface IToggleComponent {
    labelName: string,
    onChangeFunc: onChangeFunctionType,
    checkedN: boolean,
    name: string,
}

export type IChartBoxComponentProps<T extends ChartType> = {
    children: (data: ChartData<T>, options?: ChartOptions<T>) => ReactElement;
    data: ChartData<T>;
    options?: ChartOptions<T>;
};

export interface IBarChartComponentProps {
    data: ChartData<'bar'>
    options?: ChartOptions<'bar'>
}

export interface IAreaChartComponentProps {
    data: ChartData<'line'>
    options?: ChartOptions<'line'>
}