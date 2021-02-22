import { Grid, Link } from '@material-ui/core';
import * as React from 'react';
import MaterialUIIcon from '../../atoms/SVGIcon/MaterialUIIcon';
import ReactIcon from '../../atoms/SVGIcon/ReactIcon';
import ReactRouterDomIcon from '../../atoms/SVGIcon/ReactRouterDomIcon';

interface IMadeWithProps {
}

const MadeWith: React.FunctionComponent<IMadeWithProps> = (props) => {
    return <Grid container spacing={1} justify="center">
        <Grid item>
            <Link href="https://reactjs.org/">
                <ReactIcon titleAccess="React JS" />
            </Link>
        </Grid>
        <Grid item>
            <Link href="https://reactrouter.com/">
                <ReactRouterDomIcon titleAccess="React Router Dom" />
            </Link>
        </Grid>
        <Grid item>
            <Link href="https://material-ui.com/">
                <MaterialUIIcon titleAccess="Material UI" />
            </Link>
        </Grid>
    </Grid>
};

export default MadeWith;
