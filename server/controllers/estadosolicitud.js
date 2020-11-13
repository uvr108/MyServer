import model from '../models';

const { EstadoSolicitud } = model;

class EstadoSolicitudes {
    static insert(req, res) {
        const { nombre } = req.body
            return EstadoSolicitud
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'EstadoSolicitud successfully created',
                data
            }))
        }
    

    static list(req, res) {
        return EstadoSolicitud
          .findAll({attributes : ['id','nombre'], order: [['id','asc']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return EstadoSolicitud.findByPk(req.params.estadosolicitudId).then((estadosolicitud) => {
            estadosolicitud.update({
              nombre: nombre || estadosolicitud.name,
            })
            .then((updatedEstadoSolicitud) => {
              res.status(200).send({
                message: 'EstadoSolicitud updated successfully',
                data: {
                  estadosolicitud: estadosolicitud || updatedEstadoSolicitud.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static deleteByPk(req, res) {
        return EstadoSolicitud
          .findByPk(req.params.estadosolicitudId)
          .then(estadosolicitud => {
            if(!estadosolicitud) {
              return res.status(400).send({
              message: 'EstadoSolicitud Not Found',
              });
            }
            return estadosolicitud
              .destroy()
              .then(() => res.status(200).send({
                message: 'EstadoSolicitud successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default EstadoSolicitudes;