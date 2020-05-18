//import data from './data/pokemon/pokemon.js';

//funcion ordenar
export const filterData = (select,data) => {
 //let option = select.options[select.selectedIndex].value; // pasarlo a main
 let filter = "";
 //comparar según el valor
 if (select==="1-151"){
   filter = data.pokemon.sort((a,b)=>{
     return a.id - b.id
   })}else if (select==="151-1"){
     filter = data.pokemon.sort((a,b)=>{
       return b.id - a.id
     })}else if(select==="A-Z"){
       filter = data.pokemon.sort((a,b)=>{
         return a.name.localeCompare(b.name);
     })}else if (select==="Z-A"){
       filter = data.pokemon.sort((a,b)=>{
         return b.name.localeCompare(a.name);
     })}
  return filter;

};

//Función filtrar por tipo
export const filterType = (types, data) => {
let typeFilter = data.pokemon.filter(element => element.type.includes(types));
return typeFilter;
}
//Función filtrar por huevo
export const filterEggs = (egg, data) => {
  let eggsFilter = data.pokemon.filter( element => element.egg.includes(egg));
  return eggsFilter;
}

//devuelve pokemon por id al que le haces click
export const pkById = (idpk,data) => {
  let result = data.pokemon.find(element => {
    return element.id == idpk;

  });
  return result;

};