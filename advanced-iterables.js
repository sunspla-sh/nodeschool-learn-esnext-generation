/**
 * My Solution
 */

// module.exports = function generate(isEven) {
//   return {
//     i: isEven ? 0 : -1,
//     next(swap) {
//       if(swap) this.i++
//       else this.i += 2;
//       return { value: this.i, done: false }
//     }
//   }
// }

/**
 * Official Solution
 */

module.exports = function generate(isEven) {
  let num;
  if(isEven) {
    num = 0;
  } else {
    num = -1;
  }

  const myIterator = {
    next: function(swap) {
      num += (swap ? 1 : 2);
      return {
        value: num
      }
    }
  };

  return myIterator;
}