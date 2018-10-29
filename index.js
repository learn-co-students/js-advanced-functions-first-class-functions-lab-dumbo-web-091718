// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(fare) {
    return fare*num
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function fetchSpecifiedDrivers(arrayOfDrivers, func1) {
  return func1(arrayOfDrivers)
}
