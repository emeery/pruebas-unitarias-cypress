import { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!form.name || form.name.length < 3) errors.name = 'El nombre debe tener al menos 3 caracteres';
        if (!form.email || !form.email.includes('@')) errors.email = 'El email debe ser válido y contener @';
        if (!form.phone) errors.phone = 'El número es requerido';
        if (!form.password || form.password.length < 3) errors.password = 'La contraseña debe tener al menos 3 caracteres';
        if (form.password !== form.confirmPassword) errors.confirmPassword = 'Las contraseñas no coinciden';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSuccessMessage(`Gracias por registrarte, te enviaremos una confirmación a tu correo electrónico ${form.email}`);
            await sendFormData(form);
        }
    };

    const sendFormData = async (formData) => {
        try {
            const response = await fetch('/api/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Error en el registro');
            }
            const data = await response.json();
            console.log('Registro exitoso:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <h2>Registro</h2>
                {!successMessage &&
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Número</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <small className="form-text text-muted">Formato: 555-2233</small>
                            {errors.phone && <div className="text-danger">{errors.phone}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Verificación de Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </form>
                }
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </div>

            <Footer />
        </>
    );
};

export default Register;