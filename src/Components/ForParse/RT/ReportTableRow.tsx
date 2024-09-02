import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { Report } from '../ReportTable'; // Предполагается, что интерфейс Report экспортируется из основного компонента

interface ReportTableRowProps {
    report: Report;
}

const ReportTableRow: React.FC<ReportTableRowProps> = ({ report }) => {
    return (
        <TableRow key={report.number}>
            <TableCell>{report.type}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.number}</TableCell>
            <TableCell>{report.description}</TableCell>
            <TableCell>{report.event}</TableCell>
        </TableRow>
    );
};

export default ReportTableRow;
