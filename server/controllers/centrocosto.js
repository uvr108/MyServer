import model from '../models';

const { CentroCosto } = model;

class CentroCostos {
    static insert(req, res) {
        const { nombre } = req.body
            return CentroCosto
            .create({
                nombre
            })
            .then(data => res.status(201).send({
                success: true,
                message: 'CentroCosto successfully created',
                data
            }))
        }
    

    static list(req, res) {
        return CentroCosto
          .findAll({attributes : ['id','nombre'], order: [['id','asc']]})
          .then(p => res.status(200).send(p));
      }
 
      static modify(req, res) {
        const { nombre } = req.body
        return CentroCosto.findByPk(req.params.centrocostoId).then((centrocosto) => {
            centrocosto.update({
              nombre: nombre || centrocosto.name,
            })
            .then((updatedCentroCosto) => {
              res.status(200).send({
                message: 'CentroCosto updated successfully',
                data: {
                  centrocosto: centrocosto || updatedCentroCosto.nombre,
                }
              })
            })
            
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      } 

      static deleteByPk(req, res) {
        return CentroCosto
          .findByPk(req.params.centrocostoId)
          .then(centrocosto => {
            if(!centrocosto) {
              return res.status(400).send({
              message: 'CentroCosto Not Found',
              });
            }
            return centrocosto
              .destroy()
              .then(() => res.status(200).send({
                message: 'CentroCosto successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 

}
    export default CentroCostos;