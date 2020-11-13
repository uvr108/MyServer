sequelize model:generate --name Presupuesto --attributes nombre:string,monto:integer
sequelize model:generate --name Item --attributes nombre:string,monto:integer
sequelize model:generate --name SubItem --attributes nombre:string,monto:integer
sequelize model:generate --name CentroCosto --attributes nombre:string
sequelize model:generate --name EstadoSolicitud --attributes nombre:string
sequelize model:generate --name Solicitud --attributes solicitante:string,fecha:date,numero_registro:string
####################################################################################
sequelize model:generate --name EstadoOrden  --attributes nombre:string
sequelize model:generate --name OrdenCompra --attributes  fecha_emision:date,numero_oc:string,observaciones:string
#####################################################################################
sequelize model:generate --name EstadoFactura --attributes nombre:string
sequelize model:generate --name Factura --attributes numero_registro:string,numero_cuotas:integer,monto:integer,fecha_recepcion:date,observacion:string
#####################################################################################
sequelize model:generate --name CuentaContable --attributes nombre:string
sequelize model:generate --name ComprobanteContable --attributes fecha_ingreso:date,numero_registro:string