var mongoose = require("mongoose");

//have mongoose connect to server
mongoose.connect("mongodb://localhost/dogs_app", { useNewUrlParser: true});


//define what a dog looks like - this wont do anything to DB but tells Mongoose our JS . 
//It tells the JS side I want to be able to add dog and should be defined as "this"
//designing a pattern for our data, not creating a table. Predictable structure for our code to handle the dogs
var dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    personality: String
});

//take Schema pattern and compiled it into model and save to variable Dog (has to be singular version of our model)
//returns an object with a bunch of methods
//can now use Dog variable to make new dogs, define dogs, remove dogs, update dogs...etc.
//Dog.find()
//Dog.remove
//Dog.create
var _Dog = mongoose.model("Dog", dogSchema);

//adding a new dog to the DB
// var champ = new _Dog ({
//     name: "Champ",
//     age: 4,
//     personality: "Happy Hambone"
// });

// var party = new _Dog ({
//     name: "Party",
//     age: ,
//     personality: "Happy Hambone"
// });

//trying to save the dog Champ to the DB and passing in function that will be called once it's done
// .find(function( , ){}); OR .create(function( , ){}); OR .remove(function( , ){}); ....and so on
// champ.save(function(err, dog){
//     if(err){
//         console.log("Something didn't work!");
//     } else {
//         console.log("Dog saved to DB: ");
//         console.log("dog");
//     }
// }); 


//new and save all at once
_Dog.create({
    name: "Spot",
    age:1,
    personality: "Silly"
}, function(err, dogs){
    if(err){
    console.log(err);
    } 
    else {console.log(dogs);}}
);

//retrieve all dogs from the DB
_Dog.find({}, function(err, dogs){
    if(err){
        console.log("Error! No Doggie");
        console.log(err);
    } else {
        console.log("All the dogs....");
        console.log(dogs);
    }
});