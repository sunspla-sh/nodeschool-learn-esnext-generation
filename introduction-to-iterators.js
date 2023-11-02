/**
 * My Solution
 */

// module.exports = function makeCounter(someObj) {
//   let i = 1;
//   someObj.next = function() {
//     return { value: i++, done: i > 11 }
//   }
// }

/**
 * Official Solution
 */

module.exports = function makeCounter(someObj) {
  let num = 0,
      done = false;
  
  someObj.next = function() {
    if(num < 10) num++
    else done = true;

    return { value: num, done }
  }
}