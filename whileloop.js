let dogs =["Bulldog","Beagle","Labrador"];
let i=0;
allDogs ="";
do{
    allDogs += dogs[i++] + " ";
}while(i<dogs.length)

console.log("while:" + allDogs)