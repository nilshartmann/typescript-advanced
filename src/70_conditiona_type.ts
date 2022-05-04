export default undefined;

function convertNum(a: number): string {
  return ""
}

function convertStr(b: string): number {
  return 0;
}

type StrOrNum<T extends number | string> = T extends number
  ? string
  : number;

function convert<T extends number | string>(value: T): StrOrNum<T> {
  if (typeof value === "string") {
    return 1;
  }

  return "" + value;
  
}

const resultN: number = convert("");
const resultS: string = convert(1);

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel<T extends number | string>(idOrName: T): T extends number
? string
: T extends string ? number : never{
  if (typeof idOrName === "number") {
    return "sss" ;
  }
}