CREATE OR REPLACE FUNCTION process_emp_insert() RETURNS TRIGGER AS $emp_insert$
    DECLARE
        itemid int;
    BEGIN

        SELECT "itemId" INTO itemid FROM public."SubItem" WHERE id = NEW.id;
        RAISE NOTICE 'NEW.id -> % NEW.monto -> % itemid ->  %', NEW.id, NEW.monto, itemid;

        UPDATE Public."Item"
        SET monto = monto + NEW.monto; 
     
        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_insert$ LANGUAGE plpgsql;

