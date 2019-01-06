// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function fareMultiplier(integer) {
    return integer * integer;
  }
}

function fareDoubler(integer) {
  return integer * 2;
}

function fareTripler(integer) {
  return integer * 3;
}

function fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}



// Code your solution in this file!
