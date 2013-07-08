/*
 * The Greatest Common Divisor of a given set of integers is the greatest integer
 * that can divide these integers without any remainder. 
 * 
 * The goal is to write a program that takes two integers, and returns the
 * greatest common divisor. You may pick any algorithm or  approach you prefer. 
 * 
 * Source: http://www.reddit.com/r/dailyprogrammer/comments/1hvh6u/070813_challenge_132_easy_greatest_common_divisor/
 *
 */

var assert = function(expected, actual) {
  if (expected !== actual) {
    throw "Assertion failed: expected " + expected + ", but got " + actual;
  }
};

var common_divisor = function(int1, int2) {
  var smallest_possible = Math.min(int1, int2);

  for (i = smallest_possible; i > 0; i--){
    if (int1 % i === 0 && int2 % i === 0) {
      return i;
    }
  }
};

assert(1,     common_divisor(3, 5));
assert(2,     common_divisor(4, 6));
assert(4,     common_divisor(12, 16));
assert(4,     common_divisor(32, 12));
assert(16,    common_divisor(16, 16));
assert(1,     common_divisor(142341, 512345));
assert(65535, common_divisor(65535, 4294967295));
console.log("All tests passed!");
