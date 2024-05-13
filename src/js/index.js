// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

function wordToUpper(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}

wordToUpper("Esqueleto");

function wordToUper(word) {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
}

wordToUper("Casa");

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

sayConjugation("andar", "comer");
sayConjugation("llirir", "comprer");
