const express = require('express');
const hbs = require('hbs');
//require('dotenv').config();

const app = express();
const PORT=process.env.PORT;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(`${__dirname}/views/partials`);
// the routes go here:
//rutas
app.use('/',require('./routes'))


app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
