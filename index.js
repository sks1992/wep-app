//jshint esversion:6
//we require two  package which we install express
const express = require("express");
//creating app constant by express
const app = express();
//create a get route that just send the brouser
//responce when user tries to access home route
app.get("/", function(req, res){
  res.send("Hello");
});
//we listen on port 3000and ew console log
//that our server has started
app.listen(5000, function(){
  console.log("Server started on port 5000.");
});
