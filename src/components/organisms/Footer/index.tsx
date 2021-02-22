import { Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import { Paper } from "@material-ui/core";
import { FC } from 'react';
import MadeWith from '../../molecules/MadeWith';
interface IFooterProps {
}
const useStyles = makeStyles((theme) => ({
    //   root: {
    //     flexShrink: 0,

    //     // marginTop: 'auto',
    //     borderTop: `1px solid ${theme.palette.divider}`,
    //     // backgroundColor:
    //     //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],

    //   },
    footerWrapper: {
        padding: theme.spacing(2),
    }
    // nav
}));


const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const classes = useStyles();
    return (<Container maxWidth="sm">
        <Grid container direction="column" justify="center" alignItems="center" alignContent="center">
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                    <Typography>Made with</Typography>
                    </Grid>
                    <Grid item>
                    <MadeWith />
                    </Grid>
                </Grid>
             
            </Grid>
            <Grid item>
                <Typography>Made by <Link href="https://github.com/trentschnee">Trent Schneweis</Link></Typography>
            </Grid>
        </Grid>
    </Container>)
};

export default Footer;
