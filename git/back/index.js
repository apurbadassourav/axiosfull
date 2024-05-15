const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())
app.use(express.json())
const users=[
    {
        firstname :'apurba',
        lastname :'das',
        email:'apurbadassourav@gmail.com',
        password :'123456'
    },
    {
        firstname :'apurba1',
        lastname :'das2',
        email:'sourav@gmail.com',
        password :'123456'
    },
    {
        firstname :'apurba3',
        lastname :'das4',
        email:'apurbadas3125@gmail.com',
        password :'123456'
    },
    {
        firstname :'apurba5',
        lastname :'das6',
        email:'apurbad4568@gmail.com',
        password :'123456'
    },
    {
        firstname :'apurba7',
        lastname :'das8',
        email:'apurbadass457@gmail.com',
        password :'123456'
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users',(req,res)=>{
res.send(users)
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    newUser=req.body
    users.push(newUser)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})