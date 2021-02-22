import * as React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Subscribe from '../../organisms/Subscribe';

import NotFoundTemplate from '../../templates/NotFound';

interface INotFoundProps {

}
// TODO: Make it have a main layout for pages?
// Up to the page to determine what to stick where
const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  // On loan, fetch posts

  return (

    <NotFoundTemplate header={<Header />} footer={<Footer />}>
      Page Not found
    </NotFoundTemplate>

  )
};

export default NotFound;
