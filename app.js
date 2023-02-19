var express = require('express')
var app = express()
var port = 3000

app.set('view engine','ejs')

var name={
    Fullname:'Rattana Chomwihok'
}

app.get('/',(req,res)=>{
    res.render('page/index',{user:name})
})

app.listen(port,()=>{
    console.log(`App Star at port ${port}`)
})