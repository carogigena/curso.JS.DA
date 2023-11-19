const Item = require('../models/item_models');


module.exports = {
  getUsus: async (req, res) => {
    try {
      const items = await Item.find();
      console.log(items);
      res.json(items);
    } catch (error) {
      console.error('Error al obtener los elementos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
  checkUsu: async (req, res) => {
    const { username,password,email} = req.body;
    let user =username;
    let pass = password;
    try {
      const item = await Item.find({"username":user,"password":pass});
      if (item.length===0){
        return res.json('0');
      }else {res.json(item[0].name);}
    } catch (error) {
      return res.json('1');
    }
  },
  getItemById: async (req, res) => {
    const itemId = req.params.id;
    try {
      const item = await Item.findById(itemId);
      console.log(item);
      if (!item){
      return res.status(404).json({message:'Elemento no encontrado'});
      }
      res.json(item.email);
    } catch (error) {
      console.error('Error al obtener los elementos por Id:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  
  addUsu: async (req, res) => {

    const { name, lastname,email, password, username } = req.body;
    console.log(req.body);
    if (!email || !password || !username ||!name ||!lastname) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const item = new Item({
      name,
      lastname,
      email,
      password,
      username,
    });
    
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
      res.json('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al agregar el elemento:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};
