import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Well } from '../../Pages/DrillingPage';

interface WellListProps {
    wellList: Well[];
    onEdit: (well: Well) => void;
}

const WellList: React.FC<WellListProps> = ({ wellList, onEdit }) => {
    return (
        <Box>
            {wellList.map((well) => (
                <Box key={well.id} display="flex" alignItems="center" justifyContent="space-between" sx={{ marginBottom: 1 }}>
                    <Typography>
                        {well.name} - Глубина: {well.depth} метров
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={() => onEdit(well)}>
                        Редактировать
                    </Button>
                </Box>
            ))}
        </Box>
    );
};

export default WellList;
