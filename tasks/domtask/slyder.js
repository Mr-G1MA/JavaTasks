const left = document.querySelector('#left');
const right = document.querySelector('#right');
const list = document.querySelector('#items');
const computedStyle = getComputedStyle(items);

var n = document.getElementById('items').getElementsByTagName('li').length;

right.addEventListener('click', function(event){
  event.preventDefault();

  let currentRight = parseInt(computedStyle.right);

  if (currentRight < ((n-3)*100)){
    items.style.right = currentRight + 100 + "px";
    
  }
  
})

left.addEventListener('click', function(event){
  event.preventDefault();

  let currentRight = parseInt(computedStyle.right);

  if (currentRight !== 0){
    items.style.right = currentRight - 100 + "px";
    
  }
  
})