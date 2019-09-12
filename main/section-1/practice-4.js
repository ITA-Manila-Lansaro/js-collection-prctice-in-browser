'use strict';

function collectSameElements(collectionA, objectB) {
  //Initiate blank array and variable
  let similarValues = [];
  let matchedVal;

  //Iterate the first collection
  for (let keyA in collectionA){
    //Iterate the second collection to compare each value of the first collection to second collection
    for (let keyB in objectB.value){
      //Compare each value
      matchedVal = collectionA[keyA].key === objectB.value[keyB] ? collectionA[keyA].key : null;
      //Check if mached
      if(matchedVal !== null){
        //insert the matched values to similarValues array
        similarValues.push(collectionA[keyA].key)}
    }
  }
  // return the matched values
  return similarValues;
}
