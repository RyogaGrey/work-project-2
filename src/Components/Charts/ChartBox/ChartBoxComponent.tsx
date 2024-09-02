import {useState} from "react";
import {Box} from "@mui/material";
import {ChartType} from "chart.js/auto";
import { IChartBoxComponentProps } from '../../../helpers/types';
import {PrettoSlider} from "../../SliderComponent/SliderComponent";

export default function ChartBoxComponent<T extends ChartType>({children, data, options}: IChartBoxComponentProps<T>) {

    const [chartWidth, setChartWidth] = useState(500);
    const [isVisibleSlider, setIsVisibleSlider] = useState(false);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setChartWidth(newValue as number);
    };

    return (
        <Box
            sx={{width: chartWidth}}
            onMouseEnter={() => setIsVisibleSlider(true)}
            onMouseLeave={() => setIsVisibleSlider(false)}
        >
            {children(data, options)}
            {isVisibleSlider && (
                <PrettoSlider
                    colorchart={data.datasets[0].borderColor}
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={chartWidth}
                    min={300}
                    max={1000}
                    onChange={handleChange}
                />
            )}
        </Box>
    )
}