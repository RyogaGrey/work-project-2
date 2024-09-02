import {Line} from "react-chartjs-2";
import {IAreaChartComponentProps} from "../../helpers/types";

export default function AreaChartComponent(props: IAreaChartComponentProps) {
    return <Line {...props} />
}