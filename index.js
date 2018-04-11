const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'landing.html')));

app.get('/:id', (req, res) => {
  let unix = parseInt(req.params.id, 10);
  let natural;

  if (Number.isInteger(unix)) {
    // console.log('Given unix time');
    natural = new Date(req.params.id * 1000).toDateString(); // Change unix to natural
  } else {
    // console.log('Given natural date');
    const date = new Date(req.params.id);
    natural = date.toDateString();
    unix = date.valueOf() / 1000; // change natural to unix
  }

  res.json({
    unix,
    natural,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

// url https://floating-garden-66926.herokuapp.com/
