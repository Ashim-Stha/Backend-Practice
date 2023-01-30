const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/ashim');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});

//creating schema
const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

  //logging schema into model then after cant be changed
  //creates collections into database of name plural form eg Kittens
  const Kitten = mongoose.model('Kitten', kittySchema);

  //creating object
  const silence = new Kitten({ name: 'Silence' });
  const obj1 = new Kitten({ name: 'Obj1' });
console.log(silence.name);
silence.speak();

//saving into db where plural of kitten which is kitten collections is created
silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.speak();
});

obj1.save(function (err, k) {
  if (err) return console.error(err);
  k.speak();
});

//searching into database
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

//using filter
Kitten.find({name:'Obj1'},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})