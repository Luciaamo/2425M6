console.log("El fitxer main.js està vinculat correctament!");

document.getElementById("btn").addEventListener("click", function() {

    let nom = document.getElementById("nom").value;
    let cognom1 = document.getElementById("cognom1").value;
    let cognom2 = document.getElementById("cognom2").value;
    let dni = document.getElementById("dni").value;
    let url = document.getElementById("url").value;

    console.log("Nombre:", nom);
    console.log("Primer Apellido:", cognom1);
    console.log("Segundo Apellido:", cognom2);
    console.log("DNI:", dni);
    console.log("URL Imagen:", url);

    document.getElementById("url").setAttribute("src", url);

});


