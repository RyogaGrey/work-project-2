import {Box, Button, TextField} from "@mui/material"
import {tableHead, data} from "../Data/data"
import {ChangeEvent, useState} from "react";
import TableComponent from "./TableComponent";
import { ITableProps } from '../helpers/types';
import {useTranslation} from "react-i18next";

export default function FilterComponent() {
    const [activeFilter, setActiveFilter] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [filteredResult, setFilteredResult] = useState<ITableProps[]>();

    const handleButtonClick = (filterName: string) => {
        setActiveFilter(filterName);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setFilterValue(value);
        if (activeFilter && value) {
            const filteredData = data.filter(obj => {
                const fieldValue = obj[activeFilter as keyof ITableProps]?.toString();
                return fieldValue.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredResult(filteredData);
        } else {
            setFilteredResult([]);
        }
    };

    const resetFilter = () => {
        setFilterValue('');
        setActiveFilter('');
    }

    const { t } = useTranslation();
    return (
        <Box mb={2}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Box m={2}>
                    {tableHead.map((filterName, index) => (
                        <Button sx={{mr: 1}}
                                key={index}
                                color={activeFilter === filterName ? 'primary' : 'inherit'}
                                variant={activeFilter === filterName ? 'contained' : 'outlined'}
                                onClick={() => handleButtonClick(filterName)}
                        >
                            {filterName}
                        </Button>
                    ))}
                </Box>
                <Box m={2} sx={{height: '56px'}}>
                    <TextField
                        label={t('inputPlaceholder')}
                        variant="outlined"
                        value={filterValue}
                        onChange={handleInputChange}
                        sx={{mr: 1}}
                    />
                    <Button variant="contained" color="warning" sx={{height: '100%'}}
                            onClick={() => resetFilter()}>{t('buttonReset')}</Button>
                </Box>
            </Box>
            {filteredResult && activeFilter && filterValue && (
                <TableComponent data={filteredResult} tableHead={tableHead}/>)}
        </Box>
    )
}