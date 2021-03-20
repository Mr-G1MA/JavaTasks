const path = "/users/index.html";

function isHtml(path){
  let extension = "";
  let res = true;
  for(let i = 0; i<path.length; i++){
    if (path[i] == "."){
      i = i + 1;
      for (i; i<path.length;i++){
        extension = extension + path[i];
      }
    }
  }
  console.log(extension);
  if (extension == "html"){
    return res;
  }
  else{
    res = false;
    return res;
  }
}

var result = isHtml(path);

console.log(result);