const mixedArray = [3,10,73,14,64,15,22,4];
var result = [];

function filter(a){
  let res = true;
  if (a % 2 == 0){
    return res;
  }
  else{
    res = false;
    return res;
  }
}

for (let i = 0; i<mixedArray.length; i++){
  if (filter(mixedArray[i]) == true){
    result.push(mixedArray[i]);
  }
}

console.log(result);