
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Empresa</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Sobre nosotros</a></li>
                            <li><a href="#" className="text-white">Carreras</a></li>
                            <li><a href="#" className="text-white">Prensa</a></li>
                            <li><a href="#" className="text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Ayuda</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Centro de ayuda</a></li>
                            <li><a href="#" className="text-white">Contáctanos</a></li>
                            <li><a href="#" className="text-white">Soporte técnico</a></li>
                            <li><a href="#" className="text-white">Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Términos de servicio</a></li>
                            <li><a href="#" className="text-white">Política de privacidad</a></li>
                            <li><a href="#" className="text-white">Cookies</a></li>
                            <li><a href="#" className="text-white">Aviso legal</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Redes Sociales</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Facebook</a></li>
                            <li><a href="#" className="text-white">Twitter</a></li>
                            <li><a href="#" className="text-white">Instagram</a></li>
                            <li><a href="#" className="text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;