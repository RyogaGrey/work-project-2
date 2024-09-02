import {Bar} from "react-chartjs-2";
import {IBarChartComponentProps} from "../../helpers/types";

export default function BarChartComponent(props: IBarChartComponentProps) {
    return <Bar {...props}/>
}