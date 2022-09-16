import Product from "./Product";
import { useAppContext } from "./stateWrapper"
import style from "../styles/shLikes.module.css"

export default function ShLike(){
    const likes= useAppContext(); //HOOK

    function handleCloseLike(){
        likes.closeLike();
        
    }

    return (
            <div className={style.shLike} style={{display:likes.isOpen? 'block':"none"}}> 
                 <button onClick={handleCloseLike}  className={style.close} >Close</button> 
                 { (likes.items.length ===0 ) ?
                     (<div className={style.empty}> My likes list is empty</div>) 
                        :
                        (<>
                            <h3>Yout likes</h3>
                            <div>
                                {likes.items.map((item)=> (
                                <Product key={item.id} item={item} showAs="ListItem" qty={item.qty} /> 
                                ) )}
                            </div>
                        </>)
                 }

                 
                 
            </div>
    )
}