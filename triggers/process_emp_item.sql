CREATE OR REPLACE FUNCTION process_emp_item() RETURNS TRIGGER AS $emp_item$
    DECLARE
        presupuestoid int;
    BEGIN
        SELECT "presupuestoId" INTO presupuestoid FROM public."Item" WHERE id = OLD.id  LIMIT 1;
        
        UPDATE Public."Presupuesto"
            SET monto = (
                SELECT sum(monto)
                FROM Public."Item"
                WHERE "presupuestoId" = presupuestoid 
             )
             WHERE id = presupuestoid;

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_item$ LANGUAGE plpgsql;

