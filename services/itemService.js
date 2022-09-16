export async function GetItems(){
    try {
        // const request =await fetch('http://localhost:3000/api/items')
        const request =await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fd3e45ae697e45dba747085111d0f064&hash=7f0481baf8f8f56eb3ffa9d233556c72')
        const items = await request.json();
        return items;
        
    } catch (error) {
        console.log(error)
    }
}

//reemplazar esta funcion por las funciones de allaHero/index.js para seccionar
export async function GetLatestItems(){
    const items=await GetItems();
     return items


}