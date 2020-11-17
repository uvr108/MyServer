CREATE TRIGGER emp_delete
BEFORE DELETE ON Public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_delete();

