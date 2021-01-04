CREATE OR REPLACE FUNCTION process_emp_oc() RETURNS TRIGGER AS $process_emp_oc$

    BEGIN

        -- INSERT INTO Public."Factura" ("numero_registro","ordencompraId") values ('Editar', NEW.id);

        RAISE NOTICE 'ordencompraId -> % ', NEW.id;

        INSERT INTO Public."Factura" ("numero_registro", "ordencompraId" ) 
        VALUES ('Nuevo', NEW.id);

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $process_emp_oc$ LANGUAGE plpgsql;

