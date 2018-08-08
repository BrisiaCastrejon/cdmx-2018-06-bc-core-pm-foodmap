buscar.addEventListener('click', event => {
  alert("buscar");
})
home.addEventListener('click', event =>{
  location.href = '../views/view1.html';
})

const getOptions = (restaurantes) => {
  let printAll = '';
  let localsMenu = document.getElementById('container');
  let modalAdress = document.getElementById('adress');
  let modalScore = document.getElementById('score');
  let modalImage = document.getElementById('mapImage');
  let modalName = document.getElementById('nombre');
   elComedor.addEventListener('click', event => {
    for (place in restaurantes) {
      let arregloLocales = restaurantes.place;
      let cities = Object.values(arregloLocales);
      cities.forEach((city) => {
       let ciudad = city;
       ciudad.forEach((local) => {
         name = local.name;
         map = local.map;
         address = local.address;
         specialty = local.specialty;
         score = local.score;
         phone = local.phone;
         citykey = local.citykey
         reference = local.reference;
         printAll +=  `<section	class="row	justify-content-md-center">
          <section	class="col	col-md-5 col-lg-10 " data-toggle="modal" data-target="#exampleModalCenter" id="modalMapa">
            <img class="card-img-top" width="100%" src="../IMAGES/logo-clean.jpg" alt="Card image cap">
            <section	class="col-md-auto"> 
              <p>Restaurant:${name}</p>
              <p>Direccion:${address}</p>
              <p>Telefono:${phone}</p>
              <p>Puntuacion:${score}<span class="icon-heart"></span></p>    
            </section>
          </section>				
          </section>`;
        // modalAdress.textContent = address;
        // modalScore.textContent = score;
        // modalImage.setAttribute('src', map + '?type=large');
        // modalName.textContent = name;
       });  
       localsMenu.innerHTML = printAll;
        modalAdress.textContent = address;
        modalScore.textContent = score;
        modalImage.setAttribute('src', map + '?type=large');
        modalName.textContent = name;
      });
    };
  })
};

const getFavorites = (restaurantes) => {
  let newFavorites = [];
  let favorites;
  for (place in restaurantes) {
    let arregloLocales = restaurantes.place;
    let cities = Object.values(arregloLocales);
    cities.forEach((city) => {
     let ciudad = city;
     ciudad.forEach((local) => {
      name = local.name;
      map = local.map;
      address = local.address;
      specialty = local.specialty;
      score = local.score;
    if (score > 3) {
      favorites = "Los usuarios lo han calificado bien"          
    } else {
      favorites = "Los usuarios no lo han calificado bien "
    }
      phone = local.phone;
      citykey = local.citykey;
      reference = local.reference; 
      newFavorites.push({
        "name" : name,
        "map" : map,
        "address" : address,
        "score": score,
        "opinion" :favorites,
        "phone": phone,
        "citykey": citykey,
        "reference": reference
      })          
    })     
  })
  }
  printFavorites(newFavorites);
  printCloser(newFavorites);
  // console.log(newFavorites);  
  return newFavorites;
}

const printFavorites = (newFavorites) => {
  let print = '';
  let modalAdress = document.getElementById('adress');
  let modalScore = document.getElementById('score');
  let modalImage = document.getElementById('mapImage');
  let modalName = document.getElementById('nombre');
  let localFav = document.getElementById('container');  
  loMasPopular.addEventListener('click', event => {
  let favorites = Object.values(newFavorites);  
   for (cities of favorites) {
     let allFav = cities.opinion;
     if (allFav === "Los usuarios lo han calificado bien") {
       print += `<section	class="row	justify-content-md-center">
       <section	class="col	col-md-5 col-lg-10 " data-toggle="modal" data-target="#exampleModalCenter" id="modalMapa">
         <img class="card-img-top" width="100%" src="../IMAGES/logo-clean.jpg" alt="Card image cap">
         <section	class="col-md-auto"> 
           <p>Restaurant:${name}</p>
           <p>Direccion:${address}</p>
           <p>Telefono:${phone}</p>
           <p>Puntuacion:${score}<span class="icon-heart"></span></p>    
         </section>
       </section>				
       </section>`;
     }
     localFav.innerHTML = print;
      modalAdress.textContent = address;
      modalScore.textContent = score;
      modalImage.setAttribute('src', map + '?type=large');
      modalName.textContent = name;            
  }
})
}
const printCloser = (newFavorites) => {
  let prints = '';
  let modalAdress = document.getElementById('adress');
  let modalScore = document.getElementById('score');
  let modalImage = document.getElementById('mapImage');
  let modalName = document.getElementById('nombre');
  let localCloser = document.getElementById('container');  
  cercaDeMi.addEventListener('click', event => {
    let closers = Object.values(newFavorites);
    closers.forEach((reference) =>{
      let allCloser = reference.reference;  
      if (allCloser === "https://www.timeoutmexico.mx/ciudad-de-mexico/restaurantes-cafes/top-10-restaurantes-en-el-df") {
       prints += `<section	class="row	justify-content-md-center">
       <section	class="col	col-md-5 col-lg-10 " data-toggle="modal" data-target="#exampleModalCenter" id="modalMapa">
         <img class="card-img-top" width="100%" src="../IMAGES/logo-clean.jpg" alt="Card image cap">
         <section	class="col-md-auto"> 
           <p>Restaurant:${name}</p>
           <p>Direccion:${address}</p>
           <p>Telefono:${phone}</p>
           <p>Puntuacion:${score}<span class="icon-heart"></span></p>    
         </section>
       </section>				
       </section>`;
     }
      localCloser.innerHTML = prints;
      modalAdress.textContent = address;
      modalScore.textContent = score;
      modalImage.setAttribute('src', map + '?type=large');
      modalName.textContent = name;
    })   
})
}
