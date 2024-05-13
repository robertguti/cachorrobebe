document.getElementById('formulario-mascota').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre-mascota').value;
    const imagen = document.getElementById('imagen-mascota').files[0];

    // Aquí puedes enviar los datos al servidor
  });

  function calcularMasaCorporal() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const resultadoMasa = document.getElementById('resultado-masa');

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      const masaCorporal = peso / (altura * altura);
      resultadoMasa.textContent = `La masa corporal de la mascota es: ${masaCorporal.toFixed(2)}`;
    } else {
      resultadoMasa.textContent = 'Por favor, ingrese un peso y altura válidos.';
    }
  }

  function calcularEdadHumana() {
    const edadMascotaAnios = parseInt(document.getElementById('edad-mascota-anios').value);
    const resultadoEdad = document.getElementById('resultado-edad');

    if (!isNaN(edadMascotaAnios) && edadMascotaAnios >= 0) {
      const edadHumana = edadMascotaAnios * 7; // Suponiendo que 1 año humano equivale a 7 años de la mascota
      resultadoEdad.textContent = `La edad humana de la mascota es: ${edadHumana} años`;
    } else {
      resultadoEdad.textContent = 'Por favor, ingrese una edad válida.';
    }
  }