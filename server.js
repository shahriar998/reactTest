const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const menuItemModel = require("./menuItemModel.js")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

var path = require("path");
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("/menu",function(req,res){
    menuItemModel.find({},function(err,data){
        res.json(data);
    })
})
app.get("*", (req, res) => {
   res.sendFile('index.html', { root });
})
// // Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chinaMoon");
menuItemModel.create({name:"pizza1"},function(err,data){
    console.log(err,data);
})
menuItemModel.create({name:"pizza5"},function(err,data){
    console.log(err,data);
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});