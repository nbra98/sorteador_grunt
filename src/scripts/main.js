document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-sorteador').addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo)

    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1)
    // alert(numeroAleatorio.toFixed(0));

    document.querySelector('#resultado').innerText = numeroAleatorio;
    document.querySelector('.resultado').style.display = 'block';
  })
})
