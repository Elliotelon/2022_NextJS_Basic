import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
