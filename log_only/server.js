const express = require('express');
const app = express();
const parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = {
	secret: 'cookieMonster',
	resave: false,
	saveUninitialized: true,
	name: 'ninjasCookie',
	cookie: {
		secure: false,
		httpOnly: false,
		maxAge: 3600000
	}
}

app.use(session(sessionConfig));
app.use(cookieParser('NinjasCookies'))
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.resolve('bower_components')));
app.use(express.static(path.resolve('client')));
require(path.resolve('server', 'config', 'database'));
app.use(require('./server/middleware/populateUser'));

// require(path.resolve('server', 'config', 'routes'))(app);

const authRoutes = require('./server/config/routes/auth');
// const beltRoutes = require('./server/config/routes/belts');
// const ninjaRoutes = require('./server/config/routes/ninjas');

app.use('/auth', authRoutes);
// app.use('/ninjas', ninjaRoutes);
// app.use('/belts', beltRoutes);

require('./server/config/routes/auth');
// require('./server/config/routes/ninjas');
// require('./server/config/routes/belts');

app.listen(port, () => console.log(`Duke degjuar ne porten: ${port}`));