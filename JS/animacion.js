/* const init = () => {
  let container = document.getElementById('container');
  let loading = 0;
  let perrito = setInterval(frame, 64);

  let frame = () => {
    if (loading == 100) {
      clearInterval(perrito);
      window.open("../VIEWS/view1.html", "_self");      
    }
    else {
      loading = loading+1;
      if (loading==90) {
        container.style.animation = "fadeout 5s ease";        
      }
    }
  }
} */
(function(){
 
  var preload = document.getElementById("preload");
  var loading = 0;
  var id = setInterval(frame, 64);
 
  function frame(){
   if(loading == 50) {
    clearInterval(id);
    window.open("../views/view1.html", "_self");
   }
   else {
    loading = loading + 1;
    if(loading == 40) {
     preload.style.animation = "fadeout 1s ease";
    }
   }
  } 
 })();

 
 
   


