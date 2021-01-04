CREATE TRIGGER emp_factura
AFTER INSERT ON Public."Factura"
    FOR EACH ROW EXECUTE FUNCTION process_emp_factura();

