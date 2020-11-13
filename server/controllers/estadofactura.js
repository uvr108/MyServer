import model from '../models';

const { EstadoFactura } = model;

class EstadoFacturas {
    static insert(req, res) {
        const { nombre } = req.body
            return EstadoFactura
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'EstadoFactura successfully created',
                data
            }))
        }
    

    static listar(req, res) {
        return EstadoFactura
          .findAll({attributes : ['id','nombre'], order: [['id','asc']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return EstadoFactura.findByPk(req.params.estadofacturaId).then((estadofactura) => {
            estadofactura.update({
              nombre: nombre || estadofactura.name,
            })
            .then((updatedEstadoFactura) => {
              res.status(200).send({
                message: 'EstadoFactura updated successfully',
                data: {
                  nombre: nombre || updatedEstadoFactura.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static deleteByPk(req, res) {
        return EstadoFactura
          .findByPk(req.params.estadofacturaId)
          .then(estadofactura => {
            if(!estadofactura) {
              return res.status(400).send({
              message: 'EstadoFactura Not Found',
              });
            }
            return estadofactura
              .destroy()
              .then(() => res.status(200).send({
                message: 'EstadoFactura successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default EstadoFacturas;
    