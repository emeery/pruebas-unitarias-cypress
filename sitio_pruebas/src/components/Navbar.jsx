import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Super Mega App</Link>
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-link border-end border-start border-success">Home</Link>
                    <Link to="/register" className="nav-link border-end border-success">Iniciar Sesión</Link>
                    <Link to="/register" className="nav-link border-end border-success">Registrarse</Link>
                    <Link to="/" className="nav-link border-end border-success">Productos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;