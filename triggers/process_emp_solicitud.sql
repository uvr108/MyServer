CREATE OR REPLACE FUNCTION process_emp_solicitud() RETURNS TRIGGER AS $process_emp_solicitud$
    DECLARE
        -- subitemid int;
    BEGIN

        -- SELECT "subitemId" INTO subitemid FROM public."Solicitud" WHERE id = NEW.id;
        RAISE NOTICE 'solicitudId -> % ', NEW.id;

        -- INSERT INTO Public."OrdenCompra" ("numero_oc","solicitudId") values ('Editar', NEW.id);

        INSERT INTO Public."OrdenCompra" ("numero_oc", "solicitudId" ) 
        VALUES ('Nuevo', NEW.id);


        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $process_emp_solicitud$ LANGUAGE plpgsql;

