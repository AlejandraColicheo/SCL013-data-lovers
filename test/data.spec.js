/*import { filterData, filterType, filterEggs } from '../src/data.js'; 


describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
import {filterData, filterType, filterEggs} from '../src/data.js'; 
const pokeDesordenados = [
  {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
  },
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
  },
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",    
  }];

const pokeOrdenados = [

  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
  }, 
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",    
  },
  {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
  }];

describe('filterData', () => {
  test('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  test('returns pokemones ordenados de A-Z', () => {
    //   expect(filterData(//quiero regresar)).toBe(lo que deberia regresar);
    expect(filterData(pokeOrdenados)).toBe(pokeOrdenados);
  });

  test('returns pokemones ordenados de Z-A', () => {
    expect(filterData(pokeDesordenados, 'name')).toStrictEqual(pokeOrdenados.reverse());
  });
});


describe('filterType', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  test('retorna pokemon por tipo', () => {
    expect(filterType(pokeDesordenados, 'type', 'Grass').length).toBe(3);
  });

});

describe('filterEggs', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  test('retorna pokemon por huevo', () => {
    expect(filterEggs(pokeDesordenados, 'egg', '2 km').length).toBe(1);
  });

});

