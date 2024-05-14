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

function plsConjugate (verb) {
  if (verb.endsWith("ar")) {
console.log(`El verbo ${verb} es de la primera conjugación`)
  }
  else if (verb.endsWith("er")) {
    console.log(`El verbo ${verb} es de la segunda conjugación`)
      }
  else {
  console.log(`El verbo ${verb} es de la tercera conjugación`)
  }
}

plsConjugate("andar");
plsConjugate("salir");
plsConjugate("entender");

//Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"

function generateWord(word1, word2, word3) {
  const newWord = (word1.substring(0,2) + word2.substring(0,2) + word3.substring(0,2));
  console.log (newWord.toLowerCase());
}

generateWord ("Hola", "Adiós", "Mercadona");

//Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".´

function tellName (direction, character) {
  console.log(`El nombre es ${direction.substring(0, 8)}`);
  
}

tellName("cristina@gmail.com", "@");


//prueba indexOf

function buscarLetra (string, letter) {
  console.log (string.indexOf(letter));
}

buscarLetra ("comer", "e")