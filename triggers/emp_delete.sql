CREATE TRIGGER emp_delete
AFTER DELETE ON Public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_delete();

