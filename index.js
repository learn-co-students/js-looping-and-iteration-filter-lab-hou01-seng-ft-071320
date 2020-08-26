// Code your solution in this file

// array = ['Dan', 'Daniel', 'Danielle', 'Monica', 'McDaniel']

const findMatching = function(array, name) {
    return array.filter(function(driverName) {
       return driverName.toUpperCase() === name.toUpperCase();
    });
}

const fuzzyMatch = function(array,letters) {
    let letterCount = letters.length;
    return array.filter(function(driver){
       return driver.slice(0,letterCount) === letters;
    });
}

const matchName = function(array, string) {
    return array.filter(function(driver){
        return driver.name === string;
    });
}

