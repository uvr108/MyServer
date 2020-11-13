CREATE TRIGGER emp_delete_2
AFTER DELETE ON Public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_delete_nothing();

