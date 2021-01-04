CREATE OR REPLACE FUNCTION process_emp_delete() RETURNS TRIGGER AS $emp_delete$
    DECLARE
        itemId  int;
    BEGIN

        SELECT id INTO itemId FROM Public."SubItem" WHERE id = OLD.id; 

        -- RAISE NOTICE 'old.monto  %' , OLD.monto;
        -- RAISE NOTICE 'old.id  %' , OLD.id;
        -- RAISE NOTICE 'old.itemId  %' , OLD."itemId";

        -- UPDATE Public."Item"
        -- SET monto = monto - OLD.monto
        -- WHERE id = OLD."itemId";

        UPDATE Public."Item"
             SET monto = (
                 SELECT sum(monto)
                 FROM Public."SubItem"
                 WHERE "itemId" = itemId 
              )
              WHERE id = itemId;


        -- UPDATE Public."Item"
        -- SET monto = monto - OLD.monto
        -- WHERE id = OLD."subitemId";

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_delete$ LANGUAGE plpgsql;

