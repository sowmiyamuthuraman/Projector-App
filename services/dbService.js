var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://sowmiya:sowmiya21@ds111478.mlab.com:11478/projector-1").then(function(client){
    console.log("Connected to Mongo");
    exports.database=client.db("projector-1");

  });

}
