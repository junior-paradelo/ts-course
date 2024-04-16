// Junior => [J,u,n,i,o,r] => string => string[]
// [J,u,n,i,o,r] => Junior => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Junior');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray Junior =>', rtaArray);
const rtaStr = parseStr(['J', 'u', 'n', 'i', 'o', 'r']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['J', 'u', 'n', 'i', 'o', 'r'] =>", rtaStr);
