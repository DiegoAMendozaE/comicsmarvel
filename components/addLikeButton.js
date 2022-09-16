import { useAppContext } from "./stateWrapper"
import style from "../styles/addLikeButton.module.css"

export default function AddLikeButton({item}){
    const like=useAppContext();

    function handleClick(){
        like.addItemToLike(item);
        like.openLike();
    }

    return <button className={style.addLikeButton} onClick={handleClick}> Like + </button>
}