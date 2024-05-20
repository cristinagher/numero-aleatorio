// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else

function wordToUpper(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}

//Repite el ejercicio anterior pero con un operador ternario
wordToUpper("Esqueleto");

function wordToUper(word) {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
}

wordToUper("Casa");

//Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

function sayConjugation(verb1, verb2) {
  if (verb1.endsWith("ar") && verb2.endsWith("ar")) {
    console.log(
      `Los verbos ${verb1}  y  ${verb2} son de la primera conjugación`
    );
  } else if (verb1.endsWith("er") && verb2.endsWith("er")) {
    console.log(
      `Los verbos ${verb1}  y  ${verb2} son de la segunda conjugación`
    );
  } else if (verb1.endsWith("ir") && verb2.endsWith("ir")) {
    console.log(
      `Los verbos ${verb1}  y  ${verb2} son de la tercera conjugación`
    );
  } else if (verb1.endsWith("ar") && verb2.endsWith("er")) {
    console.log(
      `El verbo ${verb1} es de la primera conjugación y ${verb2} son de la segunda conjugación`
    );
  } else if (verb1.endsWith("ar") && verb2.endsWith("ir")) {
    console.log(
      `El verbo ${verb1} es de la primera conjugación y ${verb2} son de la tercera conjugación`
    );
  } else if (verb1.endsWith("er") && verb2.endsWith("ar")) {
    console.log(
      `El verbo ${verb1} es de la segunda conjugación y ${verb2} son de la primera conjugación`
    );
  } else if (verb1.endsWith("er") && verb2.endsWith("ir")) {
    console.log(
      `El verbo ${verb1} es de la segunda conjugación y ${verb2} son de la tercera conjugación`
    );
  } else if (verb1.endsWith("ir") && verb2.endsWith("ar")) {
    console.log(
      `El verbo ${verb1} es de la tercera conjugación y ${verb2} es de la primera conjugación`
    );
  } else if (verb1.endsWith("ir") && verb2.endsWith("er")) {
    console.log(
      `El verbo ${verb1} es de la tercera conjugación y ${verb2} es de la segunda conjugación`
    );
  }
}

//versión corta

sayConjugation("andar", "comer");
sayConjugation("llirir", "comprer");

function plsConjugate(verb) {
  if (verb.endsWith("ar")) {
    console.log(`El verbo ${verb} es de la primera conjugación`);
  } else if (verb.endsWith("er")) {
    console.log(`El verbo ${verb} es de la segunda conjugación`);
  } else {
    console.log(`El verbo ${verb} es de la tercera conjugación`);
  }
}

plsConjugate("andar");
plsConjugate("salir");
plsConjugate("entender");

//versión corta buena

//Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"

function generateWord(word1, word2, word3) {
  const newWord =
    word1.substring(0, 2) + word2.substring(0, 2) + word3.substring(0, 2);
  console.log(newWord.toLowerCase());
}

generateWord("Hola", "Adiós", "Mercadona");

//prueba indexOf

function buscarLetra(string, letter) {
  console.log(string.indexOf(letter));
}

buscarLetra("comer", "e");

//Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".´

function tellName(direction) {
  const findIt = direction.indexOf("@");
  const nameIs = direction.substring(0, findIt);
  const dominioIs = direction.substring(findIt);
  console.log(`El nombre es ${nameIs} y el dominio es ${dominioIs}`);
}
tellName("cristina@gmail.com");

//Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra

function getRandomLetter(word) {
  const tellNumber = Math.random() * word.length;
  console.log(word.charAt(tellNumber));
}
getRandomLetter("Comentar");
//Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
function intercalaLetras(word) {
  const findLetterA = word.charAt(0);
  const findLetterB = word.charAt(2);
  const findLetterC = word.charAt(4);

  console.log(
    findLetterA.toUpperCase() +
      word.charAt(1) +
      findLetterB.toUpperCase() +
      word.charAt(3) +
      findLetterC.toUpperCase()
  );
}
intercalaLetras("casas");
//Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

function userName(name, surname) {
  const userFirst = name.charAt(0);
  const surName = surname.substring(0);
  const tellRandomNumber = Math.random() * 101;
  const tellExactNumber = Math.floor(tellRandomNumber);
  console.log(userFirst + surName + tellExactNumber);
}

userName("Cristina", "Hernández");

//Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumber = (numbers) => {
  const random = Math.floor(Math.random() * numbers.length);

  console.log(numbers[random]);
};
getRandomNumber([1, 2, 3, 4, 5]);

//Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

// "La suma de todos los números es:[suma]"
// "La media de todos los números es:[media]"
// "El mayor es [mayor] y el menor es [menor]"

const getOperations = (numbers) => {
  const suma = numbers[0] + numbers[1] + numbers[2];
  console.log(`La suma de todos los números es ${suma}`);
  const media = suma / numbers.length;
  console.log(`La media de todos los númberos es ${media}`);
};

//Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const aleatoryNumbers = (numbers) => {
  const getNumberRandom = Math.floor(Math.random() * 11);
  if (numbers.includes(getNumberRandom)) {
    console.log(
      `El array contiene ${getNumberRandom} y se encuentra en ${numbers.indexOf(
        getNumberRandom
      )}`
    );
  } else {
    console.log("El array no contiene este número");
  }
};
aleatoryNumbers([2, 7, 8, 3, 5]);
//crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const emptyArray = (numbers) => {
  const getRandomNumberA = Math.floor(Math.random() * 101);
  const getRandomNumberB = Math.floor(Math.random() * 101);
  const getRandomNumberC = Math.floor(Math.random() * 101);

  if (numbers.length === 0) {
    numbers.push(getRandomNumberA, getRandomNumberB, getRandomNumberC);
    console.log(numbers);
  } else {
    console.log("mal");
  }
};

emptyArray([]);

//Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola
const queHartura = (numbers) => {
  const even = [];
  const odd = [];
  const getRandomNumber = Math.floor(Math.random() * 11);
  const positionA = numbers[0] * getRandomNumber;
  const positionB = numbers[1] * getRandomNumber;
  const positionC = numbers[2] * getRandomNumber;
  const positionD = numbers[3] * getRandomNumber;
  const positionE = numbers[4] * getRandomNumber;
  if (positionA / 2 === 0) {
    even.push(positionA);
  } else if (positionB / 2 === 0) {
    even.push(positionB);
  } else if (positionC / 2 === 0) {
    even.push(positionC);
  } else if (positionD / 2 === 0) {
    even.push(positionD);
  } else if (positionE / 2 === 0) {
    even.push(positionE);
  }
  if (positionA / 2 > 0) {
    odd.push(positionA);
  }
  if (positionB / 2 > 0) {
    odd.push(positionB);
  }
  if (positionC / 2 > 0) {
    odd.push(positionC);
  }
  if (positionD / 2 > 0) {
    odd.push(positionD);
  }
  if (positionE / 2 > 0) {
    odd.push(positionE);
  }
};
queHartura([1, 2, 3, 4, 5]);
