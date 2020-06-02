import React from 'react';
import Head from 'next/head';
import Header from './Header';
export default props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        
      </Head>
      <Header />
    </div>
  );
};
