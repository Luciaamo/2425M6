console.log("Calculadora inicialitzada!");

document.getElementById('btn1').addEventListener('click', function() {
    console.log('1');
});

document.getElementById('btn2').addEventListener('click', function() {
  console.log('2');
});

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '1';
});

document.getElementById('btn2').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '2';
});

let entradaActual = '';

document.getElementById('btn1').addEventListener('click', function() {
  entradaActual += '1';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btnSuma').addEventListener('click', function() {
    entradaActual += '+';
    document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btnIgual').addEventListener('click', function() {
    const resultat = eval(entradaActual);
    console.log('Resultat:', resultat); 
    document.getElementById('pantalla').textContent = resultat;
});

document.getElementById('btnBorrar').addEventListener('click', function() {
    entradaActual = '';
    document.getElementById('pantalla').textContent = '0';
});

document.getElementById('btnIgual').addEventListener('click', function() {
    try {
      if (entradaActual !== '') {
        const resultat = eval(entradaActual);
        document.getElementById('pantalla').textContent = resultat;
      } else {
        console.log('No hi ha res a calcular');
      }
    } catch (error) {
      console.log('Error en l\'operació:', error);
      document.getElementById('pantalla').textContent = 'Error';
    }
});
  

