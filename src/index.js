const express = require('express');
const app = express();
const morgan = require('morgan');
//setting
app.set('port',process.env.PORT || 3000) ;
app.set('json spaces',2);
//middleawares
app.use(morgan('dev'));
//app.use(morgan('combined'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//router exportando
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

// starting server
app.listen(app.get('port'),() => {
    console.log('Server in porrt ${3000cls}');
});