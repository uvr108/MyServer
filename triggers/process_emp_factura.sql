CREATE OR REPLACE FUNCTION process_emp_factura() RETURNS TRIGGER AS $process_emp_factura$
    DECLARE
        -- subitemid int;
    BEGIN

        -- SELECT "subitemId" INTO subitemid FROM public."Solicitud" WHERE id = NEW.id;
        RAISE NOTICE 'facturaId -> %', NEW.id;

        -- INSERT INTO Public."ComprobanteContable" ("numero_registro","facturaId") values ('Editar', NEW.id);

        INSERT INTO Public."ComprobanteContable" ("numero_registro", "facturaId" ) 
        VALUES ('Nuevo', NEW.id);


        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $process_emp_factura$ LANGUAGE plpgsql;

