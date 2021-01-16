import model from '../models';

const { OrdenCompra } = model;

class OrdenCompras {
    static insert(req, res) {
        const { fecha_emision, numero_oc, observaciones } = req.body
        const { solicitudId, centrocostoId, estadoordenId } = req.params
        console.log(`solicitudId ${solicitudId} centrocostoId ${centrocostoId} estadoordenId ${estadoordenId}`);
        return OrdenCompra
            .create({
                fecha_emision,
                numero_oc,
                observaciones,
                solicitudId,
                centrocostoId,
                estadoordenId
            })
            .then(ordencompra => res.status(201).send({
                message: `Your subitem has been created successfully `,
                ordencompra
            }))            
        }
        static listar(req, res) {
            return OrdenCompra
              .findAll()
              .then(oc => res.status(200).send(oc));
          }
    
        static getByPk(req, res) {
            return OrdenCompra
              .findByPk(req.params.ordencompraId)
              .then(oc => res.status(200).send(oc));
        }

        static getByFk(req, res) {
          return OrdenCompra
            .findAll({ where : { solicitudId: req.params.solicitudId },
              attributes : ['id','numero_oc','fecha_emision','observaciones','centrocostoId','estadoordenId', 'solicitudId']}
            )
            .then(solicitudes => res.status(200).send(solicitudes));
      }

        static modify(req, res) {
            const { fecha_emision, numero_oc, observaciones, centrocostoId, estadoordenId } = req.body

            return OrdenCompra.findByPk(req.params.ordencompraId).then((ordencompra) => { 
                ordencompra.update({
                  fecha_emision: fecha_emision || ordencompra.fecha_emision,
                  numero_oc: numero_oc || ordencompra.numero_oc,
                  observaciones: observaciones || ordencompra.observaciones,
                  centrocostoId: centrocostoId || ordencompra.centrocostoId,
                  estadoordenId: estadoordenId || ordencompra.estadoordenId
                })
                .then((upOrden) => {
                  res.status(200).send({
                    message: 'OrdenCompra updated successfully',
                    data: {
                        fecha_emision: fecha_emision || upOrden.fecha_emision,
                        numero_oc: numero_oc || upOrden.numero_oc,
                        observaciones: observaciones || upOrden.observaciones,
                        centrocostoId: centrocostoId || upOrden.centrocostoId,
                        estadoordenId: estadoordenId || upOrden.estadoordenId     
                    }
                  })
                })
                .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error));
          }
          
       static deleteByPk(req, res) {
            return OrdenCompra
              .findByPk(req.params.ordencompraId)
              .then(oc => {
                if(!oc) {
                  return res.status(400).send({
                  message: 'OedenCompra Not Found',
                  });
                }
                return oc
                  .destroy()
                  .then(() => res.status(200).send({
                    message: 'OrdenCompra successfully deleted'
                  }))
                  .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error))
          } 

    }

export default OrdenCompras

