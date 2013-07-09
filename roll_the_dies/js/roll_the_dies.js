/*
 * Roll the Dies In many board games, you have to roll multiple
 * multi-faces dies.jpg) to generate random numbers as part of the game
 * mechanics. A classic die used is the d20 (die of 20 faces) in the game
 * Dungeons & Dragons. This notation, often called the Dice Notation, is where
 * you write NdM, where N is a positive integer representing the number of dies
 * to roll, while M is a positive integer equal to or grater than two (2),
 * representing the number of faces on the die. Thus, the string "2d20" simply
 * means to roll the 20-faced die twice. On the other hand "20d2" means to roll
 * a two-sided die 20 times.  Your goal is to write a program that takes in one
 * of these Dice Notation commands and correctly generates the appropriate
 * random numbers. Note that it does not matter how you seed your random number
 * generation, but you should try to as good programming practice.  
 * Author: nint22 
 *
 * Formal Inputs & Outputs Input Description 
 * You will be given a string of the for NdM, where N and M are describe above 
 * in the challenge description. This string will be given through
 * standard console input.  
 *
 * Output Description 
 * You must simulate the die rolls N times, where if there is more than one roll
 * you must space-delimit (not print each result on a separate line). Note that
 * the range of the random numbers must be inclusive of 1 to M, meaning that a die 
 * with 6 faces could possibly choose face 1, 2, 3, 4, 5, or 6.  
 *
 * Sample Input 
 *
 * 2d20
 * 4d6 
 *
 * Sample Output 
 *
 * 19 7 
 * 5 3 4 6
 */

var assert = function(expected, actual) {
  if (expected !== actual) {
    throw "Assertion failed: expected " + expected + ", but got " + actual;
  }
};

// var randomNum = function(max) {
  // var min = 1;
  // return Math.floor(Math.random() * (max - min + 1)) + min;
// };

var decryptRolls = function(input) {
  var arr = input.split('d');
  var numOfDie = arr[0],
      sides = arr[1];

  return {
    numOfDie: numOfDie,
    sides: sides
  };
};

var calcRoll = function(sides) {
  var min = 1;
  return Math.floor(Math.random() * (sides - min + 1)) + min;
};

var rollDie = function(die) {
  var rolls = decryptRolls(die),
      output = "";
  var numOfRolls = rolls.numOfDie,
      sides = rolls.sides;

  for (i = 0; i < numOfRolls; i++) {
    output += calcRoll(sides) + " ";
  }
  
  return output;
};

assert("5", decryptRolls("3d5").sides);
assert("10", decryptRolls("2d10").sides);
assert("5", decryptRolls("5d10").numOfDie);
assert("10", decryptRolls("10d3").numOfDie);
assert(1, calcRoll(1));
assert("1", rollDie("1d1"));
assert("1 1 ", rollDie("2d1"));
console.log("All tests passed!");
