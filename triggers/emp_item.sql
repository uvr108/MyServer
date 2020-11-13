CREATE TRIGGER emp_item
AFTER UPDATE OF monto ON public."Item"
    FOR EACH ROW EXECUTE FUNCTION process_emp_item();
