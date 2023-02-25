
console.log("Hola mundo! Mi primer proyecto de desarrollo web. Gracias por visitarlo.")

function colgate_web() {
  if (confirm("¿Desea ir a la web de Colgate?")) {
    window.open('https://www.colgatepalmolive.com.ar/who-we-are');
  } 
}

function telecom_web() {
  if (confirm("¿Desea ir a la web de Telecom?")) {
    window.open('https://institucional.telecom.com.ar/acerca-de-telecom');
  } 
}

function rodinar_web() {
  if (confirm("¿Desea ir a la web de Rodinar?")) {
    window.open('https://www.rodinar.com.ar/about.html');
  } 
}

function mobilem_web() {
  if (confirm("¿Desea ir a la web de Mobilem?")) {
    window.open('https://mobilem.com.ar/nosotros');
  } 
}

function abre_texto_puesto1() {
  var x = document.getElementById("puesto1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

let file = "./JS/colgate.txt"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("colgate-txt").innerHTML = y);
} 
// Testeado correctamente con Live Server de VSC. Cuando ejecuto index.html desde el explorador
// de archivos en Windows, los navegadores no cargan los archivos txt en modo offline
// por CORS policy (según la descripción de la consola). Si esto es una impericia de mi parte,
// aceptaré el error y lo corregiré en la segunda instancia de evaluación sin invocar Fetch API.

function abre_texto_puesto2() {
  var x = document.getElementById("puesto2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

let file = "./JS/telecom.txt"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("telecom-txt").innerHTML = y);
} 


function abre_texto_puesto3() {
  var x = document.getElementById("puesto3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  let file = "./JS/rodinar.txt"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("rodinar-txt").innerHTML = y);
}   

function abre_texto_puesto4() {
  var x = document.getElementById("puesto4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  let file = "./JS/mobilem.txt"

  fetch (file)
  .then(x => x.text())
  .then(y => document.getElementById("mobilem-txt").innerHTML = y);
}   

  function wapp() {
    window.open('https://api.whatsapp.com/send?phone=54951111234&text=Hola%20Julio!%20Te%20contacto%20por%20tu%20curriculum');
  }  
  
  function linkedin() {
    window.open('https://ar.linkedin.com/in/julio-varela-2d83ac91');
  }  
  
  function facebook() {
    window.open('https://www.facebook.com/profile.php?id=100090653523626');
  }  
  

  function func_office() {
    var elem = document.getElementById("barra_office");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function func_sumacrm() {
    var elem = document.getElementById("barra_sumacrm");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function func_evernote() {
    var elem = document.getElementById("barra_evernote");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  
  function func_googledocs() {
    var elem = document.getElementById("barra_googledocs");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function func_trello() {
    var elem = document.getElementById("barra_trello");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function func_ingles() {
    var elem = document.getElementById("barra_ingles");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

 