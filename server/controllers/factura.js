import model from '../models';

const { Factura } = model;

class Facturas {
    static insert(req, res) {
        const { numero_registro, numero_cuotas, monto, fecha_recepcion, observacion } = req.body
        const { estadofacturaId, ordencompraId } = req.params
        return Factura
            .create({
                numero_registro,
                numero_cuotas,
                monto,
                fecha_recepcion,
                observacion,
                estadofacturaId,
                ordencompraId
            })
            .then(fac => res.status(201).send({
                message: `Your tem has been created successfully `,
                fac
            }))
            
        }
        static listar(req, res) {
            return Factura
              .findAll( { attributes : ['id','numero_registro','numero_cuotas','monto','fecha_recepcion','observacion','estadofacturaId','ordencompraId'] })
              .then(fac => res.status(200).send(fac));
          }

        static getByPk(req, res) {
            return Factura
              .findByPk(req.params.facturaId)
              .then(factura => res.status(200).send(factura));
        }          

        static getByFk(req, res) {
          return Factura
            .findAll({ where : { ordencompraId: req.params.ordencompraId },
              attributes : ['id','numero_registro','numero_cuotas','monto',
              'fecha_recepcion','observacion','estadofacturaId','ordencompraId'] ,
              order: [
                ['id', 'ASC']
              ]}
            )
            .then(fac => res.status(200).send(fac))
            .catch(error => { console.log('caught', error.message); });
      }


        static modify(req, res) {
          const { numero_registro, numero_cuotas, monto, fecha_recepcion, observacion, EstadoFactura } = req.body

          return Factura.findByPk(req.params.facturaId).then((factura) => { 
              factura.update({
                numero_registro: numero_registro || factura.numero_registro,
                numero_cuotas: numero_cuotas || factura.numero_cuotas,
                monto: monto || factura.monto,
                fecha_recepcion: fecha_recepcion || factura.fecha_recepcion,
                observacion: observacion || factura.observacion,
                estadofacturaId: EstadoFactura || factura.estadofacturaId
              })
              .then((factura) => {
                res.status(200).send({
                  message: 'Factura updated successfully',
                  data: {
                    numero_registro: numero_registro || factura.numero_registro,
                    numero_cuotas: numero_cuotas || factura.numero_cuotas,
                    monto: monto || factura.monto,
                    fecha_recepcion: fecha_recepcion || factura.fecha_recepcion,
                    observacion: observacion || factura.observacion,
                    estadofacturaId: EstadoFactura || factura.estadofacturaId    
                  }
                })
              })
              .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        }

        static deleteByPk(req, res) {
          return Factura
            .findByPk(req.params.facturaId)
            .then(factura => {
              if(!factura) {
                return res.status(400).send({
                message: 'Solicitud Not Found',
                });
              }
              return factura
                .destroy()
                .then(() => res.status(200).send({
                  message: 'Factura successfully deleted'
                }))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
        } 

}

export default Facturas
