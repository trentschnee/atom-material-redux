import * as React from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

import NotFoundTemplate from '../../templates/NotFound';


// TODO: Make it have a main layout for pages?
// Up to the page to determine what to stick where
const NotFound: React.FunctionComponent = () => {
  // On loan, fetch posts

  return (

    <NotFoundTemplate header={<Header />} footer={<Footer />}>
      Page Not found
    </NotFoundTemplate>

  )
};

export default NotFound;
