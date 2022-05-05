export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
};

// Utility Types

// BEISPIEL: UTILITY TYPE #1

function patchPerson(person: Person) {
  // Wir wollen eine Untermenge von Person erlauben...
  // außerdem sollte person readonly sein
}

// -----------------------------------------------------------------------------------------
//
// BEISPIEL: UTILITY TYPE #2
//
// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

function enterNewPersonForm(): Person {
  // Keine Id hier!
  // @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
  return {
    name: "Klaus",
    age: 32,
  };
}

// -----------------------------------------------------------------------------------------
//
// BEISPIEL: UTILITY TYPE #3
//
function getFriend() {
  return {
    firstname: "Klaus",
    lastname: "Smith",
    address: {
      city: "Hamburg",
      street: "Reeperbahn",
    },
  };
}

// Wie kommen wir an den Typen des 'address'-Eintrags, den getFriend
// zurückliefert, so dass wir ihn an sendLetterTo übergeben können?

function sendLetterTo(x: never) {
  // x sollte object mit city und street sein
}

// -----------------------------------------------------------------------------------------
//  BEISPIEL: Ein eigener 'mapped' Type
//
//  Wir haben eine generische validate-Funktion, die ein Objekt entgegen nimmt,
//     und das Ergebnis der Validierung (true/false) pro Feld zurückgibt

function validate<O>(object: O): O {
  // @ts-ignore Implementierung ist nicht so wichtig hier
  return null;
}

const person = {
  lastname: "Mueller",
  city: "Hamburg",
};
const result = validate(person);

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validLastname: boolean = result.lastname;

// @ts-ignore   🤔🤔🤔🤔🤔🤔🤔
const validCity: boolean = result.city;

// -----------------------------------------------------------------------------------------
//

//

//

// Mapped Types: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
