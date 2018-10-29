// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
  }

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
   const fare = function(){
   return integer + (integer * 4)
  }
  return fare
}

const fareDoubler = function(integer){
  return integer * 2
}


const fareTripler = function(integer){
  return integer * 3
}

function fetchSpecifiedDrivers(array, func){
  return func(array)
}
