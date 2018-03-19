const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();


const users = [
 {
     id:1,
     first_name: 'John',
     last_name: 'Smith',
     email: 'johnsmith@gmail.com'
 },
 {
    id:2,
    first_name: 'Steve',
    last_name: 'Jobs',
    email: 'stevejobs@gmail.com'
},
{
    id:3,
    first_name: 'Mark',
    last_name: 'Allison',
    email: 'mallison@gmail.com'
}
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('index' ,{ 
        title: 'Customers',
        users: users
    });
})


app.listen(3000, () => console.log('Listening to port 3000.....'))