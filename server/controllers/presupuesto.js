import model from '../models';

const { Presupuesto } = model;

class Presupuestos {
    static insert(req, res) {
        const { nombre } = req.body
            return Presupuesto
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'Presupuesto successfully created',
                data
            }))
        }

    static listar(req, res) {
        return Presupuesto
          .findAll({attributes : ['id','nombre','monto'], order: [['id','ASC']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return Presupuesto.findByPk(req.params.presupuestoId).then((presupuesto) => {
            presupuesto.update({
              nombre: nombre || presupuesto.nombre,
            })
            .then((updatedPresupuesto) => {
              res.status(200).send({
                message: 'Presupuesto updated successfully',
                data: {
                  nombre: nombre || updatedPresupuesto.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static getByPk(req, res) {
        return Presupuesto
          .findByPk(req.params.presupuestoId, {attributes : ['id','nombre','monto'], order: [['id','asc']]})
          .then(presu => res.status(200).send(presu));
    }

      static deleteByPk(req, res) {
        return Presupuesto
          .findByPk(req.params.presupuestoId)
          .then(presupuesto => {
            if(!presupuesto) {
              return res.status(400).send({
              message: 'Presupuesto Not Found',
              });
            }
            return presupuesto
              .destroy()
              .then(() => res.status(200).send({
                message: 'Presupuesto successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default Presupuestos;
    