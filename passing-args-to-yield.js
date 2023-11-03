/**
 * My Solution
 */
// module.exports = function *multiplier() {
//   let i = 0,
//       m = 1;
//   while(true) {
//     i += 1;
//     m = (yield i * m) ?? 1;
//   }
// }

/**
 * Official Solution
 */
module.exports = function *multipler() {
  let num = 0,
      mult = 1;

  while(true) {
    num++;
    mult = yield num * mult;
    if(!mult) {
      mult = 1
    }
  }
}