import { useNavigate } from "react-router-dom";

import { postData } from "../server";

import { useState } from "react";

import { toast } from "react-toastify";



function Form() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: "", email: "" });

    const emailer = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    async function handleSubmit(e) {

        e.preventDefault();

        toast.dismiss();



        if (formData.username.trim() === "") {

            toast.error("Please enter username");

            return;

        }

        if (formData.email.trim() === "") {

            toast.error("Please enter email");

            return;

        }

        if (!emailer.test(formData.email)) {

            toast.error("Please Enter Valid Email");

            return;

        }

        await postData(formData);

        setFormData({ username: "", email: "" });

        toast.success("User added successfully");

        navigate("/");

    }



    function handleChange(e) {

        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    }



    return (

        <div className="container mt-5">

            <div className="row">

                <div className="col-5 m-auto">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group mb-3">

                            <input

                                type="text"

                                className="form-control"

                                placeholder="Username"

                                name="username"

                                value={formData.username}

                                onChange={handleChange}

                            />

                        </div>

                        <div className="input-group mb-3">

                            <input

                                type="email"

                                className="form-control"

                                placeholder="Email"

                                name="email"

                                value={formData.email}

                                onChange={handleChange}

                            />

                        </div>

                        <button type="submit" className="btn btn-success">

                            Submit

                        </button>

                        <button

                            className="btn btn-warning ms-3"

                            onClick={(e) => {

                                e.preventDefault();

                                navigate("/");

                            }}

                        >

                            Cancel

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}



export default Form;