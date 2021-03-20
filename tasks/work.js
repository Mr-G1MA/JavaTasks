const workers = [
  {name:"Trevor",salary:500},
  {name:"Mike",salary:100},
  {name:"Linda",salary:1500},
  {name :"Сергей", salary: 2000}
];


function topWorkers(workers){
  let workersname = [];
  for(let i =0; i<workers.length; i++){
    if (workers[i].salary>1000){
      workersname.push(workers[i].name);
    }
  }
  return workersname;
}

var top = topWorkers(workers);

console.log(top);