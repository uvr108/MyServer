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
        static list(req, res) {
            return Factura
              .findAll()
              .then(fac => res.status(200).send(fac));
          }
    
        static getByPk(req, res) {
            return Factura
              .findByPk({ where : { facturaId : req.params.facturaId }, attributes:  
                ["numero_registro", "numero_cuotas", "monto", "fecha_recepcion","observacion"] })
        }

        static getByFk(req, res) {
            return Factura
              .findAll({ where : { ordencompraId: req.params.ordencompraId }, attributes: 
                ["numero_registro", "numero_cuotas", "monto", "fecha_recepcion","observacion"]})
              .then(fac => res.status(200).send(fac));
        }

        static modify(req, res) {
            const { numero_registro, numero_cuotas, monto, fecha_recepcion } = req.body
            return Factura.findByPk(req.params.facturaId).then((fac) => {  
                Factura.update({
                  numero_registro: numero_cuotas || fac.numero_registro,
                  numero_cuotas: numero_cuotas || fac.numero_cuotas,
                  monto: monto || fac.monto,
                  fecha_recepcion: fecha_recepcion || fac.fecha_recepcion
                })
                .then((fac) => {
                  res.status(200).send({
                    message: 'Solicitud updated successfully',
                    data: {
                        numero_registro: numero_registro || fac.numero_registro,
                        numero_cuotas: numero_cuotas || fac.numero_cuotas,
                        monto: monto || fac.monto,
                        fecha_recepcion: fecha_recepcion || fac.fecha_recepcion
      
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
              .then(fac => {
                if(!fac) {
                  return res.status(400).send({
                  message: 'Factura Not Found',
                  });
                }
                return Factura
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
