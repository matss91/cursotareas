require('dotenv').config();
const express=require("express")
const connectDB = require('./config/db');
const router = require('./routes/index');
const createHttpError = require('http-errors');
const cors = require('cors');


const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); // Permite peticiones desde React

// O permitir todas las solicitudes (solo en desarrollo)
app.use(cors());
app.use(express.json()); 

// se utiliza para acceder a los datos de formulario
app.use(express.urlencoded({ extended: true }));
connectDB();



app.use('/api',router);

app.use(function(req, res, next){
    const err = createHttpError(404, 'Not Found');
    next(err);
  });

app.use(function(err , req, res , next ) {
  
    return res.status(err.status || 500).json({
      ok : false,
      msg : err.message
      });
  });

 app.listen(8000, ()=> {
console.log(`Server running in https://localhost:8000`);
});

module.exports=app