function Alien(name, age)
{
    this.name=name;
    this.age= age;


    this.work= function(){
        console.log("Solving bugs");

    }
}



let alien1= new Alien('shweta', 29);

let alien2= new Alien('shubham', 26);
console.log(alien1);


alien1.work();


alien2.age = 30;

console.log(alien2);