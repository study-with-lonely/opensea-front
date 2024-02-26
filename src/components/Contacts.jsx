import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const Contacts = () => {
    return (
        <Grid container sx={{marginTop: '68.5px', p: 1, pt: 0, height: `calc(100vh - 68.5px)`}} spacing={1}>
            <Grid
                item
                sm={12}
                md={6}
                sx={{height: '100%'}}>
                <Typography
                    paragraph
                    gutterBottom
                    sx={{
                        p: 2,
                        m: 0,
                        textAlign: 'start',
                        fontWeight: 600,
                    }}
                >
                    АНО Открытое море
                </Typography>
                <Typography
                    paragraph
                    gutterBottom
                    sx={{
                        p: 2,
                        m: 0,
                        textAlign: 'start',
                        fontWeight: 600,
                    }}
                >
                    Россия, г. Новороссийск, ул. Тургенева, д. 4 (в здании ДОСААФ)
                </Typography>
                <Typography
                    paragraph
                    gutterBottom
                    sx={{
                        p: 2,
                        m: 0,
                        textAlign: 'start',
                        fontWeight: 600,
                    }}
                >
                    Россия, г. Новороссийск, наб. адмирала Серебрякова, 29А (на территории яхт-клуба Русское Море)
                </Typography>
                <Typography
                    paragraph
                    gutterBottom
                    sx={{
                        p: 2,
                        m: 0,
                        textAlign: 'start',
                        fontWeight: 600,
                    }}
                >
                    тут должны быть иконки соцсетей со ссылками
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                sx={{height: '100%'}}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Af0e0a659f9fe5c35d61dfeb91821cb22d1506b2005c125bd924d015d321c7c18&amp;source=constructor"
                    width="100%" height="100%" frameBorder="0"></iframe>
            </Grid>
        </Grid>
    );
};

export default Contacts;