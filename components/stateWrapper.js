import { createContext, useContext, useState } from "react"

const AppContext= createContext({ //propiedades
    isOpen:false,                  //si la aplicacion esta abierta o no 
    items:[],                      // Guardamos la informacion de me gustas
    openLike:()=>{},
    closeLike:()=>{},
    addItemToLike :(item)=>{},
    getNumberOfItems: ()=>{},

});


export default function StateWrapper( {children} ){
    //aplicacion de constantes 
    const [isOpen,setIsOpen] = useState(false);
    const [items,setItems] = useState([]);
     // aplicacionde funciones
     function handleOpenLike(){
        setIsOpen(true);
    }

    function handleCloseLike(){
        setIsOpen(false);
    }
    function handleAddItemToLike(item){
        const temp =[...items];
        const found = temp.find(product => product.id === item.id);

        if(found){
            found.qty++;   //qty simplificar el manejo de unidades 
        }else{
            item.qty=1;
            temp.push(item);
        }
        setItems([...temp]);
    }
     //sumamos numero de elementos del array de links
     function handleNumberOfItems(){
        const total = items.reduce( (acc, item)=> acc + item.qty, 0 );
        return total;
     }

    return <AppContext.Provider 
                value={{
                    isOpen,
                    items,
                    openLike: handleOpenLike,
                    closeLike: handleCloseLike,
                    addItemToLike: handleAddItemToLike,
                    getNumberOfItems: handleNumberOfItems,
                }}
            > {children} </AppContext.Provider>
}
export function useAppContext(){
    return useContext(AppContext);
}
