import model from '../models';

const { Solicitud } = model;

class Solicitudes {
    static insert(req, res) {
        const { solicitante, fecha, numero_registro } = req.body
        const { subitemId, centrocostoId, estadosolicitudId } = req.params
        return Solicitud
            .create({
                solicitante,
                fecha,
                numero_registro,
                subitemId,
                centrocostoId,
                estadosolicitudId
            })
            .then(solicitud => res.status(201).send({
                message: `Your tem has been created successfully `,
                solicitud
            }))
            
        }
        static list(req, res) {
            return Solicitud
              .findAll({ attributes : ['id','solicitante','fecha','numero_registro',
              'estadosolicitudId','centrocostoId','subitemId']})
              .then(solicitudes => res.status(200).send(solicitudes));
          }
    
        static getByPk(req, res) {
            return Solicitud
            .findByPk(req.params.solicitudId)
            .then(sol => res.status(200).send(sol));
        }

        static getByFk(req, res) {
            return Solicitud
              .findAll({ where : { subitemId: req.params.subitemId },
                attributes : ['id','solicitante','fecha','numero_registro','centrocostoId','estadosolicitudId','subitemId']}
              )
              .then(solicitudes => res.status(200).send(solicitudes));
        }

        static modify(req, res) {
          const { solicitante, fecha, numero_registro, centrocostoId, estadosolicitudId } = req.body
          // const { centrocostoId, estadosolicitudId } = req.params
          console.log(`LOG: ${solicitante}, ${fecha}, ${numero_registro}`);
          console.log(`LOG: ${centrocostoId}, ${estadosolicitudId}`);
          return Solicitud.findByPk(req.params.solicitudId).then((solicitud) => 
          { 
              solicitud.update({
                solicitante: solicitante || solicitud.solicitante,
                fecha: fecha || solicitud.fecha,
                numero_registro:numero_registro || solicitud.numero_registro,
                centrocostoId: centrocostoId || solicitud.centrocostoId,
                estadosolicitudId: estadosolicitudId || solicitud.estadosolicitudId
              })
              .then((updatedSolicitud) => {
                res.status(200).send({
                  message: 'Solicitud updated successfully',
                  data: {
                    solicitante: solicitante || updatedSolicitud.solicitante,
                    fecha: fecha || updatedSolicitud.fecha,
                    numero_registro:numero_registro || updateSolicitud.numero_registro,
                    centrocostoId: centrocostoId || updateSolicitud.centrocostoId,
                    estadosolicitudId: estadosolicitudId || updateSolicitud.estadosolicitudId
                  }
                })
              })
              .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        }
   
       static deleteByPk(req, res) {
            return Solicitud
              .findByPk(req.params.solicitudId)
              .then(solicitud => {
                if(!solicitud) {
                  return res.status(400).send({
                  message: 'Solicitud Not Found',
                  });
                }
                return solicitud
                  .destroy()
                  .then(() => res.status(200).send({
                    message: 'Solicitud successfully deleted'
                  }))
                  .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error))
          } 

    }

export default Solicitudes
