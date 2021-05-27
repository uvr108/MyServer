import model from '../models';

const { Solicitud } = model;

class Solicitudes {
    static insert(req, res) {
        const { solicitante, fecha, numero_registro,  centrocostoId, estadosolicitudId } = req.body
        const { subitemId } = req.params
        return Solicitud
            .create({
                solicitante,
                fecha,
                numero_registro,
                centrocostoId,
                estadosolicitudId,
                subitemId
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
            return  Solicitud
              .findAll({ where : { subitemId: req.params.subitemId },
                attributes : ['id','solicitante','fecha','numero_registro','centrocostoId','estadosolicitudId','subitemId'],
                order: [
                  ['id', 'ASC']
                ]}
              )
              .then(solicitudes => res.status(200).send(solicitudes))
              .catch(error => { console.log('caught', error.message); });
        }
/*
        static modify(req, res) {
          const { solicitante, fecha, numero_registro } = req.body
          return Solicitud
            .findByPk(req.params.solicitudId)
            .then((solicitud) => {
              book.update({
                solicitante: solicitante || solicitud.solicitante,
                fecha: fecha || solicitud.fecha,
                numero_registro: numero_registro || solicitud.numero_registro,
              })
              .then((updateSolicitud) => {
                res.status(200).send({
                  message: 'Solicitud updated successfully',
                  data: {
                    solicitante: solicitante || updateSolicitud.solicitante,
                    fecha: fecha || updateSolicitud.fecha,
                    numero_registro: numero_registro || updateSolicitud.numero_registro,
                  }
                })
              })
              .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        }
*/
        
        static modify(req, res) {
          const { solicitante, fecha, numero_registro ,CentroCosto, EstadoSolicitud } = req.body
          console.log(`LOG: ${solicitante} ${fecha} ${numero_registro} ${CentroCosto} ${EstadoSolicitud}`);
          return Solicitud.findByPk(req.params.solicitudId).then((solicitud) => 
          { 
              solicitud.update({
                solicitante: solicitante || solicitud.solicitante,
                fecha: fecha || solicitud.fecha,
                numero_registro:numero_registro || solicitud.numero_registro,
                centrocostoId: CentroCosto || solicitud.centrocostoId,
                estadosolicitudId: EstadoSolicitud || solicitud.estadosolicitudId
              })
              .then((updatedSolicitud) => {
                res.status(200).send({
                  message: 'Solicitud updated successfully',
                  data: {
                    solicitante: solicitante || updatedSolicitud.solicitante,
                    fecha: fecha || updatedSolicitud.fecha,
                    numero_registro:numero_registro || updateSolicitud.numero_registro,
                    centrocostoId: CentroCosto || updateSolicitud.centrocostoId,
                    estadosolicitudId: EstadoSolicitud || updateSolicitud.estadosolicitudId
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
