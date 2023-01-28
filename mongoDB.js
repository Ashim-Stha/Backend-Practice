//learning mongoDB

db //to show current database
use ashim //to switch to ashim database

show dbs 
show collections

db.text
db.text.insert({array})
db.text.find()//to show

db.items.insertOne({name:'POCO X3',price:33000,qty:123})
db.items.insertMany([{name:'Ashim',roll:7},{name:'Chandrey',roll:17}])
db.items.find() //to show

