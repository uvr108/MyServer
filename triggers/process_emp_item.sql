CREATE OR REPLACE FUNCTION process_emp_item() RETURNS TRIGGER AS $emp_item$
    DECLARE
        presupuestoId int;
    BEGIN
        SELECT "presupuestoId" INTO presupuestoId FROM public."Item" WHERE id = OLD.id;
        
        UPDATE Public."Presupuesto"
            SET monto = (
                 SELECT sum(monto)
                 FROM Public."Item"
                 WHERE "presupuestoId" = presupuestoId
              )
              WHERE id = presupuestoId;

        -- UPDATE Public."Presupuesto"
        -- SET monto = monto + NEW.monto
        -- WHERE id = OLD."presupuestoId";

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_item$ LANGUAGE plpgsql;

