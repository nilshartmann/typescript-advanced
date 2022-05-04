export default undefined;

type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;

function translate(msg: Translate) {
  // how can we access the strings to translate?
  // what happens if we extend possible Translations?
}

// ------------- BEISPIEL 2 -------------------------------------------

// Wenn a eine number ist, soll ein Error geworfen werden
//  (fail-Methode)
// ansonsten toLocaleLowerCase();

function convertToLowerCase(a: string | number) {}

// Info (tagged union types werden auch "discriminating unions" genannt):
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// Never Type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
