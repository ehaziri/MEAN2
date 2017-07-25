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


const authRoutes = require('./server/config/routes/auth');
// const messageRoutes = require('./server/config/routes/messages');
// const commentRoutes = require('./server/config/routes/comments');

app.use('/auth', authRoutes);
// app.use('/messages', messageRoutes);
// app.use('/comments', commentRoutes);

require('./server/config/routes/auth');
// require('./server/config/routes/messages');
// require('./server/config/routes/comments');

app.listen(port, () => console.log(`Duke degjuar ne porten: ${port}`));