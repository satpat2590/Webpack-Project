import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head';


function Hello() {
    return (

    <Layout>
        <Head>
            <title>First Post!</title>
        </Head>
            <h1>Hello from Satyam's House</h1>
            <br></br>            
            <Link href="/">Home</Link>
    </Layout>
    );
};




export default Hello; 