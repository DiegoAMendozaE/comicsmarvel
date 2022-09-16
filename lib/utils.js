import { GetItems } from "../services/itemService";


export async function getPathsFromIds(){  //pbtenemos los id de todos los objetos
    const items = await GetItems();
    const itemsa= items.data.results;

    // console.log("estamos aca este es el dato :")
    // console.log(itemsa)
    const ids = itemsa.map( (item) =>{

        return{     //regresamos un objeto de 
            params:{
                id: convertToPath(item.name),
                // id: item.id.toString(),
            }
        } ;

    });
    return ids;
    
}

export async function getItemData( id ){
    const itemsa = await GetItems();
    const items= itemsa.data.results;
    const product = items.find( item => convertToPath(item.name) === id );

    return {
        id:id,
        data:product,
    };
}

export function convertToPath(title){               //convertimos 
    return title.toLowerCase().replace(/\s/g,'-');  //encuentra los espacios vacios de un string y los remplazamos por -

}