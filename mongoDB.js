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

//to create another collection
db.item1.insert({})

//to search by filter
db.items.find({name:'Ashim'})

//greater than or equal to
db.items.find({roll:{$gte:10}})

//only greater than
db.items.find({roll:{$gt:7}})

//and operator is ,
db.items.find({price:{$gte:10000},qty:{$gte:100}})

//or operator
db.items.find(
    {$or:[
    {price:{$gt:30000}},{qty:{$gt:100}}
]}
)

//to show only required data we make it 1
db.items.find({price:{$gte:30000}},{price:1})
db.items.find({price:{$gte:30000}},{price:1,qty:1})

//to delete single item from multiple similar item
db.items.deleteOne({price:33000})

//to delete all 
db.items.deleteMany({price:33000})

//to update
db.items.updateOne({name:'POCO X3'},{$set:{price:30000}})
db.items.updateMany({name:'POCO X3'},{$set:{price:32000,qty:100}})