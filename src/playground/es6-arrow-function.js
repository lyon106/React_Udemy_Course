const squareArrow = (x) => x * x;
//All arrow functions are anonymous

console.log(squareArrow(4));

const name = "jen mikke";
let firstName;

//const getFirstName = (name) => name.split(' ')[0];
const getFirstName = (name) => {
    return name.split(' ')[0];
}
//Block scope
if(name) {
    console.log(getFirstName(name));
    //firstName = nameVar.split(' ')[0];
    //console.log(firstName); 
}
console.log(getFirstName('Janusz Koran'));