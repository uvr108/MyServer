CREATE TRIGGER emp_oc
AFTER INSERT ON Public."OrdenCompra"
    FOR EACH ROW EXECUTE FUNCTION process_emp_oc();

