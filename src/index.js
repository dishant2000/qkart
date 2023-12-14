const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
app.listen(config.port,(err)=>{
    if(err)
    console.log(err);
    else
    console.log(`server listning at port ${config.port}`);
});
mongoose.connect(config.mongoose.url,config.mongoose.options,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("connected to the database");
})
