console.log('Hola sesión 3');

// CAPTURANDO BOTONES
const boton1 = document.querySelector("#btn1")
console.log('boton1', boton1);

// CAPTURAMOS EL H1 Y MIRAMPS ÑP QUE HAY DENTRO
const titulo = document.querySelector("h1");
console.log('h1', titulo);
console.log('Interior del h1:', titulo.innerHTML);

// CAMBIAMOS EL INYERIOR DEL H1 CON UN NUEVO CÓDIGO HTML
titulo.innerHTML = "<em>Otro Título</em>"

// ESCUCHAMOS EVENTO CLICK DEL BOTON1
boton1.addEventListener("click", fnBoton1)
function fnBoton1(){
    console.log("Click en botón 1");
}

//LO MISMO PARA BOTÓN 2 PERO RESUMIDA
document.querySelector("#btn2").addEventListener("mouseover", function(){
    console.log("Ratón sobre el botón 2");
})

//EVALUANDO TEXTOS
const operacion = "2+3"
console.log("operación: ", operacion, window.eval(operacion));
console.log("El resultado es: ", eval(operacion));