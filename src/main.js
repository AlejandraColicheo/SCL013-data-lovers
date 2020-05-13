import data from './data/pokemon/pokemon.js';
import {filterData, filterType, filterEggs, pkById} from './data.js';

//modal
const modal = () => {
    let query = document.querySelectorAll("div.cards");
    for (let i = 0; i <query.length; i++){
        query[i].addEventListener("click", () => {
        document.getElementById("modalContainer").innerHTML = "";
        let pokemon = pkById(query[i].getAttribute("value"));

    let cards= document.createElement("div");
    cards.className ="modalCards";
     cards.id = "modalCards";
     //crear boton cerrar x
     let span = document.createElement("span");
     span.className = "close";
     span.textContent = "X";
    //nombre del pokemon
    let name = document.createElement("h3");
    name.textContent = pokemon.name;
    //imagen
    let image = document.createElement("img");
    image.src =pokemon.img;
    //peso
    let weight = document.createElement("p");
    weight.className = "peso";
    weight.textContent = "Peso: "+pokemon.weight;
    //altura
    let height = document.createElement("p");
    height.className = "altura";
    height.textContent = "Altura: "+pokemon.height;
    //candy
    let candy = document.createElement("p");
    candy.className = "candy";
    candy.textContent = "Candy: "+pokemon.candy;        
            
    //asignando la variables appendchild agrega elementos a una lista
    cards.appendChild(span);
    cards.appendChild(name);
    cards.appendChild(image);
    cards.appendChild(weight);
    cards.appendChild(height);
    cards.appendChild(candy);
    //mostrar la tarjeta en html -> section (el container que hicimos)
    document.getElementById("modalContainer").appendChild(cards).innerHTML;
    let mod = document.getElementById("modalCards");
    let body = document.getElementsByTagName("body")[0];
    let x = document.getElementsByClassName("close")[0];
    let container = document.getElementsByClassName("container")[0];
    mod.style.display = "block";
    body.style.position = "static";
    body.style.overflow = "hidden";
    container.style = "pointer-events:none;"
    container.style.opacity = 0.5;
    x.onclick = function() {
        mod.style.display = "none";
        body.style.position = "inherit";
        body.style.overflow = "auto";
        container.style ="pointer-events:active;";
        container.style.opacity = 1;

    }
    
    });
    }
}


for (let i=0; i<data.pokemon.length; i++){
    //creandp tarjeta
    let cards= document.createElement("div");
    cards.className ="cards";
    cards.id = "cards";
    cards.setAttribute ("value", data.pokemon[i].id); //la creamos para utilizar el modal
   //nombre del pokemon
   let name = document.createElement("h3");
   name.textContent = data.pokemon[i].name;
   //imagen
   let image = document.createElement("img");
   image.src =data.pokemon[i].img;
   //numero
   let number = document.createElement("h4");
   number.textContent ="#" + data.pokemon[i].num;
   number.className = "number";
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
 modal();
// selecionar orden
const order = document.getElementById("order");
order.addEventListener("change", () =>{
    let oReady = filterData(order.value);
    document.getElementById("container").innerHTML="";
    for (let i=0; i<oReady.length; i++){
        let cards= document.createElement("div");
        cards.className ="cards";
         cards.id = "cards";
         cards.setAttribute ("value", oReady[i].id);
        //nombre del pokemon
        let name = document.createElement("h3");
        name.textContent = oReady[i].name;
        //imagen
        let image = document.createElement("img");
        image.src =oReady[i].img;
        //numero
        let number = document.createElement("h4");
        number.textContent ="#" + oReady[i].num;
        number.className = "number";
        //primer tipo de pokemon
        let type1 = document.createElement ("p");
        type1.textContent = oReady[i].type[0];
        type1.className = "type1";
        //segundo tipo pokemon
        let type2 = document.createElement ("p");
        type2.textContent = oReady[i].type[1];
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
    modal();
})
//seleccionar tipo
const types = document.getElementById("type");
types.addEventListener("change", () => {
let tfiltered = filterType(types.value);
document.getElementById("container").innerHTML=""; //con el comillas borras lo que estaba antes ( vacias el container)
for (let i=0; i<tfiltered.length; i++){
    let cards= document.createElement("div");
    cards.className ="cards";
     cards.id = "cards";
     cards.setAttribute ("value", tfiltered[i].id);
    //nombre del pokemon
    let name = document.createElement("h3");
    name.textContent = tfiltered[i].name;
    //imagen
    let image = document.createElement("img");
    image.src =tfiltered[i].img;
    //numero
    let number = document.createElement("h4");
    number.textContent ="#" + tfiltered[i].num;
    number.className = "number";
    //primer tipo de pokemon
    let type1 = document.createElement ("p");
    type1.textContent = tfiltered[i].type[0];
    type1.className = "type1";
    //segundo tipo pokemon
    let type2 = document.createElement ("p");
    type2.textContent = tfiltered[i].type[1];
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
modal();
})
//seleccionar huevos
const eggs = document.getElementById("eggs");
eggs.addEventListener("change",() => {
    let efiltered = filterEggs(eggs.value);
    document.getElementById("container").innerHTML=""; //con el comillas borras lo que estaba antes ( vacias el container)
for (let i=0; i<efiltered.length; i++){
    let cards= document.createElement("div");
    cards.className ="cards";
     cards.id = "cards";
     cards.setAttribute ("value", efiltered[i].id);
    //nombre del pokemon
    let name = document.createElement("h3");
    name.textContent = efiltered[i].name;
    //imagen
    let image = document.createElement("img");
    image.src =efiltered[i].img;
    //numero
    let number = document.createElement("h4");
    number.textContent ="#" + efiltered[i].num;
    number.className = "number";
    //primer tipo de pokemon
    let type1 = document.createElement ("p");
    type1.textContent = efiltered[i].type[0];
    type1.className = "type1";
    //segundo tipo pokemon
    let type2 = document.createElement ("p");
    type2.textContent = efiltered[i].type[1];
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
modal();
});
//Modal

