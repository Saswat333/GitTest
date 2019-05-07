function sayHello() {
  var name = "Saswat";
  var age = 23;
  //variable mutation :var takes current assigned values
  //age = 'twenty three';

  //use of date() to get current date
  var datenow = new Date();
  var dateyear = datenow.getFullYear();

  //printing all the values for testing //console.log();
  console.log(dateyear);
  //testing typeof method
  console.log(typeof datenow);
  console.log("My name is " + name + ". My age is " + age);
}

//function declaration type
function calculateAge() {
  var datenow = new Date();
  var dateyear = datenow.getFullYear();

  var birthyear = prompt("Give your BirthYear !!!");

  var myage = dateyear - birthyear;
  console.log("My current age is : " + myage);
}

//Function expression : we return function value dircttly to var

//var firstName = 'Saswat';

var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return console.log(firstName + " teaches kids how to code");
    case "designer":
      return console.log(firstName + " designs beautiful product.");
    case "developer":
      return console.log(firstName + " develops software product.");
    case "dev":
      return console.log(firstName + " develops software product.");

    default:
      return console.log(firstName + " does something else");
  }
};
function whatHeDoes() {
  var firstName = prompt("Tell me your name : ");
  var job = prompt("Your Job: ");
  whatDoYouDo(job, firstName);
}

function objectExample() {
  var mybirthYear;
  var john = {
    firstName: "John",
    lastName: "Cena",
    DOB: 1990,
    //mybirthYear: 1996,
    famaily: ["Bob", "David"],
    calcmyAge: function(mybirthYear) {
      return 2018 - mybirthYear;
    }
  };
  //console.log(john);
  //john.lastName = 'Doe'; //mutation
  //console.log(john.firstName +" "+ john.lastName);
  //new objectExample
  /*
	var jane = new Object();
	jane.firstName = 'Jane';
	jane.lastName ='Doe';
	console.log(jane);
	*/

  //object method
  var age = john.calcmyAge(1995);
  console.log(age);
}

// clearing console
function clearConsole() {
  console.clear();
}
