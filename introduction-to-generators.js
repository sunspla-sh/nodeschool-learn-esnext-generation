module.exports = function *generate(isEven) {
  let num = isEven ? 0 : -1;
  while(true) {
    yield num += 2;
  }
}