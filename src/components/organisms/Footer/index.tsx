import { Container, Grid, Link,  Typography } from '@material-ui/core';
import * as React from 'react';

import MadeWith from '../../molecules/MadeWith';
interface IFooterProps {
}



const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  
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
                <Typography>Made by <Link href="https://github.com/trentschnee">Trent Schneweis</Link> and Erick C.</Typography>
            </Grid>
        </Grid>
    </Container>)
};

export default Footer;
