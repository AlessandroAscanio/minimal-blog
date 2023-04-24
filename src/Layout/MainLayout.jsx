import React from 'react';
import Bar from '../Components/Bar/Bar';
import Heading from 'src/Components/Heading/Heading';
import Footer from 'src/Components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Bar />
        <Heading />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
