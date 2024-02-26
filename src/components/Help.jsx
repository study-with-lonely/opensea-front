import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function Help() {
    return (
        <Grid container sx={{marginTop: '68.5px', p: 1, pt: 0, height: `calc(100vh - 68.5px)`}} spacing={1}>
            <Grid xs={1} sm={2} item>
                <VolunteerActivismIcon sx={{fontSize: 56}}/>
            </Grid>
            <Grid xs={11} sm={10} item>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        p: 1,
                        textAlign: 'start',
                        fontWeight: 600
                    }}
                >
                    Присоединиться к помощи для Открытого Моря можно, отправив средства на карты банков АльфаБанк,
                    Тинькофф, Сбербанк
                    по номеру +7 918 053 44 30 с пометкой "Открытое море для всех".
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        p: 1,
                        textAlign: 'start',
                        fontWeight: 600
                    }}
                >
                    Сделаем Открытое Море доступным большему количеству людей вместе!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Help;