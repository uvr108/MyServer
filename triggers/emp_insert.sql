CREATE TRIGGER emp_insert
AFTER INSERT ON Public."SubItem"
    FOR EACH ROW EXECUTE FUNCTION process_emp_insert();

