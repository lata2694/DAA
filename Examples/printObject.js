/*
Given a k ey value object, where keys are string and values can be array, object, string, number, functions, return the same object but instead of values which were function, return the functions' return value.
Object can be multi-level deep, also functions can have arguments, which will be given.

eg: {
a: 1,
b: () => return 2,
}

Output:
{
a: 1,
b: 2
}
*/

const eg = {
  a: {
    c: 1,
  },
  b: () => 2,
}

function printObj(obj) {
  let _obj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      let args = obj[key].length;
      let variables = [];
      while (args) {
        variables.push(prompt("Please enter" + args + "th variable:"));
        args--;
      }
      _obj[key] = obj[key](...variables);
      args = 0;
      variables = [];
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      _obj[key] = printObj(obj[key]);
    } else {
      _obj[key] = obj[key];
    }
  }

  return _obj;
}

console.log('new Obj = ', printObj(eg));
