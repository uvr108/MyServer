CREATE OR REPLACE FUNCTION process_emp_subitem() RETURNS TRIGGER AS $emp_subitem$
    DECLARE
        itemid int;
    BEGIN
        SELECT "itemId" INTO itemid FROM public."SubItem" WHERE id = OLD.id  LIMIT 1;
        RAISE NOTICE 'OLD.id -> % NEW.monto -> % itemId -> %', OLD.id,  NEW.monto, itemid;
        
        UPDATE Public."Item"
            SET monto = (
                SELECT sum(monto)
                FROM Public."SubItem"
                WHERE "itemId" = itemid 
             )
             WHERE id = itemid;

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_subitem$ LANGUAGE plpgsql;

