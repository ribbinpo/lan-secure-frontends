import '../styles/globals.css';
import Layout from '../components/layouts';

const authenticateRoute = ['/login', '/register'];

function MyApp({ Component, pageProps, ...appProps }) {
  if (authenticateRoute.includes(appProps.router.pathname)) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
