import React from 'react';
import { TableCell, TableRow } from "@mui/material";
import { ITableProps } from '../../helpers/types';

interface TableRowComponentProps {
    row: ITableProps;
}

const TableRowComponent: React.FC<TableRowComponentProps> = ({ row }) => {
    return (
        <TableRow>
            {Object.values(row).map((value, index) => (
                <TableCell align="center" key={index}>
                    {value.toString()}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default TableRowComponent;
