CREATE OR REPLACE FUNCTION process_emp_subitem() RETURNS TRIGGER AS $emp_subitem$
    DECLARE
        itemId int;
    BEGIN
        SELECT "itemId" INTO itemId FROM public."SubItem" WHERE id = OLD.id;
        -- RAISE NOTICE 'OLD.id -> % NEW.monto -> % itemId -> %', OLD.id,  NEW.monto, itemid;
        
        UPDATE Public."Item"
             SET monto = (
                 SELECT sum(monto)
                 FROM Public."SubItem"
                 WHERE "itemId" = itemId 
              )
              WHERE id = itemId;

        RAISE NOTICE 'NEW.monto -> % itemId -> %', NEW.monto, itemId;

        -- UPDATE Public."Item"
        -- SET monto = monto + NEW.monto
        -- WHERE id = itemId;


        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_subitem$ LANGUAGE plpgsql;

