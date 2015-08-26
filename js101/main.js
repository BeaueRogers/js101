alert("hello user");
console.log("finished excuting");

var year = 365
var hours = 24
var minutes = 60
var seconds = 60


var test1=year * hours;
console.log(test1);
var test2=((minutes * test1) * 10);
console.log(test2);
var test3=((seconds * test2) * 24.5);
console.log(test3);

/*
hours in year
minutes in decase
seconds old I am
*/


// if statements
var age = 7;

if(age===5){
  console.log('You are 5');
} else {
  console.log('You are not of drinking age!');
}

var iCanzDrink = 21;

if(age<=iCanzDrink){
  console.log('You need a fake ID');
}else{
  console.log('Bottoms up')
}

var cow = true;

if(cow){
  console.log('you are a cow')
}

var frog = false;

if(!frog){
  console.log('no frogs')
}

if(frog !== true){
  console.log('no frogs')
}

var age = 25
var female = true

if(age>21 && female){
  console.log('girls night!');
}

var speed = 'fasst';
var color = 'red'
var drink='col';

if(speed ==='fast' || color ==='red' && drink ==='coke'){
  console.log('youre blazin!');
  }else{
    console.log('too slow!');
  }

// for loops

var num = 5;
for(var i = 1; i <= num; i++){
  console.log("Your number is: ", i);
}


var myArray = ["cat", "dog", "fish", "cow"]

for(var j = 0; j < myArray.length; j++){
  console.log("You are a " + myArray[j]);
}

//string Manipulation

var firstName = "Beau"
var lastName = "Rogers"
var name = firstName + " " + lastName;
console.log(name);
console.log(firstName.length);
console.log(lastName.length);

for(var k = 0; k < firstName.length; k++) {
  console.log(firstName[k]);
}


var phrase = "I loue cows";
console.log(phrase.charAt(7));
console.log(phrase);
phrase = phrase.replace("loue", "love");
console.log(phrase);

var anotherPhrase = "The lazy dog likes the weird fox";
var newPhrase = anotherPhrase.replace(/o/g, "i");
console.log(newPhrase);


/*

Instructor Suggestion: Take this opportunity to have students write a program that loops over an array
of student grades (values from 50-100) and outputs how many of each grades there are.
50-60=F, 61-70=D, 71-80=C, 81-90=B, 91-100=A.

How many of each grade?
What is the lowest grade?
What is the highest grade?
Once they are done with that, move on the colored reindeer problem, and then boy bands & vegetables.
*/

var grades = [55, 56, 64, 60, 30, 90, 89, 21, 56, 89, 92, 8, 84, 86, 65, 73, 74, 86, 85, 92, 94];
console.log(grades)
var getMin = function(arr) { return Math.min.apply(null, arr) };
var getMax = function(arr) { return Math.max.apply(null, arr) };
var max = getMax(grades);
var min = getMin(grades);
var fCount = 0;
var dCount = 0;
var cCount = 0;
var bCount = 0;
var aCount = 0;
for (var g = 0; g <= grades.length; g++) {
  if (grades[g] < 61) {
    fCount ++;
  }else if (grades[g] < 71) {
    dCount ++;
  }else if (grades[g] < 81) {
    cCount ++;
  }else if (grades[g] < 91) {
    bCount ++;
  }else if (grades[g] <= 100) {
    aCount ++;
  }else {
  console.log("no grades");
  }
}
  console.log("There are " + aCount + " A's");
  console.log("There are " + bCount + " B's");
  console.log("There are " + cCount + " C's");
  console.log("There are " + dCount + " D's");
  console.log("There are " + fCount + " F's");
  console.log("The lowest grade is " + min);
  console.log("The highest grade is " + max);

console.log(grades[g]);
























