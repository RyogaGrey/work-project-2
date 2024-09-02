import {PolarArea} from "react-chartjs-2";
import {ChartData} from "chart.js/auto";

export default function PolarAreaChartComponent({data}: {data: ChartData<'polarArea'>}) {
    return (
        <PolarArea data={data} />
    )
}