// Función que se ejecuta al hacer clic en el botón de "Calcular"
function calcular() {
    // Obtener los valores de los inputs
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar que ambos números sean válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerText = "Por favor, ingresa dos números válidos.";
        return;
    }

    // Realizar el cálculo (en este caso, el cálculo proporcionado)
    let resultado = ((numero1 * numero2) / 2 + 0.11) / 16.8;

    // Mostrar el resultado en el div de 'resultado'
    document.getElementById('resultado').innerText = "Resultado: " + resultado.toFixed(2) + " ml";  // Mostrar hasta 4 decimales

    
}
