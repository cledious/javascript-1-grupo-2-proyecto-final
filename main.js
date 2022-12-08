//Creamos un array vacio para incgresar los objetos.



//==========================================//


let articulos = [];
let busquedas = []; 

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
      articulos.push(productos); //aqui ingresamos los objetos al array vacio.
      busquedas.push(productos);
      form.reset(); //el .reset lo que hace es que a la hora de enviar el formulario se limpie los espacios.
   }
}

//Creamos una funcion que nos va a permitir imprimir los datos.

function imprimir() {
  const productList = document.querySelector(".list-container") //devuelve el primer elemento que cumpla con lo que estamos indicando.

  const hoja = articulos.map(elementos => { //el .map lo que hace es recorrer el array y devolver un valor.
    return ` 
    <div>
    <p> Nombre de producto:  ${elementos.nombre} </p>
    <p> Precio: ₡ ${elementos.precio} </p>
    <p> Cantidad de producto: ${elementos.cantidad} </p>
    <p> Categoria: ${elementos.categoria} </p>
    <p> Descripción: ${elementos.descripcion} </p>
    <button class="button eliminar">Eliminar</button>
    </div>
    `
  }) // el return lo que realiza es retornar los datos ingresados a la finalizar la funcion.
  productList.innerHTML = hoja // .innerHTML lo que permite es imprimir los datos directamente en el HTML. 
}
//creamos funcion de eliminar

//==========================================//

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
  //console.log(formulario.value);
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();
  for(let busqueda of busquedas) {
      let nombre = busqueda.nombre.toLocaleLowerCase();
      if (nombre.indexOf(texto) !== -1){
          resultado.innerHTML += `
          <li>${busqueda.nombre}</li>
          `
      }
  }
  if(resultado.innerHTML === ''){
      resultado.innerHTML += `
      <li>producto no encontrado...</li>
      `
  }
}
boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup',filtrar);
filtrar();