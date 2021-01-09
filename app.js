const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const indexRouter = require('./routes/index');
const cartRouter = require('./routes/cart');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(session({secret: "Se picó el carrito"}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/cart', cartRouter);

app.use(express.static(path.join(__dirname, './public')));

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3000');
    console.log('http://localhost:3000');
});