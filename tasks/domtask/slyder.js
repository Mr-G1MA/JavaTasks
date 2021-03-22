const left = document.querySelector('#left');
const right = document.querySelector('#right');
const list = document.querySelector('#items');
const computedStyle = getComputedStyle(list);

var n = document.getElementById('items').getElementsByTagName('li').length;
let currentRight = 0;
list.style.right = currentRight;

right.addEventListener('click', function(event){
  event.preventDefault();

 

  if (currentRight < ((n-3)*100)){
    currentRight += 100;
    items.style.right = currentRight + "px";
    
  }
  
})

left.addEventListener('click', function(event){
  event.preventDefault();

  

  if (currentRight !== 0){
    currentRight -= 100;
    items.style.right = currentRight + "px";
    
  }
  
})