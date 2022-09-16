import Link from "next/link"
import Layout from "../../components/Layout"
import { GetItems } from "../../services/itemService";
import Image from "next/image";
import Product from "../../components/Product";
import styleItems from "../../styles/product.module.css"


export default function index({ items }){
    const itemsa= items.data.results;
     //console.log(itemsa);
    //  console.log(itemsa[0].id);

    return(
        <>
            <Layout title='AllHeroes'>
                <h1>All Heroes</h1>
                <div className={styleItems.items}>
                    {itemsa && itemsa.map( (item)=> (
                                <Product  key={item.id} item={item} showAs={"Default"} />
                        ) ) }
                </div>
                
            </Layout>
        </>
    );

}

export async function getStaticProps(){     ///funcion de obtencion de datos estatica  //getServerSideProps(){} hace el fetch lo hace cada vez que el usuariolo pide
    const res=await GetItems();
    // console.log("  🦑🦑🦑holaaaaaa esta es la info de la api  🦑🦑🦑 :")
    // console.log(res.data);

    return{                                 // si empre se retorna con un objeto
        props:{ items: res, },
    };
}
