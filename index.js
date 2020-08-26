// Code your solution in this file
function findMatching(array, name){
    return array.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch (array, name){
    let nameLength = name.length;
    return array.filter(function (driverName){
        return driverName.slice(0, nameLength) === name;
    })
}

function matchName(array, name){
    return array.filter(function (driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}
