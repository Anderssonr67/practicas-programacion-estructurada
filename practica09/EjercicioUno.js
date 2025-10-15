// Ejercicio Uno: Calculadora de promedio
function calcularPromedio(notas) {
    let suma = 0
    for (let nota of notas){
        suma += nota
    }

    return suma / notas.length
}

const mostrarResultado = function(nombre, promedio){
    console.log('El promedio de '+ nombre + ' es: ' + promedio)
}

const evaluarPromedio = (promedio) => {
    if (promedio >= 8) return "Excelente"
    else if (promedio >=6 && promedio < 8) return "Aprobado"
    else return "Reprobo"
}

const notasDaniel = [5, 7, 6, 5]
const promedio = calcularPromedio(notasDaniel)

mostrarResultado("ander", promedio)
console.log("Desempeño: ", evaluarPromedio(promedio))
