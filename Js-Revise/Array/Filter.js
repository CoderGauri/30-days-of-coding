function customFilter(cb) {
  i;
  let filArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) == true) {
      filArr.push(this[i]);
    }
  }
  return filArr;
}
Array.prototype.customFilter = customFilter;

let employees = [
  { name: "Gauri", desg: "Manager", salary: 50000 },
  { name: "Ross", desg: "Developer", salary: 60000 },
  { name: "Jil", desg: "Manager", salary: 80000 },
  { name: "Sil", desg: "Developer", salary: 90000 },
];

const Managers = employees.customFilter((item) => {return item.desg == "Manager"});