//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var subtraction = num - 5;
  return subtraction;
}

function areSameLength(str1, str2) {
  if ( str1.length == str2.length ){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if ( x == y ){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if ( num < 90 ){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if ( num > 50 ){
    return true;
  }
  return false;
}

function add(x, y) {
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  var subtraction = x - y;
  return subtraction;
}

// #9
function divide(x, y) {
  var division = x / y;
  return division;
}

function multiply(x, y) {
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  var modulo = x % y;
  return modulo;
}

function isEven(num) {
  if ( num % 2 == 0 ) {
    return true;
  }
  return false;
}

function isOdd(num) {
  if ( num % 2 !== 0 ){ // note this
    return true;
  }
  return false;
}

// #14
function square(num) {
  var squared = num * num;
  return squared;
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  var product = Math.pow(num, exponent);
  return product;
}

function roundNumber(num) {
  var rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  var roundedUp = Math.ceil(num);
  return roundedUp;
}

function addExclamationPoint(str) {
 var newString = str + '!';
 return newString;
}

function combineNames(firstName, lastName) {
  var combined = firstName + ' ' + lastName;
  return combined;
}

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

// #22
// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  var areaTriangle = ( base * height ) / 2;
  return areaTriangle;
}

function getCircleArea(radius) {
  var areaCircle = Math.PI * Math.pow(radius, 2); // pi * radius squared
  areaCircle = Math.round(areaCircle); // rounded value
  return areaCircle;
}

function getRectangularPrismVolume(length, width, height) {
  var volume = length * width * height;
  return volume;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
