import {  makeStyles } from '@material-ui/core';
import * as React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    MainLayoutContent: {
        flex: 1
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },

}));
interface IMainLayout {
    header: React.ReactNode,
    footer: React.ReactNode,
}
const MainLayout: React.FunctionComponent<IMainLayout> = ({ header, footer, children }) => {
    const classes = useStyles();
    return <div className={classes.root}>

        <header>
            {header}
        </header>
        <main className={classes.MainLayoutContent}>
            {children}
        </main>
        <footer className={classes.footer}>
            {footer}
        </footer>
    </div>
};

export default MainLayout;
