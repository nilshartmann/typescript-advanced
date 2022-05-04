export default undefined;

// Another Greeter...

// how can we access the strings to translate?
// => add a 'tag' that is available in all Types
type TranslateToEnglish = {
  translation: "DE_EN";
  germanString: string;
};

type TranslateToGerman = {
  translation: "EN_DE";
  englishString: string;
};

type TranslateToFrench = {
  translation: "EN_FR";
  englishString: string;
};

type Translate = TranslateToEnglish | TranslateToGerman;
// add TranslateToFrensh to Translate and see what happens...

function translate(msg: Translate) {
  switch (msg.translation) {
    case "DE_EN":
      return msg.germanString;
    case "EN_DE":
      return msg.englishString;
  }

  // what happens if we extend possible Translations?
  invalidTranslation(msg);

  return "Hello";
}

function invalidTranslation(msg: never) {
  throw new Error("Invalid Msg Object!");
}

function hurz(a: string | number) {
  if (typeof a === "number") {
    fail("number is deprecated!");
  }

  return a.toLocaleLowerCase();
}

function fail(msg: string): never {
  throw new Error(msg);
}

// Info (tagged union types werden auch "discriminating unions" genannt):
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// Never Type: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
