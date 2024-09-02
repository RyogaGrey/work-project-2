import {Chart} from "react-chartjs-2";
import {ChartData} from "chart.js/auto";

export default function MultipleChartComponent({data}: {data: ChartData<any>}) {
    return <Chart type="bar" data={data} />
}