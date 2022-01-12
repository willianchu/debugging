const input = process.argv[2];
console.log(input);

const reverse = (original) => {
  return original.split('').reverse().join('');
};

if (input) {
  console.log(reverse(input));
}
