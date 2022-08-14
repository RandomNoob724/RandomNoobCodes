import Layout from '../components/layouts/main';
import '../styles/global.css';
export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
}