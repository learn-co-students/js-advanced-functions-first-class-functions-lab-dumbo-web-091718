// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (a) => (b) => a * b;
const fareDoubler = fare => createFareMultiplier(fare)(2);
const fareTripler = fare => createFareMultiplier(fare)(3);
const fetchSpecifiedDrivers = (drivers, fn) => fn(drivers);