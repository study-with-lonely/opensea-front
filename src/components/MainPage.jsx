import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Item} from "./Item";

function MainPage() {
    return (
        <Grid container sx={{marginTop: '68.5px', p: 1, pt: 0, height: `calc(100vh - 68.5px)`}} spacing={1}>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}>
                <Item sx={{flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Управляем ветром. Парусный клуб, бесплатная парусная школа в Новороссийске.
                    </Typography>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Центр поддержки и развития парусного спорта и водного туризма для взрослых и людей с
                        ограниченными возможностями.
                        Работаем несколько лет со всеми желающими приобщиться к морской культуре.
                    </Typography>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Теоретические занятия в аудитории подкрепляются практическими занятиями на имеющемся
                        оборудовании.
                        Затем начинаются долгожданные выходы в море.
                        И апогеем проделанной работы являются соревнования, где курсанты уверенно занимают и
                        призовые
                        места.
                    </Typography>
                </Item>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}
            >
                <Item
                    sx={{
                        borderRadius: '4px',
                        backgroundImage: `url('/img/os2.jpg')`,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}>
                <Item sx={{flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Парусная школа яляется некоммерческой организацией, она существует только на
                        добровольные взносы и благодаря помощи неравнодушных граждан.
                        {/*</Typography>*/}
                        {/*<Typography*/}
                        {/*    paragraph*/}
                        {/*    gutterBottom*/}
                        {/*    sx={{*/}
                        {/*        p: 1,*/}
                        {/*        m: 0,*/}
                        {/*        textAlign: 'center',*/}
                        {/*        fontWeight: 600,*/}
                        {/*    }}*/}
                        {/*>*/}
                        Мы всегда рады любой вашей поддержке: финансовой,
                        информационной, физической (да-да, у нас всегда есть что делать).
                    </Typography>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Если вы хотите принять участие в наших начинаниях лично - свяжитесь с нами по любым Контактам.
                    </Typography>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Если вы хотите внести благотворительный вклад без личного участия - загляните в секцию Помощь,
                        там перечислены наши нужды.
                    </Typography>
                </Item>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}
            >
                <Item
                    sx={{
                        borderRadius: '4px',
                        backgroundImage: `url('/img/os1.jpg')`,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}>
                <Item sx={{flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography
                        paragraph
                        gutterBottom
                        sx={{
                            p: 1,
                            m: 0,
                            textAlign: 'center',
                            fontWeight: 600,
                        }}
                    >
                        Огромное спасибо, что не проходите мимо и помогаете развивать и популяризировать парусный спорт
                        в России!
                    </Typography>
                </Item>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{height: '50%'}}
            >
                <Item
                    sx={{
                        borderRadius: '4px',
                        backgroundImage: `url('/img/os3.jpg')`,
                        backgroundSize: 'cover',
                        height: '100%'
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default MainPage;