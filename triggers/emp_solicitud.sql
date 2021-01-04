CREATE TRIGGER emp_solicitud
AFTER INSERT ON Public."Solicitud"
    FOR EACH ROW EXECUTE FUNCTION process_emp_solicitud();

