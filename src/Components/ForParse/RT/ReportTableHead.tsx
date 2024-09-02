import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const ReportTableHead: React.FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Тип</TableCell>
                <TableCell>Дата</TableCell>
                <TableCell>№</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell>Мероприятие</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ReportTableHead;
