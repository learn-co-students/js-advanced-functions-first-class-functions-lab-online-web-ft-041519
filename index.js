// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    return array.slice(0,2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplier) {
    return function (argument) {
        return multiplier * argument
    } 
}

function fareDoubler(argument) {
    return argument * 2
}

function fareTripler(argument) {
   return argument * 3
}

function selectDifferentDrivers(array, funktion) {
    return funktion(array)
}