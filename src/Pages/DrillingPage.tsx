import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import WellList from '../Components/Drilling/WellList';
import WellDialog from '../Components/Drilling/WellDialog';

export interface Well {
    id: number;
    name: string;
    depth: number;
}

const DrillingPage: React.FC = () => {
    const [wellList, setWellList] = useState<Well[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingWell, setEditingWell] = useState<Well | null>(null);
    const [newWellName, setNewWellName] = useState<string>('');
    const [newWellDepth, setNewWellDepth] = useState<number>(0);

    useEffect(() => {
        const fetchWellList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/Wells');
                setWellList(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при получении скважин:', error);
                setIsLoading(false);
            }
        };

        fetchWellList();
    }, []);

    const openDialog = () => {
        setEditingWell(null);
        setNewWellName('');
        setNewWellDepth(0);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const saveWell = async () => {
        try {
            if (editingWell) {
                await axios.put(`http://localhost:3001/Wells/${editingWell.id}`, {
                    ...editingWell,
                    name: newWellName,
                    depth: newWellDepth,
                });
            } else {
                await axios.post('http://localhost:3001/Wells', {
                    id: wellList.length + 1,
                    name: newWellName,
                    depth: newWellDepth,
                });
            }
            setIsDialogOpen(false);
            setIsLoading(true);
            const response = await axios.get('http://localhost:3001/Wells');
            setWellList(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Ошибка при сохранении скважины:', error);
        }
    };

    const editWell = (well: Well) => {
        setEditingWell(well);
        setNewWellName(well.name);
        setNewWellDepth(well.depth);
        setIsDialogOpen(true);
    };

    if (isLoading) {
        return <Typography>Загрузка...</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4">Бурение</Typography>
            <Typography variant="h6">Количество записей: {wellList.length}</Typography>
            <Button variant="contained" color="primary" onClick={openDialog} sx={{ marginBottom: 2 }}>
                Добавить новую скважину
            </Button>
            <WellList wellList={wellList} onEdit={editWell} />
            <WellDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                onSave={saveWell}
                well={editingWell}
                setWellName={setNewWellName}
                setWellDepth={setNewWellDepth}
            />
        </Box>
    );
};

export default DrillingPage;
