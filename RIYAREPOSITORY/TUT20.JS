console.log('this is tut.20');
let impArray = ['ginger','oninon','ladyfinger'];


//add a key value pair inside local storage
localStorage.setItem('Name','riya');
localStorage.setItem('Name2','prab');
localStorage.setItem('vegetable', JSON.stringify(impArray));

let Name = 'riya';
let Name2 = 'prab';
//clear the entire local storage
//localStorage.clear();

//clear a particular key-value pair
localStorage.removeItem('Name2');

//retrieve an item from the local storage
Name = JSON.parse(localStorage.getItem('vegetable'));
console.log(Name);

sessionStorage.setItem('sessionName','sriya');
sessionStorage.setItem('sessionName2','sprab');
sessionStorage.setItem('sessionvegetable', JSON.stringify(impArray));
