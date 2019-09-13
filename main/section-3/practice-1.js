'use strict';

function subtractTheSameValue(collectionA, objectB){

  for (let keyA in objectB){
    for (let keyB in collectionA){
      if(objectB[keyA] === collectionA[keyB].key){
        collectionA[keyB].count --;
      }
    }
  }

  return collectionA;
}

function createUpdatedCollection(collectionA, objectB) {

  let objectBVal = objectB.value;
  return subtractTheSameValue(collectionA,objectBVal);

}
