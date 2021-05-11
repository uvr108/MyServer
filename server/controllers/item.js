import model from '../models';

const { Item } = model;

class Items {
    static insert(req, res) {
        const { nombre } = req.body
        const { presupuestoId } = req.params
        return Item
            .create({
                nombre,
                presupuestoId
            })
            .then(item => res.status(201).send({
                message: `Your book with the title ${nombre} has been created successfully `,
                item
            }))
            
        }
       
        static listar(req, res) {
            return Item
              .findAll({attributes : ['id','nombre','monto']})
              .then(items => res.status(200).send(items));
          }
        
        static getByPk(req, res) {
            return Item
              .findByPk(req.params.itemId)
              .then(items => res.status(200).send(items));
        }

          static getByFk(req, res) {
            return Item
              .findAll({ where : { presupuestoId: req.params.presupuestoId},
                 attributes : ['id','nombre','monto','presupuestoId'], order: [['id','ASC']]})
              .then(items => res.status(200).send(items));
          }
    
          static modify(req, res) {
            const { nombre } = req.body
            return Item.findByPk(req.params.itemId).then((item) => {  
                item.update({
                  nombre: nombre || item.nombre,
                  // monto: monto || item.monto
                })
                .then((updatedItem) => {
                  res.status(200).send({
                    message: 'Item updated successfully',
                    data: {
                      nombre: nombre || updatedItem.nombre,
                    }
                  })
                })
                .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error));
          } 

          static deleteByPk(req, res) {
            return Item
              .findByPk(req.params.itemId)
              .then(item => {
                if(!item) {
                  return res.status(400).send({
                  message: 'Item Not Found',
                  });
                }
                return item
                  .destroy()
                  .then(() => res.status(200).send({
                    message: 'Item successfully deleted'
                  }))
                  .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error))
          } 

    }

export default Items

