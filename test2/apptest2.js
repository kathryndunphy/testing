var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dogstest2_app", { useNewUrlParser: true });



//setup Schema
var dogstestSchema = new mongoose.Schema({
    name: String,
    image: String
});

// compile into model
var _Dog = mongoose.model("Dog", dogstestSchema);

_Dog.create({
    name: "Sharky",
    image: "http://www.snowbirdgames.com/forum/data/avatars/l/1/1659.jpg?1471817011"
}, function(err, dog){
    if(err){
        console.log(err);
    } else {
        console.log("New dog added to the pack!");
        console.log(dog);
    }
});