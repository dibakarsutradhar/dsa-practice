// Create a function that revereses a String
// "Hi my name is John" should be:
// "nhoJ si eman ym iH"

const reverse = (str) => {
  //  check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i++) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join('');
}

const reverse2 = (str) => {
  return str.split('').reverse().join('');
}

reverse2("Hi my name is John");