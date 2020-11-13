import model from '../models';

const { SubItem, Item, Presupuesto } = model;

class SubItems {
    static insert(req, res) {
        const { nombre,monto } = req.body
        const { itemId } = req.params
        return SubItem
            .create({
                nombre,
                monto,
                itemId
            })
            .then(subitem => res.status(201).send({
                message: `Your subitem has been created successfully `,
                subitem
            }))
            
        }
        static listar(req, res) {
            return SubItem
              .findAll({attributes : ['id','nombre','monto']})
              .then(subitems => res.status(200).send(subitems));
          }
          
          static listartodo(req, res) {
            return SubItem
              .findAll({attributes : ['id','nombre','monto']}, {include : [{ model : Item } ] ,
                 where : { presupuestoId : 3 } } )
              .then(subitems => res.status(200).send(subitems))
        }  

        static getByPk(req, res) {
            return SubItem
              .findByPk(req.params.subitemId)
              .then(subitems => res.status(200).send(subitems));
        }

        static getByFk(req, res) {
            return SubItem
              .findAll({ where : { itemId: req.params.itemId}, attributes: ['id','nombre','monto']})
              .then(subitems => res.status(200).send(subitems));
        }

        static modify(req, res) {
            const { nombre, monto } = req.body
            return SubItem.findByPk(req.params.subitemId).then((subitem) => { console.log(nombre, monto),
                subitem.update({
                  nombre: nombre || subitem.nombre,
                  monto: monto || parseInt(subitem.monto)
                })
                .then((updatedSubItem) => {
                  res.status(200).send({
                    message: 'SubItem updated successfully',
                    data: {
                      nombre: nombre || updatedSubItem.nombre,
                      monto: monto || updatedSubItem.monto
                    }
                  })
                })
                .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error));
          }
          
       static deleteByPk(req, res) {
            return SubItem
              .findByPk(req.params.subitemId)
              .then(subitem => {
                if(!subitem) {
                  return res.status(400).send({
                  message: 'SubItem Not Found',
                  });
                }
                return subitem
                  .destroy()
                  .then(() => res.status(200).send({
                    message: 'SubItem successfully deleted'
                  }))
                  .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error))
          } 

    }

export default SubItems

