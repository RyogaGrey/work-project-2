import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/en-au';
import 'moment/locale/ru';
import { useState, useCallback } from "react";
import { makeStyles } from 'tss-react/mui';
import { Box } from "@mui/material";
import CardComponent from "./CardComponent";
import i18n from "i18next";

export default function BigBundleComponent() {
    const locale = i18n.language === 'ru' ? 'ru' : 'en-au';

    // Используем useCallback для оптимизации setData
    const [data, setData] = useState<any[]>(() =>
        _.range(0, 5000).map((i) => ({
            id: i,
            date: moment().subtract(i, 'days').locale(locale).format('LL'),
            value: Math.random(),
        }))
    );

    //Не используется без P
    const useStyles = makeStyles()((theme) => ({
        paperContainer: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(1),
            height: '700px',
            overflow: 'auto', // Прокрутка при превышении контента
        },
    }));

    const { classes } = useStyles();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            {data && (
                <Box sx={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                    {data.map((item) => (
                        <CardComponent
                            key={item.id}
                            imagePath="/static/images/cards/cardImage.jpg"
                            imageTitle={item.id.toString()}
                            title={item.date}
                            text={item.value.toFixed(2)} // Округление для улучшения отображения
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
}
