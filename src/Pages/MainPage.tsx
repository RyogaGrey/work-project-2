import FilterComponent from "../Components/FilterComponent";
import TableComponent from "../Components/TableComponent";
import {data, tableHead} from "../Data/data";
import {Box} from "@mui/material";
import React from "react";

export default function MainPage() {
    return (
        <Box m={4}>
            <FilterComponent/>
            <TableComponent data={data} tableHead={tableHead} />
        </Box>
    )
}