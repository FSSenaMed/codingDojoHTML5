// Para Buscar elementos en el DOM

var el = document.getElementById('section1');
el.focus();

var els = document.getElementsByTagName('div');
els[0].focus();

var els = document.getElementsByClassName('section');
els[0].focus();




// ------------------------------------------------------

 // Para buscar elementos con el la sintaxis de CSS

 var els = document.querySelectorAll("ul li:nth-child(odd)");

 var tds = document.querySelectorAll("table.test > tr > td");

 var el = document.querySelector("table.test > tr > td"); // el == tds[0]