const PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const itemRoutes = require('./routes/item_routes');


const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');
app.use('/api', itemRoutes);


mongoose.connect('mongodb://localhost:27017/DBBlog', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Conexión a MongoDB exitosa');
   })
   .catch(error => {
      console.error('Error de conexión a MongoDB:', error);
   });
   
    
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
