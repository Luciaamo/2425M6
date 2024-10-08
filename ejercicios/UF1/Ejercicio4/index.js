console.log("El fitxer main.js està vinculat correctament!");

const boton = document.getElementById('btn');

boton.addEventListener('click', function(){
    console.log('Has clic en el botón');
});

const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Formulario no enviado');

});

let nom = document.getElementById('nom').value;
let cognom1 = document.getElementById('cognom1').value;
let cognom2 = document.getElementById('cognom2').value;
let dni = document.getElementById('dni').value;
let url = document.getElementById('url').value;

console.log("Nom:", nom);
console.log("Primer cognom: ", cognom1);
console.log("Segon cognom: ", cognom2);
console.log("DNI:", dni);
console.log("URL de la imatge:", url);

