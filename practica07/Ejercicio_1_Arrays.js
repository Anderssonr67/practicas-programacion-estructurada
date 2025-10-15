// EJERCICIO 1
// Crear una función que reciba un array de objetos y devuelva solo los nombres

function obtenerNombres(arrayObjetos) {
  return arrayObjetos.map(obj => obj.nombre);
}

// Ejemplo de uso:
const personas = [
  { nombre: "Luis", edad: 20 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Carlos", edad: 25 }
];

console.log("Nombres:", obtenerNombres(personas));
// Resultado esperado: ["Luis", "Ana", "Carlos"]
