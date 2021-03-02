import React, { useState } from "react";
import { auth } from "../firebaseconf"; //servicio de autenticacion
import { useHistory } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msgerror, setMsgError] = useState(null);
    const historial = useHistory();

    // comunicacion con firebase para registrar user
    const RegistrarUsuario = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, pass)
            .then(
                (r) => {
                    historial.push("/"); //le indico la ruta a la que tiene que ir, en este caso redirige a inicio
                } //recibe los estados recogidos por los input
            )
            .catch((e) => {
                // auth/invalid-email
                // auth/weak-password
                if (e.code === "auth/invalid-email") {
                    setMsgError("Formato de email incorrecto");
                }
                if (e.code === "auth/weak-password") {
                    setMsgError("La password debe tener 6 caracteres o mas");
                }
                //console.log(e.code); //si es un error lo muestro por consola
            });
    };

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => {
                historial.push("/"); //redirige a inicio
            })
            .catch((err) => {
                console.log(err.code);
                if (err.code === "auth/wrong-password") {
                    setMsgError("Password incorrecta");
                }
                if (err.code === "auth/user-not-found") {
                    setMsgError("Usuario no registrado");
                }
                if (err.code === "auth/invalid-email") {
                    setMsgError("Ingrese un email");
                }
            });
    };

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form
                    onSubmit={RegistrarUsuario}
                    action=""
                    className="form-group"
                >
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        placeholder="Introduce el Email"
                    />
                    <input
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                        type="password"
                        className="form-control mt-4"
                        placeholder="Introduce la Password"
                    />
                    <input
                        type="submit"
                        value="Registrar usuario"
                        className="btn btn-dark btn-block mt-4"
                    />
                </form>
                <button
                    onClick={LoginUsuario}
                    className="btn btn-success btn-block"
                >
                    Iniciar sesion
                </button>
                {msgerror ? (
                    <div className="alert alert-danger">{msgerror}</div>
                ) : (
                    <span></span>
                )}
            </div>
            <div className="col"></div>
        </div>
    );
};

export default Login;
