CREATE OR REPLACE FUNCTION process_emp_delete_nothing() RETURNS TRIGGER AS $emp_delete_nothing$
    DECLARE
        itemid  int;
    BEGIN

        -- SELECT id INTO itemid FROM Public."SubItem" WHERE id = OLD.id; 

        RAISE NOTICE 'old.monto  %' , OLD.monto;
        RAISE NOTICE 'old.id  %' , OLD.id;
        RAISE NOTICE 'old.itemId  %' , OLD."itemId";

        UPDATE Public."Item"
        SET monto = monto - OLD.monto
        WHERE id = OLD."itemId";

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_delete_nothing$ LANGUAGE plpgsql;

