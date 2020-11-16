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
            .then(fac => res.status(201).send({
                message: `Your tem has been created successfully `,
                fac
            }))
            
        }
        static listar(req, res) {
            return ComprobanteContable
              .findAll()
              .then(fac => res.status(200).send(fac));
          }
    
        static getByPk(req, res) {
            return ComprobanteContable
              .findByPk({ where : { comprobantecontableId : req.params.componentecontableId }, attributes:  
                ["fecha_ingreso", "numero_registro"] })
        }

        static getByFk(req, res) {
            return ComprobanteContable
              .findAll({ where : { facturaId: req.params.facturaId }, attributes: 
                ["fecha_ingreso", "numero_registro"]})
              .then(fac => res.status(200).send(fac));
        }


        static modify(req, res) {
          const { fecha_ingreso, numero_registro } = req.body
          return ComprobanteContable.findByPk(req.params.comprobantecontableId).then((comprobante) => { 
              comprobante.update({
                fecha_ingreso: fecha_ingreso || comprobante.fecha_ingreso,
                numero_registro: numero_registro || comprobante.numero_registro
              })
              .then((comprobante) => {
                res.status(200).send({
                  message: 'Comprobante Contable updated successfully',
                  data: {
                    fecha_ingreso: fecha_ingreso || comprobante.fecha_ingreso,
                    numero_registro: numero_registro || comprobante.numero_registro 
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
