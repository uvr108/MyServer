CREATE TRIGGER emp_delete_1
BEFORE DELETE ON Public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_delete();

