const Topics = require('../models/topics_models');


module.exports = {
  getText: async (req, res) => {
    try {
      const items = await Topics.find();
      //console.log(items);
      res.json(items);
    } catch (error) {
      console.error('Error al obtener los elementos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
  getTopicsById: async (req, res) => {
    const itemId = req.params.idtext;
    try {
      const item = await Topics.find({ idtext: itemId})
      console.log(item[0].text);
      if (!item){
      return res.status(404).json({message:'Elemento no encontrado'});
      }
      res.json(item[0].text);
    } catch (error) {
      console.error('Error al obtener los elementos por Id:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
    /*console.log(req.params.id);
    const itemId = req.params.id;
    try {
      const item = await Topics.findById(itemId);
     // console.log(item);
      if (!item){
      return res.status(404).json({message:'Elemento no encontrado'});
      }
      res.json(item);
    } catch (error) {
      console.error('Error al obtener los elementos por Id:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }*/
  },
  addTopic: async (req, res) => {

    const { idtext,comment } = req.body;
   // console.log(req.body);
    if (!comment) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const comments = new Topics({
      comments
    });
    /*
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
      //res.json(newItem.name);
      //res.json('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al agregar el elemento:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }*/
  },
};
