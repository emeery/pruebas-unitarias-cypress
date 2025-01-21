import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img/Autumn_leaves_LIL_134164_Medium.png" className="card-img-top" alt="imagen opción 1" id="imagen01"/>
                            <div className="card-body">
                                <h5 className="card-title" id="titular-opcion-a">Opción A</h5>
                                <p className="card-text">
                                Explora la belleza del otoño con hojas caídas y colores vibrantes que transforman el paisaje en un paraíso natural.</p>
                                <a href="#" className="btn btn-primary">Ir a opción A</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img/Beach_outtake_LIL_9989_Medium.png" className="card-img-top" alt="imagen opción 2" />
                            <div className="card-body">
                                <h5 className="card-title" id="titular-opcion-b">Opción B</h5>
                                <p className="card-text">
                                Descubre la serenidad de la playa con esta opción, donde el mar y la arena se encuentran en perfecta armonía.</p>
                                <a href="#" className="btn btn-primary" >Ir a opción B</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/img/Forest_LIL_134133_Medium.png" className="card-img-top" alt="imagen opción 3" />
                            <div className="card-body">
                                <h5 className="card-title" id="titular-opcion-c">Opción C</h5>
                                <p className="card-text">
                                Sumérgete en la tranquilidad del bosque, donde los árboles susurran y la fauna te rodea en cada paso.</p>
                                <a href="#" className="btn btn-primary">Ir a opción C</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;