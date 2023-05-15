// index.js - Lab 6: Arrays and Objects
// Author: Ellie DeLyons & Amaya Garcia
// Created: April 28, 2023

// Variables
myTransport = ["bus", "uber", "train", "walking", "car", "plane"];

// object 
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "rusty",
  year: 1995,
  age: function () {
    return 2022 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '/t',), "</pre>");