let foo = 12, boo = 45;

function main(foo, boo) {
  [boo, foo] = [12, 45];

  return {foo, boo};
}

console.log(main(foo, boo));
module.exports = main;