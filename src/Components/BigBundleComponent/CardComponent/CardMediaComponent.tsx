import { CardMedia } from "@mui/material";

interface CardMediaProps {
    imagePath: string;
    imageTitle: string;
}

export function CardMediaComponent({ imagePath, imageTitle }: CardMediaProps) {
    return (
        <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={imagePath}
            alt={imageTitle}
        />
    );
}
