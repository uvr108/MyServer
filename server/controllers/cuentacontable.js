import model from '../models';

const { CuentaContable } = model;

class CuentaContables {
    static insert(req, res) {
        const { nombre } = req.body
            return CuentaContable
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'CuentaContable successfully created',
                data
            }))
        }
    

    static listar(req, res) {
        return CuentaContable
          .findAll({attributes : ['id','nombre'], order: [['id','asc']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return CuentaContable.findByPk(req.params.cuentacontableId).then((cuentacontable) => {
            cuentacontable.update({
              nombre: nombre || cuentacontable.nombre,
            })
            .then((updateCuentaContable) => {
              res.status(200).send({
                message: 'CuentaContable updated successfully',
                data: {
                  nombre: nombre || updateCuentaContable.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static deleteByPk(req, res) {
        return CuentaContable
          .findByPk(req.params.cuentacontableId)
          .then(cuentacontable => {
            if(!cuentacontable) {
              return res.status(400).send({
              message: 'EstadoFactura Not Found',
              });
            }
            return cuentacontable
              .destroy()
              .then(() => res.status(200).send({
                message: 'CuentaContable successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default CuentaContables;
    