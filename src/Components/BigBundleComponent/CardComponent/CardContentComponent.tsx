import { CardContent, Typography } from "@mui/material";

interface CardContentProps {
    title: string;
    text: string;
}

export function CardContentComponent({ title, text }: CardContentProps) {
    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {text}
            </Typography>
        </CardContent>
    );
}
