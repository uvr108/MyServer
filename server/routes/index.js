import Presupuestos from '../controllers/presupuesto';
import Items from '../controllers/item';
import SubItems from '../controllers/subitem';
import CentroCostos from '../controllers/centrocosto';
import EstadoSolicitudes from '../controllers/estadosolicitud';
import EstadoOrden from "../controllers/estadoorden";
import Solicitudes from '../controllers/solicitud';
import OrdenCompras from '../controllers/ordencompra';
import Facturas from '../controllers/factura';
import EstadoFacturas from '../controllers/estadofactura';
import CuentaContables from '../controllers/cuentacontable';
import ComprobanteContables from '../controllers/comprobantecontable';
import db from '../models';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
    }));


    // Presupuesto
  
    app.post('/api/Presupuesto', Presupuestos.insert); 
    app.get('/api/Presupuesto', Presupuestos.listar); 
    app.get('/api/Presupuesto/pk/:presupuestoId', Presupuestos.getByPk); 
    app.put('/api/Presupuesto/:presupuestoId', Presupuestos.modify);
    app.delete('/api/Presupuesto/:presupuestoId', Presupuestos.deleteByPk);
  
    // Item 
  
    app.post('/api/Item/:presupuestoId', Items.insert); 
    app.get('/api/Item', Items.listar); 
    app.get('/api/Item/pk/:itemId',Items.getByPk);
    app.get('/api/Item/fk/:presupuestoId',Items.getByFk);
    app.put('/api/Item/:itemId', Items.modify);
    app.delete('/api/Item/:itemId', Items.deleteByPk);
  
    // SubItem 
  
    app.post('/api/SubItem/:itemId', SubItems.insert); 
    app.get('/api/SubItem', SubItems.listar);
    app.get('/api/SubItems', SubItems.listartodo); 
    app.get('/api/SubItem/pk/:subitemId',SubItems.getByPk);
    app.get('/api/SubItem/fk/:itemId',SubItems.getByFk)
    app.put('/api/SubItem/:subitemId', SubItems.modify);
    app.delete('/api/SubItem/:subitemId', SubItems.deleteByPk);

    // CentroCosto

    app.post('/api/CentroCosto', CentroCostos.insert); 
    app.get('/api/CentroCosto', CentroCostos.list); 
    app.put('/api/CentroCosto/:centrocostoId', CentroCostos.modify);
    app.delete('/api/CentroCosto/:centrocostoId', CentroCostos.deleteByPk);
  
    // EstadoSolicitud
    app.post('/api/EstadoSolicitud', EstadoSolicitudes.insert); 
    app.get('/api/EstadoSolicitud', EstadoSolicitudes.list); 
    app.put('/api/EstadoSolicitud/:estadosolicitudId', EstadoSolicitudes.modify);
    app.delete('/api/EstadoSolicitud/:estadosolicitudId', EstadoSolicitudes.deleteByPk);

    // EstadoOrden
    app.post('/api/EstadoOrden', EstadoOrden.insert); 
    app.get('/api/EstadoOrden', EstadoOrden.list); 
    app.put('/api/EstadoOrden/:estadoordenId', EstadoOrden.modify);
    app.delete('/api/EstadoOrden/:estadoordenId', EstadoOrden.deleteByPk);

    // Solicitud

    app.post('/api/Solicitud/:subitemId/:centrocostoId/:estadosolicitudId', Solicitudes.insert); 
    app.get('/api/Solicitud', Solicitudes.list); 
    app.get('/api/Solicitud/pk/:solicitudId',Solicitudes.getByPk);
    app.get('/api/Solicitud/fk/:subitemId',Solicitudes.getByFk);
    app.put('/api/Solicitud/:solicitudId', Solicitudes.modify);
    app.delete('/api/Solicitud/:solicitudId', Solicitudes.deleteByPk);

    // OrdenCompra

    app.post('/api/OrdenCompra/:solicitudId/:centrocostoId/:estadoordenId', OrdenCompras.insert); 
    app.get('/api/OrdenCompra', OrdenCompras.listar); 
    app.get('/api/OrdenCompra/pk/:ordencompraId',OrdenCompras.getByPk);
    app.get('/api/OrdenCompra/fk/:ordencompraId',OrdenCompras.getByFk);
    app.put('/api/OrdenCompra/:ordencompraId', OrdenCompras.modify);
    app.delete('/api/OrdenCompra/:ordencompraId', OrdenCompras.deleteByPk);

    // *************************************************

    // EstadoFactura

    app.post('/api/EstadoFactura', EstadoFacturas.insert); 
    app.get('/api/EstadoFactura', EstadoFacturas.listar); 
    app.put('/api/EstadoFactura/:estadofacturaId', EstadoFacturas.modify);
    app.delete('/api/EstadoFactura/:estadofacturaId', EstadoFacturas.deleteByPk);

    // Factura

    app.get('/api/Factura', Facturas.listar);
    app.put('/api/Factura/:facturaId', Facturas.modify);
    app.post('/api/Factura/:estadofacturaId/:ordencompraId', Facturas.insert);

    // CuentaContable

    app.get('/api/CuentaContable', CuentaContables.listar);
    app.post('/api/CuentaContable', CuentaContables.insert);
    app.put('/api/CuentaContable/:cuentacontableId', CuentaContables.modify);
    app.delete('/api/CuentaContable/:cuentacontableId', CuentaContables.deleteByPk);

   // ComprobanteContable

   app.get('/api/ComprobanteContable', ComprobanteContables.listar);
   app.post('/api/ComprobanteContable/:facturaId/:cuentacontableId', ComprobanteContables.insert);
   app.put('/api/ComprobanteContable/:comprobantecontableId', ComprobanteContables.modify);
   app.delete('/api/ComprobanteContable/:comprobantecontableId', ComprobanteContables.deleteByPk);

}
