//Creamos un array vacio para incgresar los objetos.

let articulos = [];


const form = document.getElementById("lista");

//Este evento lo que realiza es que los productos se agregen a la hora de tocar el boton de submit.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregar() //funcion de agregar.
  imprimir() //funcion de imprimir.
})

//Creamos una funcion que nos va a permitir ingresar los datos.

function agregar() {
  const nombrevalor = document.getElementById("nombre").value;
  const datos = [...form]
  const productos = {} //este es el lugar donde se van a ir ingresando los objetos.
  if (articulos.some(articulo => articulo.nombre == nombrevalor)) { // Realizamos un some que es un metodo de los arrays la cual recorre y valida al mismo tiempo los datos del arrya.
    alert("El producto se encuentra repetido."); //Esta alerta se activa si campo nombre esta repetido.
  }else{
    datos.forEach(info => { //el forEach recorre el array pero no devuelve nada.
        if (info.name && info.name != "enviar") { //En esta validacion si el nombre de los names es diferente al name enviar entonces agrege los datos.
          productos[info.name] = info.value;
        }
      })
      articulos.push(productos) //aqui ingresamos los objetos al array vacio.
      form.reset(); //el .reset lo que hace es que a la hora de enviar el formulario se limpie los espacios.
  }
}
