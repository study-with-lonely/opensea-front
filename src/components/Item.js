import {Paper, styled} from "@mui/material";

export const Item = styled(Paper)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxSizing: 'border-box',
    height: '100%'
}));