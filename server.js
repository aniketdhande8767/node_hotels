// const jsonstring = '{"name":"john","age":24,"city":"mehkar"}';
// const jsonobject = JSON.parse(jsonstring);
// console.log(jsonobject.name);
// console.log(jsonobject.city)
// console.log(jsonobject.age)
// let shambhu
// shambhu = jsonobject.name 
// console.log(shambhu)

// console.log(typeof jsonobject)



const express = require('express')

const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());






app.get('/', (req, res) => {
  res.send('Hello World the server is alive')
})





// app.get('/babu', (req, res) => {
//   res.send('Hello babu bhai how can i help u ?')
// })

// app.post('/person',(req,res)=>{
//   res.send("the data was an stored")
//   console.log("data is was an stored")
// })









// import the router files
const personroutes = require('./routes/personroutes')
// use the routers
app.use('/person',personroutes)

//import router files
const menuroutes = require('./routes/menuroutes');
//use the routers
app.use('/menu',menuroutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
 





