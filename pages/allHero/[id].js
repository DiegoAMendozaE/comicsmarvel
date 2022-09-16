import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage( { productInfo } ){
    return(
        <Layout>
            <Product item={productInfo} showAs="Page" />
        </Layout>
    )
}

//preparando rutas dinamicas = solo tomamos las rutas y las generamos
export async function getStaticPaths(){
    const paths= await getPathsFromIds();
                       
    return{
        paths:paths,
        fallback:false, //si la ruta no exite envia 404
    }
}

// identificamos en que ruta estamos 
export async function getStaticProps({ params }){
    const id=params.id;
    const product = await getItemData(id);  //tenemos la informacion del id buscado
    return {
        props:{
            productInfo: product,
        },
    };
}