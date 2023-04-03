import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";
import { register } from "../../service/userService";
const validateSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    password: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
});
export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const handleRegister = (values) => {
        let data = { ...values};
        dispatch(register(data)).then((value) => {
            if (value.payload === "Username already registered") {
                swal("Username already registered");
                navigate("/register");
            } else {
                swal("Register successfully")
                navigate("/");
            }
        });
    };

    return (
        <div className="row">
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h1 class="mb-3">Register</h1>
                    </div>
                    <div class="row g-4" style={{marginLeft: 250}}>
                        <div class="col-md-8">
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <Formik
                                    initialValues={{
                                        userName: "",
                                        password: "",
                                    }}
                                    validationSchema={validateSchema}
                                    onSubmit={(values) => {
                                        handleRegister(values);
                                    }}
                                >
                                    <Form>
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <Field type="text" class="form-control" name={'userName'} id="username" placeholder="Username"/>
                                                    <label for="userName">Username</label>
                                                    <alert className="text-danger">
                                                        <ErrorMessage name={"userName"}></ErrorMessage>
                                                    </alert>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <Field type="password" class="form-control" name={'password'} id="password" placeholder="Password"/>
                                                    <label for="password">Password</label>
                                                    <alert className="text-danger">
                                                        <ErrorMessage name={"password"}></ErrorMessage>
                                                    </alert>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <Link to={"/"}><button class="btn btn-success w-100 py-3" type="button">Login</button></Link>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="btn btn-danger w-100 py-3" type="submit">Signup</button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
