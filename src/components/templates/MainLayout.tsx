import { CssBaseline, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { JsxElement, TypeElement } from 'typescript';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

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
const MainLayout: React.FunctionComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>

        <header>
            <Header />
        </header>
        <main className={classes.MainLayoutContent}>
            {children}
        </main>
        <footer className={classes.footer}>
            <Footer />
        </footer>
    </div>
};

export default MainLayout;
