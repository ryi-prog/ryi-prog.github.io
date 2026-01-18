				curso 15

// de esa forma capturo todos los div del dom
var nombre = document.getElementsByTagName('div');

// de esta forma los id
var nombre = document.getElementById('nombreId');

// y de esta ultima por clase
var nombre = document.getElementsByClassName('nombreClase');



				curso 16 (crear nodos (elementos))
// paso 1 - crear el elemento
var caja = document.createElement('div');
// paso 2 crear el texto del elemento.
var contenido = document.createTextNode('asi creo el texto del div');
// paso 3 añadir el texto al elemento
caja.appendChild(contenido);
// paso 4 añadirle las clases o id.
caja.setAttribute('nombreClass', 'nombreId');
// paso 5 agregar el elemento al documento.
var conteiner = document.getElementById('conteiner');
conteiner.appendChild(caja);


				curso 17 (modificar, remplezar o eliminar un nodo)

// asi cambio clase y id
caja.id = 'nombreId';
caja.className = 'nombreClass';

//conociendo el elemento padre
var padre = caja.parentNode;

// asi pongo un elemento primero que otros
padre.insertBefore('ID O CLASS');

// remplazar
padre.replaceChild(nombre de lo que quiero remplazar ejemplo: caja, .y luego lo que remplazo: cajas[3])
;
padre.replaceChild(caja, cajas[3]);

// eliminar elemento.
conteiner.removeChild(cajas[3]);


		 		curso 18 eventos 

function saludo() {
	alert('hola');
}
saludo();

var botonSaludar = document.getElementById('ID DEL DIV');
botonSaludar.addEventListener('click', saludo);

// crear div con un click (solo se guardan con bases de datos)
function crearCaja() {
	// busco donde lo voy a guardar al div. (en este cajo en conteiner)
	var contenedor = document.getElementById('conteiner');

	// creo el div
	var caja = document.createElement('div');
	// le agrego una clase el div
	caja.className = 'caja';
	// agrego el div al contenedor.
	contenedor.appendChild(caja);
}

var botonClick = document.getElementById('id del boton');
botonClick.addEventListener('click', crearCaja);


				curso 19 (cambiar clases a elementos)

// si el evento es para 1 solo elemento:
var cajas = document.getElementsByClassName('caja');

function color() {
	caja[0].classList.toggle('clase2')
}

caja[0].addEventListener('click', color);

// si el evento es para todos los elementos:
function color(){
	this.classList.toggle('clase2');
}
for(var i = 0; i < cajas.length, i++) {
	cajas[i].addEventListener('click', clase2)
}