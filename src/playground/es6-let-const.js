

let nameLet = 'Jen';
nameLet = "julie"
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst); 

function getPetName() {
    let petName = "Hal";
    return petName;
}
//getPetName()
//console.log(petName);

const nameVar = "jen mikke";
let firstName;

//Block scope
if(nameVar) {
    firstName = nameVar.split(' ')[0];
    console.log(firstName); 
}