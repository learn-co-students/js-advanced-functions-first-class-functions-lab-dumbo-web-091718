// Code your solution in this file!
const returnFirstTwoDrivers = arr => {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = arr => {
  return arr.slice(arr.length - 2, arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  const fare = (value) => {
    return int * value
  }
  return fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, func) {
  return func(drivers)
}