import Link from "next/link"
import Image from "next/image";
import style from "../styles/product.module.css"
import { convertToPath } from "../lib/utils";
import AddLikeButton from "./addLikeButton";

export default function Product( {item, showAs, qty} ){ //showAs es la plataforma por la cual se va a visualizar
    //  console.log(item)
    if(showAs =="Page"){
        return( 
            <article className={style.page}>
                 <div className={style.image}>
                     <Image src={`${item.data.thumbnail.path}.${item.data.thumbnail.extension}`}   width={300} height={300}   />

                 </div>
                 <section className={style.info}>
                    <div > 
                        <div><h3>{item.data.name}</h3></div>
                        <div className={style.description}>
                            descripcion{item.data.name}
                        </div>
                    </div> 
                    <div className={style.description}>
                            <AddLikeButton item={item.data}/> 

                    </div>
                 </section>
                 
            </article>
           
        )
    }

    else if(showAs =="ListItem"){
        return( 
            <section className={style.listItem}>
                <div>     
                    <Image 
                        // src={`${item.data.thumbnail.path}.${item.data.thumbnail.extension}`}   
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}   

                        width={70} 
                        height={70} 
                    />
                </div>
                <div className={style.listItemS}>
                        
                        <div><h3> {item.name}</h3></div>
                        <div><h6> descripcion {item.name} </h6></div>
                        { (qty === 0)? ("") : (<div> {qty} likes    </div>)  }
                        {/* { (qty === 0)? ("") : (<div> (qtl>1)?(<div> {qty} likes </div>):(<div> {qty} likesss</div>) </div>)  } */}

                </div>
            </section>
            
        
        )
    }

    
    return (
        <div className={style.item}>
            <div>
                <Link href={`/allHero/${convertToPath(item.name)}`}><a> 

                        <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`}   width={500} height={500}   />
                    </a></Link>
            </div>
          
            <div>
                <h3> <Link href={`/allHero/url-a-mi-componente`}><a> 
                        {item.name} 
                    </a></Link>
                </h3>
            </div>
          
            <div>informacion especial {item.name}</div>
          
            <div>
                <AddLikeButton item={item}/> 
            </div>
        </div>
    )
}