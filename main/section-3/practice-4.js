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

function getCollectionC (uniqueValues,collectionA){

  let ret =[];
  for (let keyA in uniqueValues){
    let count = 0;
    for (let keyB in collectionA){
      if (uniqueValues[keyA] === collectionA[keyB].charAt(0)){
        if (collectionA[keyB].length > 2 ){
         count = parseInt(collectionA[keyB].substring(2,3));
        }else {
          count++;
        }
      }
    }

    ret.push({key: uniqueValues[keyA], count:count})

  }
  return ret;

}

function subtractTheSameValue(collectionC, objectB){

  let counter = 3;
  for (let keyA in objectB.reverse()){
    for (let keyB in collectionC){
      if(objectB[keyA] === collectionC[keyB].key){
        collectionC[keyB].count = parseInt(collectionC[keyB].count) - parseInt(counter);
        if (counter > 1) {
          parseInt(counter--);
        }
      }
    }
  }
  return collectionC;

}


function createUpdatedCollection(collectionA, objectB) {
  debugger;
  let uniqueValues = removeDuplicateValues(collectionA);
  let objectBVal = objectB.value;
  let collectionC = getCollectionC(uniqueValues,collectionA);

  return subtractTheSameValue(collectionC, objectBVal);


}
