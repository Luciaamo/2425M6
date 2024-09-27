const randomNumber = Math.floor(Math.random() * 50); 
console.log(randomNumber);

document.querySelector('#miElement').innerHTML = "<b>Hola, món!</b>";

const fruits = ["Poma", "Plàtan", "Taronja"];
console.log(fruits[1]);

const quiz = [
    ["Quina és la capital de França?", "París", "Londres", "Berlín", "Madrid", 1],
    ["Quina és la capital d'Espanya?", "Lisboa", "Madrid", "Roma", "Atenes", 2],
    ["Quina és la capital d'Itàlia?", "Roma", "París", "Madrid", "Lisboa", 1]
];
  
  console.log(quiz[0][0]);
  console.log(quiz[1][2]); 
  console.log(quiz[2][1]);  

function saludar(nom) {
    return "Hola, " + nom + "!";
}
console.log(saludar("Lucía"));  

document.querySelector('#boton').addEventListener('click', function() {
    alert("Has fet clic!");
  });

const temperatura = 30;
  if (temperatura > 25) {
        console.log("Fa calor");
  } else {
        console.log("Fa fred");
}

const missatge = "";
if (missatge === "") {
  console.log("El missatge està buit.");
} else {
  console.log("Missatge vàlid.");
}
