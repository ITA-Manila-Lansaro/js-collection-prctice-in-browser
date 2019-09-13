'use strict';

function removeDuplicateValues (duplicateVal){
  let unique = {};
  duplicateVal.forEach(function(i) {
    if(!unique[i]) {
      unique[i.charAt(0)] = true;
    }
  });
  return Object.keys(unique);
}

function countSameElements(collection) {
  //Initialization of variables/array/object
  let result = [];
  let distinctValues = removeDuplicateValues(collection);
  let count;
  let foundNumber;
  for (let keyA in distinctValues){
    count = 0;

    for (let keyB in collection){
      if (collection[keyB].length === 5) {
        foundNumber = collection[keyB].substring(2 , 4);
      }
      else if (collection[keyB].length === 4){
        foundNumber = collection[keyB].substring(2 , 3);
      }
      else {
        foundNumber = collection[keyB].charAt(collection[keyB].length - 1);
      }

      if (collection[keyB].length === 1) {
        //Get the same values and increment the count if matched
        count = distinctValues[keyA] === collection[keyB] ? count + 1 : count;
      }
      else{
        //Manipulate the special element with numbers
        if (distinctValues[keyA] === collection[keyB].charAt(0))
        {
          count = parseInt(count) + parseInt(foundNumber);
       }
      }
    }

    result.push({name: distinctValues[keyA].charAt(0), summary:parseInt(count)});

  }

  return result;
}
