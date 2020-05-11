import data from './data/pokemon/pokemon.js';

//funcion ordenar
export const filterData = (select) => {
 let option = select.options[select.selectedIndex].value;
 let filter = "";
 //comparar según el valor
 if (option==="1-151"){
   filter = data.pokemon.sort((a,b)=>{
     return a.id - b.id
   })}else if (option==="151-1"){
     filter = data.pokemon.sort((a,b)=>{
       return b.id - a.id
     })}else if(option==="A-Z"){
       filter = data.pokemon.sort((a,b)=>{
         return a.name.localeCompare(b.name);
     })}else if (option==="Z-A"){
       filter = data.pokemon.sort((a,b)=>{
         return b.name.localeCompare(a.name);
     })}
  return filter;

};

//Función filtrar por tipo
export const filterType = (type) => {
let typeFilter = data.pokemon.filter(element => element.type.includes(type));
return typeFilter;
}
//Función filtrar por huevo
export const filterEggs = (egg) => {
  let eggsFilter = data.pokemon.filter( element => element.egg.includes(egg));
  return eggsFilter;
}

//devuelve pokemon por id al que le haces click
export const pkById = (idpk) => {
  let result = data.pokemon.find(element => {
    return element.id == idpk;

  });
  return result;

};