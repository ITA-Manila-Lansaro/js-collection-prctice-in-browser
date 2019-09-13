'use strict';

function subtractTheSameValue(collectionA,objectB){
  let counter = 3;
  for (let keyA in objectB.reverse()){
    for (let keyB in collectionA){
      if(objectB[keyA] === collectionA[keyB].key){
        collectionA[keyB].count = parseInt(collectionA[keyB].count) - parseInt(counter);
        if (counter > 1) {
          parseInt(counter--);
        }
      }
    }
  }

  return collectionA;
}

function createUpdatedCollection(collectionA, objectB) {

  let objectBVal = objectB.value;
  return subtractTheSameValue(collectionA,objectBVal);

}
