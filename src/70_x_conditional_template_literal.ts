export default undefined;

const person = {
  firstname: "Susi",
  age: 32,
};

type Updater<Type> = {
  [key in keyof Type as key extends string ? `update${Capitalize<key>}` : key]: key extends string
    ? (newValue: Type[key]) => Builder<Type>
    : Type[key];
};

type Builder<Type> = Updater<Type> & {
  build(): Readonly<Type>;
};

// Can we have a function that takes an object
//  and returns a "builder" object for that given object?

//  The builder object should  contain
//  all properties from the original object, but
//    values should be 'update'-functions
//      (updateX instead 'x', returns Update-object, fluent Interface)
//  it also should have a build() function that returns the original
//   object back (it's type)
//
//  1. Create Updater-Type with Function
//  2. Create Updater-Type with correct keys
//  3. Create Builder-Type

function mutate<O>(o: O): Builder<O> {
  // @ts-ignore
  return "";
}

const newPerson = mutate(person).updateAge(123).updateFirstname("Klaus").build();

newPerson.age = 123; // nope, readonly
const age: string = newPerson.age; // nope, number
const newAge: number = newPerson.age; // fine!

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
