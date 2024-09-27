console.log("Calculadora inicialitzada!");

document.getElementById('btn1').addEventListener('click', function() {
    console.log('1');
});

document.getElementById('btn2').addEventListener('click', function() {
  console.log('2');
});

document.getElementById('btn3').addEventListener('click', function() {
  console.log('3');
});

document.getElementById('btn4').addEventListener('click', function() {
  console.log('4');
});

document.getElementById('btn5').addEventListener('click', function() {
  console.log('5');
});

document.getElementById('btn6').addEventListener('click', function() {
  console.log('6');
});

document.getElementById('btn7').addEventListener('click', function() {
  console.log('7');
});

document.getElementById('btn8').addEventListener('click', function() {
  console.log('8');
});

document.getElementById('btn9').addEventListener('click', function() {
  console.log('9');
});

document.getElementById('btn0').addEventListener('click', function() {
  console.log('0');
});

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '1';
});

document.getElementById('btn2').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '2';
});

document.getElementById('btn3').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '3';
});

document.getElementById('btn4').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '4';
});

document.getElementById('btn5').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '5';
});

document.getElementById('btn6').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '6';
});

document.getElementById('btn7').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '7';
});

document.getElementById('btn8').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '8';
});

document.getElementById('btn9').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '9';
});

document.getElementById('btn0').addEventListener('click', function() {
  document.getElementById('pantalla').textContent = '0';
});

let entradaActual = '';

document.getElementById('btn1').addEventListener('click', function() {
  entradaActual += '1';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn2').addEventListener('click', function() {
  entradaActual += '2';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn3').addEventListener('click', function() {
  entradaActual += '3';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn4').addEventListener('click', function() {
  entradaActual += '4';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn5').addEventListener('click', function() {
  entradaActual += '5';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn6').addEventListener('click', function() {
  entradaActual += '6';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn7').addEventListener('click', function() {
  entradaActual += '7';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn8').addEventListener('click', function() {
  entradaActual += '8';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn9').addEventListener('click', function() {
  entradaActual += '9';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btn0').addEventListener('click', function() {
  entradaActual += '0';
  document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btnSuma').addEventListener('click', function() {
    entradaActual += '+';
    document.getElementById('pantalla').textContent = entradaActual;
});

document.getElementById('btnResta').addEventListener('click', function() {
  entradaActual += '-';
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
  

