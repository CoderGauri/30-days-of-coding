function customMap(cb) {
  let mapArr = [];
  for (let i = 0; i < this.length; i++) {
    let temp = cb(this[i]);
    mapArr.push(temp);
  }
  return mapArr;
}

Array.prototype.customMap = customMap;

let employees = [
  { name: "Gauri", desg: "Manager", salary: 50000 },
  { name: "Ross", desg: "Developer", salary: 60000 },
  { name: "Jil", desg: "Manager", salary: 80000 },
  { name: "Sil", desg: "Developer", salary: 90000 },
];

const Appraisal = employees.customMap((item) => {
    if(item.desg == "Manager"){
item.salary = item.salary + (20/100)* item.salary 
    }
    else{
        item.salary = item.salary + (30/100)* item.salary 
    }
    return item;
});
