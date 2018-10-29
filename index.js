// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]];
}

const returnLastTwoDrivers = function (array) {

  return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
  return function (fare) {
  return multiplier * fare;
}
}

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, cb) {
  return cb(array);
}
