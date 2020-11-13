CREATE TRIGGER emp_subitem
AFTER UPDATE OF monto ON public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_subitem();

