console.log('this is tutorial 17 on events');

document.getElementById("heading").addEventListener
('click', function(e){
    let variable;
console.log("you have clicked the heading");
variable = e.target;
variable = e.target.className;
variable = e.target.classList;

variable = e.target.id;
variable = e.offsetx;
variable = e.offsetY;
variable = e.clientx;
variable = e.clientY;
console.log(variable);
//location.href = '//codewithharry.com'
 });