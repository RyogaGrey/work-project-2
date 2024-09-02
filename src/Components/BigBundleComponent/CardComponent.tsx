import { Card } from "@mui/material";
import { ICardData } from "../../helpers/types";
import { CardMediaComponent } from "./CardComponent/CardMediaComponent";
import { CardContentComponent } from "./CardComponent/CardContentComponent";
import { CardActionsComponent } from "./CardComponent/CardActionsComponent";

export default function CardComponent({ imagePath, imageTitle, title, text }: ICardData) {
    return (
        <Card sx={{ width: 253 }}>
            <CardMediaComponent imagePath={imagePath} imageTitle={imageTitle} />
            <CardContentComponent title={title} text={text} />
            <CardActionsComponent />
        </Card>
    );
}
