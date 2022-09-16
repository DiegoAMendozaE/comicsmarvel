import Link from "next/link";
import Layout from "../components/Layout";
import style from "../styles/faq.module.css";

export default function Faq(){
    return (
        <>
            <Layout title='Fag'>
                <div className={style.faq}>
                    <h2>Faq</h2>
                    <div>
                        <h3>Marvel Comics</h3>
                        <p>informacion de la empresa </p>
                    </div>
                </div>
                
            </Layout>

        </>
    )
}