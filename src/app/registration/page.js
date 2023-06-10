'use client'


import React, { useState } from 'react'



const Registration = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser((prevUser) => ({ ...prevUser, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { "Register_Type": "application/json" },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    name: "",
                    email: "",
                    password: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3"> </div>
                    <div className="col-md-6">
                        <div className="card p-4 ">
                            <h3 className='text-center'>PLease Registration Here!!</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <label htmlFor="">User Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={user.name}
                                        className='form-control'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={user.email}
                                        className='form-control'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={user.password}
                                        className='form-control'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group text-center my-3">
                                    <button className='btn btn-success px-5'>Register </button>
                                </div>

                                {
                                    status === 'success' &&
                                    <div class="alert alert-success" role="alert">
                                        Admin registration successfully!!
                                    </div>
                                }
                                {
                                    status === 'error' &&
                                    <div class="alert alert-danger" role="alert">
                                        There was an error in submitting. Please try again.
                                    </div>
                                }

                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"> </div>
                </div >
            </div >
        </>
    )
}

export default Registration