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
