import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { Well } from '../../Pages/DrillingPage';

interface WellDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    well: Well | null;
    setWellName: (name: string) => void;
    setWellDepth: (depth: number) => void;
}

const WellDialog: React.FC<WellDialogProps> = ({ isOpen, onClose, onSave, well, setWellName, setWellDepth }) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{well ? 'Редактировать скважину' : 'Добавить новую скважину'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Название"
                    type="text"
                    fullWidth
                    value={well ? well.name : ''}
                    onChange={(e) => setWellName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Глубина (м)"
                    type="number"
                    fullWidth
                    value={well ? well.depth : 0}
                    onChange={(e) => setWellDepth(Number(e.target.value))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Отмена
                </Button>
                <Button onClick={onSave} color="primary">
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default WellDialog;
