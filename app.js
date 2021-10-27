// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar  = (valueInEuro) => {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}
// solo un registro en consola para nosotros.
console.log(fromEuroToDollar(1))


// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen  = (valueInDollar) => {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar / 1.2 * oneEuroIs.JPY;
    // retornamos el valor
    return valueInYen;
}
// solo un registro en consola para nosotros.
console.log(fromDollarToYen(1.2))

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound  = (valueInYen) => {
    // convertimos el valor a dolares
    let valueInPound = valueInYen / 127.9 * oneEuroIs.GBP;
    // retornamos el valor
    return valueInPound;
}
// solo un registro en consola para nosotros.
console.log(fromDollarToYen(127.9))


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
