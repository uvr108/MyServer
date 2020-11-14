import model from '../models';

const { EstadoOrden } = model;

class EstadoOrdenes {
    static insert(req, res) {
        const { nombre } = req.body
            return EstadoOrden
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'EstadoOC successfully created',
                data
            }))
        }
    

    static list(req, res) {
        return EstadoOrden
          .findAll({attributes : ['id','nombre'], order: [['id','asc']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return EstadoOrden.findByPk(req.params.estadoordenId).then((estadoorden) => {
            estadoorden.update({
              nombre: nombre || estadoorden.name,
            })
            .then((updatedEstadoOrden) => {
              res.status(200).send({
                message: 'EstadoOrden updated successfully',
                data: {
                  estadoorden: estadoorden || updatedEstadoOrden.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static deleteByPk(req, res) {
        return EstadoOrden
          .findByPk(req.params.estadoordenId)
          .then(estadoOrden => {
            if(!estadoOrden) {
              return res.status(400).send({
              message: 'EstadoOrden Not Found',
              });
            }
            return estadoOrden
              .destroy()
              .then(() => res.status(200).send({
                message: 'EstadoOrden successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default EstadoOrdenes;
    