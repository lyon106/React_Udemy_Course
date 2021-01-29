const add = (a, b) => {
    return a + b;
}
//console.log(add(5,7)); 

const user = {
    name: 'Andrew',
    cities: ['Paryż', 'Warszawa', "Dublin"],
    printPlacesLived() { //() => {} zmienia kontekst i dostęp do zmiennych + 
    //nie potrbujemy używać słowa kluczowego function

        //const self = this; niepotrzebne

        return this.cities.map((city) => this.name + ' has lived in ' + city); //pozwala na tworzenie nowych tablic
        //return cityMessages;  

        //this.cities.forEach((city) => {
        //    console.log(this.name + ' has lived in ' + city);
        //});
    }
}
console.log(user.printPlacesLived()); 

///

const multiplier = {
    numbers: [1,3,4,5],
    multiplyBy: 2,
    multiply() {
    return this.numbers.map((number) => number*this.multiplyBy); 
    }
}

console.log(multiplier.multiply());