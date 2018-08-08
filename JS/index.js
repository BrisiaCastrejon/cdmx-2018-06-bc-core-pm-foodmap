const url = 'https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-pm-foodmap/FoodVersion/DATA/restaurantes.json'
fetch(url)
  // se asigna la obtencion en formato JSON
    .then(data => data.json())
    // se le asigna nombre a la data
    .then(restaurantes => {
    console.log(restaurantes);
    getOptions(restaurantes);
    getFavorites(restaurantes);
    getCloser(restaurantes);
    })
    .catch(error => {
    //console.log('Este es un mensaje para reportar error');
    });

let elComedor = document.getElementById('elComedor');
let cercaDeMi = document.getElementById('cercaDeMi');
let loMasPopular = document.getElementById('loMasPopular');
let buscar = document.getElementById('buscar');
let buscador = document.getElementById('buscador');
let home = document.getElementById('home');
let name;
let map;
let address;
let specialty;
let score;
let phone;
let citykey;
let reference; 
