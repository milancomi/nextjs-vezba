import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices';
const Index = (props) =>(
        <Layout>
            <div>
        <h1>Welcome to Next.js vezba</h1>
        {/* {props.time} */}
        <p>Check current bitcoint rate:</p>
        <Prices bpi={props.bpi}/>
        </div>
        </Layout>
);

Index.getInitialProps = async function(){
    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return{
        bpi: data.bpi,
        time: data.time.updated

    }
}
export default Index;