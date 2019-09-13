
'use strict';

function removeDuplicateValues (duplicateVal){
  let unique = {};
  duplicateVal.forEach(function(i) {
    if(!unique[i.charAt(0)]) {
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
  let foundNumber;

  for (let keyA in distinctValues){
    count = 0;

    for (let keyB in collection){
      foundNumber = collection[keyB].charAt(collection[keyB].length - 1);
      if (collection[keyB].length === 1) {
        //Get the same values and increment the count if matched
        count = distinctValues[keyA] === collection[keyB] ? count + 1 : count;
      }
      else{
        //Manipulate the special element with numbers
        if (distinctValues[keyA].charAt(0) === collection[keyB].charAt(0))
        count = count + foundNumber;
      }
    }

    result.push({key: distinctValues[keyA].charAt(0), count:parseInt(count)});

  }

  return result;
}
