import * as React from 'react';
import { SvgIcon  as MaterialSVGIcon, SvgIconProps  } from '@material-ui/core';
export interface ISVGIconProps extends SvgIconProps {
}

const SVGIcon: React.FunctionComponent<ISVGIconProps> = (props) => {
    return <MaterialSVGIcon {...props} />;
};

export default SVGIcon;
