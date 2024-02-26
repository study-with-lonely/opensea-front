import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SailingIcon from '@mui/icons-material/Sailing';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, styled} from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";

const pages = [
    {name: 'О нас', path: '/'},
    {name: 'Новости', path: '/news'},
    {name: 'Фотогалерея', path: '/gallery'},
    {name: 'Помощь', path: '/help'},
    {name: 'Контакты', path: '/contacts'}
];

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function NavBar() {
    const [state, setState] = React.useState(false);
    const navigate = useNavigate();
    const toggleDrawer =
        (open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    (event.key === 'Tab' ||
                        event.key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    return (
        <AppBar position="fixed" color="error">
            <Container maxWidth="100vw">
                <Toolbar disableGutters>
                    <SailingIcon
                        sx={{display: {xs: 'flex'}, mx: 2, fontSize: 48}}
                        onClick={() => navigate('/', {replace: true})}
                    />
                    <Link
                        to="/"
                        component={RouterLink}
                        noWrap
                        sx={{
                            flexGrow: 1,
                            flexShrink: 0,
                            flexDirection: 'column',
                            mx: 1,
                            display: 'flex',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                mr: 1,
                                display: 'flex',
                                fontSize: {xs: '1rem', md: '2rem'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ОТКРЫТОЕ МОРЕ
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex', lg: 'flex'},
                                fontSize: '1rem',
                                fontFamily: 'monospace',
                                fontWeight: 400,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            парусная школа
                        </Typography>
                    </Link>
                    <Link
                        to="/"
                        component={RouterLink}
                        noWrap
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'flex', md: 'none'},
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ОТКРЫТОЕ МОРЕ
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 400,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            парусная школа
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1, justifyContent: 'end', display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => navigate(page.path, {replace: true})}
                                sx={{
                                    my: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'white',
                                    display: 'block'
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 1, justifyContent: 'end', display: {xs: 'flex', lg: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={state}
                            onClose={toggleDrawer(false)}
                        >
                            <DrawerHeader>
                                <IconButton onClick={toggleDrawer(false)}>
                                    <ChevronRightIcon/>
                                </IconButton>
                            </DrawerHeader>
                            <Divider/>
                            <Box
                                sx={{width: 350}}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {pages.map((page) => (
                                        <ListItem key={page.name} disablePadding>
                                            <ListItemButton onClick={() => {
                                                toggleDrawer(false);
                                                navigate(page.path, {replace: true});
                                            }}>
                                                {/*<ListItemIcon>*/}
                                                {/*    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                                                {/*</ListItemIcon>*/}
                                                <ListItemText primary={page.name}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
