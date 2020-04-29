import data from './data/pokemon/pokemon.js'

for (let i=0; i<data.pokemon.length; i++){
    //creandp tarjeta
    let cards= document.createElement("div");
    cards.className ="cards";
    cards.id = "cards";
   //nombre de la tarjeta
   let name = document.createElement("h3");
   name.textContent = data.pokemon[i].name;
   //imagen
   let image = document.createElement("img");
   image.src =data.pokemon[i].img;
   //numero
   let number = document.createElement("h4");
   number.textContent ="#" + data.pokemon[i].num;
   cards.className = "number";
   //primer tipo de pokemon
   let type1 = document.createElement ("p");
   type1.textContent = data.pokemon[i].type[0];
   type1.className = "type1";
   //segundo tipo pokemon
   let type2 = document.createElement ("p");
   type2.textContent = data.pokemon[i].type[1];
   type2.className = "type2";
   //asignando la variables appendchild agrega elementos a una lista
   cards.appendChild(name);
   cards.appendChild(image);
   cards.appendChild(number);
   cards.appendChild(type1);
   cards.appendChild(type2);
   //mostrar la tarjeta en html -> section (el container que hicimos)
   document.getElementById("container").appendChild(cards).innerHTML;



}

