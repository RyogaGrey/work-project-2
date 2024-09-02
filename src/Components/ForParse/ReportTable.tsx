import React from 'react';
import { Box, Typography, TableContainer, Table, TableBody } from '@mui/material';
import ReportTableHead from './RT/ReportTableHead';
import ReportTableRow from './RT/ReportTableRow';

export interface Report {
    type: string;
    date: string;
    number: number;
    description: string;
    event: string;
}

interface ReportTableProps {
    reportArray?: Report[];
}

const ReportTable: React.FC<ReportTableProps> = ({ reportArray = [] }) => {
    const placeholders: Report[] = [
        { type: 'Суточный', date: '----', number: 0, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 0, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 0, description: 'Описание', event: 'Мероприятие' }
    ];

    const dataToDisplay = reportArray.length > 0 ? reportArray : placeholders;

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Отчеты</Typography>
            <TableContainer>
                <Table>
                    <ReportTableHead />
                    <TableBody>
                        {dataToDisplay.map((report) => (
                            <ReportTableRow key={report.number} report={report} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ReportTable;
