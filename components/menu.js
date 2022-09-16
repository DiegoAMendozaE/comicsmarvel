import Link from "next/link";
import style from "../styles/menu.module.css"
import { useAppContext } from "./stateWrapper";

export default function Menu(){
    const like = useAppContext();

    function handleOpenLike(){
        like.openLike();
    }
    return(
        <nav className={style.menu}>
            <div>
                <Link href='/'><a className={style.link}> Heroe </a></Link>
                <Link href='/allHero'><a className={style.link}> All Heroes </a></Link>
                <Link href='/faq'><a className={style.link}> Questions About Marvel </a></Link>
            </div>            
            <div>
                <a href="#" className={style.link} onClick={handleOpenLike}> 
                    Likes ({like.getNumberOfItems()})
                </a>
            </div>            
        </nav>
    )
}