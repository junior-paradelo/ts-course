// Junior => [J,u,n,i,o,r] => string => string[]
// [J,u,n,i,o,r] => Junior => string[] => string
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// generic function it's more use in typeORM
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Junior');
rtaArray.reverse();
console.log('rtaArray Junior =>', rtaArray);
const rtaStr = parseStr(['J', 'u', 'n', 'i', 'o', 'r']);
rtaStr.toLowerCase();
console.log('rtaStr', "['J', 'u', 'n', 'i', 'o', 'r'] =>", rtaStr);
