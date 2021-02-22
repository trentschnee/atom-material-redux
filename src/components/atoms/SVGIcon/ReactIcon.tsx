import * as React from 'react';
import SVGIcon, { ISVGIconProps } from '.';

interface IReactIconProps  extends ISVGIconProps{
}

const ReactIcon: React.FunctionComponent<IReactIconProps> = (props) => {
    return (<SVGIcon viewBox="0 0 64.734 57.734">
      <path d="M24.918 27.048c0-3.166 2.55-5.715 5.715-5.715s5.715 2.55 5.715 5.715-2.55 5.715-5.715 5.715-5.715-2.55-5.715-5.715z" stroke="none" fill="#00d8ff"/><g stroke="#00d8ff" fill="none" stroke-width="2.734"><path d="M30.633 15.428c7.673 0 14.8 1.1 20.176 2.95 6.476 2.23 10.457 5.61 10.457 8.67 0 3.2-4.22 6.78-11.174 9.083-5.257 1.743-12.176 2.65-19.46 2.65-7.468 0-14.54-.853-19.856-2.67C4.05 33.812 0 30.176 0 27.048c0-3.035 3.802-6.388 10.186-8.614 5.395-1.88 12.7-3.006 20.447-3.006z"/><path d="M20.517 21.272C24.35 14.625 28.865 9 33.153 5.268 38.32.772 43.236-.99 45.887.54c2.762 1.593 3.764 7.042 2.286 14.217-1.117 5.425-3.786 11.872-7.425 18.182-3.73 6.47-8.003 12.17-12.232 15.866-5.352 4.68-10.526 6.372-13.236 4.81-2.63-1.515-3.635-6.484-2.373-13.127 1.066-5.613 3.74-12.502 7.6-19.214z"/><path d="M20.528 32.955c-3.844-6.64-6.462-13.36-7.553-18.94C11.66 7.294 12.6 2.156 15.238.622c2.76-1.598 7.98.256 13.458 5.12 4.142 3.677 8.395 9.21 12.044 15.513 3.742 6.463 6.546 13 7.637 18.52 1.38 6.973.262 12.3-2.444 13.87-2.627 1.52-7.433-.09-12.56-4.5-4.33-3.725-8.963-9.484-12.846-16.2z"/></g>
    </SVGIcon>)
};

export default ReactIcon;