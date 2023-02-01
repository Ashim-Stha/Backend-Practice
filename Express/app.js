const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const fs = require('fs')


app.get('/home',(req,res)=>{
res.send(`<h2>This is a home page</h2>`);
});

app.get('/about',(req,res)=>{
    //to send status code
    res.status(200).send('THis is a about page');
})

app.post('/about',(req,res)=>{
    res.send('This is a post request from about page');
})

app.post('/',(req,res)=>{
    res.status(404).send("Error not found");
})
app.listen(port,()=>{
    console.log(`The app is started on ${port}`);
});

//for serving static files
app.use('/static',express.static('static'));

//using pug
//set the template engine as pug
app.set('view engine','pug');

//set the views directory
app.set('views',path.join(__dirname,'views'));

//using pug template as endpoint
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Ashim', message: 'Hey there!' })
  })

//passing parameter to pug file
app.get('/',(req,res)=>{
    const param = {'title':'this is a title','content':'This is a content'};
    res.status(200).render('index.pug',param);
})

//rendering login html
app.get('/login',(req,res)=>{
    res.render('login.pug')
})

//getting data
app.use(express.urlencoded());

// app.post('/login',(req,res)=>{
//    let name = req.body.name; //getting name data
//    let email = req.body.email;
//    let output = `The name is ${name} and email address is ${email}`;
//    fs.writeFileSync('output.txt',output); //writing input data in a file
//     console.log(req.body);
//     const param = {'message':'Your message has been submitted successfully'}
//     res.render('login.pug',param)
// })

//connecting to database
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/ashim', {useNewUrlParser: true, useUnifiedTopology: true});

const loginSchema = new mongoose.Schema({
    name: String,
    email: String
  });

  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

  const login = mongoose.model('login', loginSchema);

  //posting to database
  app.post('/login',(req,res)=>{
   var loginData = new login(req.body);
   loginData.save().then(()=>{
    // res.send('send successfully')
    res.render('login.pug')
   }).catch(()=>{
  res.send('not send');
   });
  })