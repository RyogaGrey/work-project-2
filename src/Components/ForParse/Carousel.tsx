import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

interface CarouselProps {
    projectArray: { projectId: string, projectName: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ projectArray }) => {
    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
            {projectArray.map((project) => (
                <Card key={project.projectId} sx={{ width: 300, flexShrink: 0 }}>
                    <CardContent>
                        <Typography variant="h6">Куст: X</Typography>
                        <Typography variant="subtitle1">Скважина: Y</Typography>
                        <Typography variant="body2">Проект: Z</Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                            <Button variant="outlined" size="small">БУР</Button>
                            <Button variant="outlined" size="small">БМР</Button>
                            <Button variant="outlined" size="small">ОСВ</Button>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small">ПЛАН</Button>
                        <Button size="small">ВСЕ ОТЧЕТЫ</Button>
                    </CardActions>
                </Card>
                
            ))}
        </Box>
    );
};

export default Carousel;
