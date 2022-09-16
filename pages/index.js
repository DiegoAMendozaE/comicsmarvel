import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import { GetLatestItems } from '../services/itemService'
import Product from '../components/Product'
import stylePro from '../styles/product.module.css'
import { useState } from 'react'




export default function Home({ items }) {
  
  // console.log(items)

  const [usuarios,setUsuarios]=useState([]);     // busqueda de forma dinamica 
  const [buscar,setBuscar]=useState("");         //busqueda de forma estatica 
  

  const handleChange = async (e)=>{
    setBuscar(e.target.value);
    // console.log("Busqueda es "+ e.target.value)
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda)=>{ 
    const resultadosBusqueda=items.filter( (elemento)=>{
      if( elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) )
        return elemento;
    } );
    setUsuarios(resultadosBusqueda);
  }

  return (
    <>
       <Layout title="Heroe">
          <div className={styles.banner}>
            <div className={styles.bannerBackground}>
              <div className={styles.bannerInfo}>
                <h2>Character Search </h2>

                <div className={styles.box}>
                  <div className={styles.container}>
                  <div className={styles.icon} ><i class="fa-solid fa-magnifying-glass"></i></div>      

                    <input 
                      type="search" 
                      id="search" 
                      placeholder="Search..." 
                      value={buscar} 
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <h3>Result</h3>

          <div className={stylePro.items}> 

            { usuarios && usuarios.map( (item)=>(
              
              <Product key={item.id} item={item} showAs="item" />
            ) ) }
          </div>

      </Layout>

      <div>
         <div> ... </div>

      </div>
    </>
   
  )
}


export async function getStaticProps(){
  const res=await GetLatestItems();
  // console.log(res.data.results)
  // hacer la busqueda
  const re=res.data.results

  return {
    
      props: {
        items:re,
      }
    
  }

}