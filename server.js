const express = require("express")

const app = express()

const PORT = 3000;

// const greeting = (req,res,next) => {
//     console.log("greetings!")
//     next()
//     }

app.use(function (req, res, next) {
    const date = new Date();
    const hours = date.getHours();
    const day = date.getDay()
    if(hours >9 && hours <18 && day<6 && day>0){
        next();
    }else{
        res.send("This website dosen't work Out The work days (from Monday to Friday 9am to 5pm)")
    }
});

app.use(express.static('public'))




app.listen(PORT,err=>err? console.log(err):console.log(`Server is running on port ${PORT}`))
