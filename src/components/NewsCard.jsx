import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, styled} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function NewsCard() {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                title="Требуется помощь"
                subheader="Декабрь 6, 2023"
            />
            <CardMedia
                component="img"
                height="194"
                image="/img/viktor.png"
                alt="Viktor"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>Разыскивается сухопутный транспорт. </strong>
                    Сделаем Открытое Море доступным каждому!
                    Если у Вас где-нибудь стоит заброшенный старый отечественный автомобиль, выбросить который на металл
                    жалко, но Вы им уже не пользуетесь -
                    мы бы с радостью забрали его и оформили на АНО "Открытое Море".
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Typography variant="body2" color="text.secondary">
                    Читать далее
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="body2" color="text.secondary">
                        Это позволит любому человеку из нашей организации сесть за руль и отвезти лодку к месту спуска
                        на воду,
                        чтобы можно было проводить настоящие многодневные походы в новых местах.
                        Также примем материальную помощь на покупку автомобиля на карты АльфаБанк, Тинькофф и Сбер,
                        привязанные к номеру телефона +7 918 053 44 30.
                        Мы благодарны за любую поддержку!
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default NewsCard;