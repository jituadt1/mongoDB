const express = require('express');
const bodyparser = require('body-parser');
const path1 = require('path');

const mongojs = require('mongojs')
const db = mongojs('test', ['customers'])

const objectId = mongojs.objectId;

const app = express();


app.set('view engine','ejs');
app.set('views', path1.join(__dirname, 'views'))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false
}));

app.use(express.static(path1.join(__dirname,'public')))


app.delete('/users/delete/:id', (req, res) => {
    db.customers.remove({_id: objectId(req.params.id)}, (err, result) => {
        if(err) return console.log(err);
        
        res.redirect('/');s
    } )
})



app.get('/', (req, res) => {

    db.customers.find(function(err, docs) {
        
    res.render('Form',{
        title: 'Add Customers',
        users: docs
    })

})

})

app.post('/users/add', (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    db.customers.insert(newUser, (err, result) => {
        if(err) return console.log(err);

        res.redirect('/');
    })
})
app.listen(3000, () => console.log('Listening on port 3000.....'));

