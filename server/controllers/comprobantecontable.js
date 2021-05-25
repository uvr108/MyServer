import model from '../models';

const { ComprobanteContable } = model;

class ComprobanteContables {
    static insert(req, res) {
        const { numero_registro, fecha_ingreso } = req.body
        const { facturaId, cuentacontableId } = req.params
        return ComprobanteContable
            .create({
                numero_registro,
                fecha_ingreso,
                facturaId,
                cuentacontableId
            })
            .then(cuenta => res.status(201).send({
                message: `Your tem has been created successfully `,
                cuenta
            }))
            
        }
        static listar(req, res) {
            return ComprobanteContable
              .findAll({ attributes: ['id','numero_registro','fecha_ingreso', 'cuentacontableId', 'facturaId'] })
              .then(fac => res.status(200).send(fac));
          }
    
        static getByPk(req, res) {
            return ComprobanteContable
              .findByPk({ where : { comprobantecontableId : req.params.componentecontableId }, attributes:  
                ['id','numero_registro','fecha_ingreso', 'cuentacontableId', 'facturaId'] });
        }

        static getByFk(req, res) {
            return ComprobanteContable
              .findAll({ where : { facturaId: req.params.facturaId }, attributes: 
                ['id', 'numero_registro','fecha_ingreso', 'cuentacontableId', 'facturaId'],
                order: [
                  ['id', 'ASC']
                ]})
              .then(comp => res.status(200).send(comp))
              .catch(error => { console.log('caught', error.message); });
        }


        static modify(req, res) {
          const { fecha_ingreso, numero_registro, CuentaContable } = req.body
          return ComprobanteContable.findByPk(req.params.comprobantecontableId).then((comprobante) => { 
              comprobante.update({
                fecha_ingreso: fecha_ingreso || comprobante.fecha_ingreso,
                numero_registro: numero_registro || comprobante.numero_registro,
                cuentacontableId: CuentaContable || comprobante.cuentacontableId
              })
              .then((comprobante) => {
                res.status(200).send({
                  message: 'Comprobante Contable updated successfully',
                  data: {
                    fecha_ingreso: fecha_ingreso || comprobante.fecha_ingreso,
                    numero_registro: numero_registro || comprobante.numero_registro,
                    cuentacontableId: CuentaContable || comprobante.cuentacontableId
                  }
                })
              })
              .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        }

        static deleteByPk(req, res) {
          return ComprobanteContable
            .findByPk(req.params.comprobantecontableId)
            .then(oc => {
              if(!oc) {
                return res.status(400).send({
                message: 'Comprobante contable Not Found',
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

export default ComprobanteContables
