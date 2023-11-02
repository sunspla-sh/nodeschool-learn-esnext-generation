module.exports = function filterForNumbers(iterable) {
  const arr = [];
  for(let v of iterable) {
    if(typeof v === 'number') arr.push(v)
  }
  return arr;
}