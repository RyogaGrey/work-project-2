import React, { useState, useEffect } from 'react';
import { Typography, Box, AppBar, Toolbar, Button, TextField, Card, CardContent, CardActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Carousel from '../Components/ForParse/Carousel';
import ReportTable from '../Components/ForParse/ReportTable';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// Структура объекта (проекта)
interface Project {
    projectId: string;
    projectName: string;
}

// Предположительно структура отчётов
// interface Report {
//     type: string;
//     date: string;
//     number: number;
//     description: string;
//     event: string;
// }

const WellParsePage: React.FC = () => {
    const [projectArray, setProjectArray] = useState<Project[]>([]);
    const [selectedProjectName, setSelectedProjectName] = useState<string>('Проекты');
    // const [reportArray, setReportArray] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        const fetchProjectArray = async () => {
            try {
                const response = await axios.get('https://edmrest.emeryone.com/Universal/CdProjectSource?fields=projectName,projectId');
                setProjectArray(response.data);
            } catch (error) {
                console.error('Ошибка при получении проектов:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectArray();
    }, []);

    const handleProjectSelect = (projectName: string) => {
        setSelectedProjectName(projectName);
    };

    return (
        <Box>

            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">HOME</Button>
                    {projectArray.map((project) => (
                        <Button key={project.projectId} color="inherit" onClick={() => handleProjectSelect(project.projectName)}>
                            {project.projectName}
                        </Button>
                    ))}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <SearchIcon />
                        <TextField placeholder="Search..." variant="outlined" size="small" />
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>{selectedProjectName}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                    <Carousel projectArray={projectArray} />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>

                </Box>
                <ReportTable />
            </Box>
        </Box>
    );
};

export default WellParsePage;