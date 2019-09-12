'use strict';

function collectSameElements(collectionA, collectionB) {
  //Initiate blank array and variable
  let similarValues = [];
  let matchedVal;

  //Iterate the first collection
  for (let keyA in collectionA){
    //Iterate the second collection to compare each value of the first collection to second collection
    for (let keyB in collectionB){
      //Compare each value
      matchedVal = collectionA[keyA] === collectionB[keyB] ? collectionA[keyA] : null;
      //Check if mached
      if(matchedVal !== null){
        //insert the matched values to similarValues array
        similarValues.push(collectionA[keyA])}
    }
  }
  // return the matched values
  return  similarValues;
}
