'use strict';

function removeDuplicateValues (duplicateVal){
  let unique = {};
  duplicateVal.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

function countSameElements(collection) {
  //Initialization of variables/array/object
  let result = [];
  let distinctValues = removeDuplicateValues(collection);
  let count;

  for (let keyA in distinctValues){
    count = 0;

    for (let keyB in collection){
      //Get the same values and increment the count if matched
      count = distinctValues[keyA] === collection[keyB] ? count + 1 : count;
    }

    result.push({key: distinctValues[keyA], count:count});

  }

  return result;


}
