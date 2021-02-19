import { Typography } from '@material-ui/core';
import * as React from 'react';

interface IExcerptProps {

    description: string,
    length: number
}

const Excerpt: React.FunctionComponent<IExcerptProps> = ({ description, length }) => {
    return <Typography variant="body2" color="textSecondary" component="p">
        {description.slice(0, length) }...
    </Typography>
};

export default Excerpt;
