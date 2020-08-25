// Code your solution in this file
function findMatching(array, name) {
    let newArray = array.filter(function (f_name) {return f_name.toUpperCase() === name.toUpperCase();});
    return newArray
}

function fuzzyMatch(array, letters) {
    let newArray = array.filter(function (name) {return name.startsWith(letters);});
    return newArray;
}

function matchName(array, name) {
    let newArray = array.filter(function (f_name) {return f_name.name === name;});
    return newArray
}