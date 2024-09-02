import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { ITableProps } from '../../helpers/types';

interface TableHeaderProps {
    tableHead: string[];
    orderBy: keyof ITableProps | '';
    orderDirection: 'asc' | 'desc';
    onSortRequest: (cellName: keyof ITableProps) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ tableHead, orderBy, orderDirection, onSortRequest }) => {
    return (
        <TableHead>
            <TableRow>
                {tableHead.map((name, index) => (
                    <TableCell key={index} align="center">
                        <TableSortLabel
                            active={orderBy === name}
                            direction={orderBy === name ? orderDirection : 'asc'}
                            onClick={() => onSortRequest(name as keyof ITableProps)}
                        >
                            {name}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
