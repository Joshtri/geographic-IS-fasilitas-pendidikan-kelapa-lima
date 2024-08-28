const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;
// const db = require('./utils/database');


const dashboardRoute = require('./router/dashboard');
const locationRoute = require('./router/location');

// Middleware untuk menangani request body berformat JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
// Menentukan path folder views
app.set('views', path.join(__dirname, 'views'));

// Menggunakan EJS sebagai view engine
app.set('view engine', 'ejs');


app.use('/', dashboardRoute);
app.use('/data', locationRoute);



// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
