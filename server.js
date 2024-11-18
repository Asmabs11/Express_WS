const express = require ("express")
const path = require("path")
const app =express()
console.log(__dirname)
app.listen(5000, (err)=>err? console.log(err): console.log("server is running on port 5000"))

function checkWorkingHours(req, res, next) {
    const currentDate = new Date();
    const day = currentDate.getDay();
    
    const hours = currentDate.getHours();

    if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
        next(); 
    } else {
        res.status(403).send('The website is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
     }
    }
    app.use(checkWorkingHours);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname,'public')));



app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});


app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname,'index2.html'));
});


