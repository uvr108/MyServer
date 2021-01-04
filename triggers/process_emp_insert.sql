CREATE OR REPLACE FUNCTION process_emp_insert() RETURNS TRIGGER AS $emp_insert$
    DECLARE
        itemId int;
    BEGIN

        SELECT "itemId" INTO itemId FROM public."SubItem" WHERE id = NEW.id;
        -- RAISE NOTICE 'NEW.id -> % NEW.monto -> % itemid ->  %', NEW.id, NEW.monto, itemid;

       UPDATE Public."Item"
             SET monto = (
                 SELECT sum(monto)
                 FROM Public."SubItem"
                 WHERE "itemId" = itemId 
              )
              WHERE id = itemId;

        -- UPDATE Public."Item"
        -- SET monto = monto + NEW.monto
        -- WHERE id = itemid;

        INSERT INTO Public."Solicitud" ("solicitante", "subitemId") values ('Nuevo', NEW.id);

        -- UPDATE Public."Item"
        -- SET monto = monto + NEW.monto
        -- WHERE id = NEW."itemId";

        -- INSERT INTO Public."Solicitud" ("solicitante", "subitemId") 
        -- VALUES ('Nuevo', NEW.subitemId);

        RETURN NULL; -- result is ignored since this is an AFTER trigger
    END;
    $emp_insert$ LANGUAGE plpgsql;

