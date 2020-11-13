CREATE OR REPLACE FUNCTION process_emp_delete() RETURNS TRIGGER AS $emp_delete$
    DECLARE
        itemid int;
    BEGIN
        SELECT "itemId" INTO itemid FROM public."SubItem" WHERE id = OLD.id;
        RAISE NOTICE 'OLD.id -> % OLD.monto -> %  itemId ->  % : estos son mis valores DELETE', OLD.id, OLD.monto, itemid;

        UPDATE Public."Item"
        SET monto = monto - OLD.monto
        WHERE id = itemid;
     
        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_delete$ LANGUAGE plpgsql;

