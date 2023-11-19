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
    const itemId = req.params.subject;
    try {
      const item = await Item.findById(itemId);
      console.log(item);
      if (!item){
      return res.status(404).json({message:'Elemento no encontrado'});
      }
      res.json(item.text);
    } catch (error) {
      console.error('Error al obtener los elementos por Id:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};
