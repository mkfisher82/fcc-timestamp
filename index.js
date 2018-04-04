const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Welcome to my Free Code Camp timestamp app"));

app.get('/:id', (req, res) => {
    let unix = parseInt(req.params.id);
    let natural;

    if (Number.isInteger(unix)) {
        // console.log('Given unix time');
        natural = new Date(req.params.id * 1000).toDateString(); //Change unix to natural
    } else {
        // console.log('Given natural date');
        natural = new Date(req.params.id);
        unix = natural.valueOf() / 1000; //change natural to unix
    }

    res.json({"unix": unix, "natural": natural});
});

app.listen(3000, () => console.log('App listening on port 3000'));
