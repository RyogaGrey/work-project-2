import React, { useMemo, useState } from 'react';
import { Table, TableBody, Button } from "@mui/material";
import { ITableProps, ITableComponentProps } from '../helpers/types';
import { useTranslation } from "react-i18next";
import TableHeader from './TableSubComponents/TableHeader';
import TableRowComponent from './TableSubComponents/TableRowComponent';

const TableComponent: React.FC<ITableComponentProps> = ({ data, tableHead }) => {
    const { t } = useTranslation();
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof ITableProps | ''>('');

    const handleSortRequest = (cellName: keyof ITableProps) => {
        const isAsc = orderBy === cellName && orderDirection === 'asc';
        setOrderDirection(isAsc ? 'desc' : 'asc');
        setOrderBy(cellName);
    };

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => {
            if (orderBy) {
                const aValue = a[orderBy];
                const bValue = b[orderBy];
                if (aValue < bValue) {
                    return orderDirection === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return orderDirection === 'asc' ? 1 : -1;
                }
                return 0;
            }
            return 0;
        });
    }, [data, orderDirection, orderBy]);

    return (
        <>
            <Table>
                <TableHeader 
                    tableHead={tableHead} 
                    orderBy={orderBy} 
                    orderDirection={orderDirection} 
                    onSortRequest={handleSortRequest} 
                />
                <TableBody>
                    {sortedData.map((row, index) => (
                        <TableRowComponent key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
            <Button variant="contained" color="warning" sx={{ mt: .5 }} onClick={() => setOrderBy('')}>
                {t('buttonResetSorting')}
            </Button>
        </>
    );
};

export default TableComponent;
