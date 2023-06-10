'use client'
import React, { useState } from 'react'
import SideBar from '../components/SideBar'

const AddSchool = () => {
    const [school, setSchool] = useState({
        name:'',
        email:'',
        phone:'',
        address:'',
        affiliatedBoard:'',
        allIndiaRank:'',
        description:'',
    })
    const [status, setStatus] = useState(null)
    const handleChange = (e)=>{
         const name = e.target.name
         const value = e.target.value
         setSchool((prevSchool)=>({...prevSchool, [name]: value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('/api/school', {
                method: 'POST',
                headers: { "School_Type": "application/json" },
                body: JSON.stringify({
                    name: school.name,
                    email: school.email,
                    phone: school.phone,
                    address: school.address,
                    affiliatedBoard: school.affiliatedBoard,
                    allIndiaRank: school.allIndiaRank,
                    description: school.description,
                    
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setSchool({
                    name:'',
                    email:'',
                    phone:'',
                    address:'',
                    affiliatedBoard:'',
                    allIndiaRank:'',
                    description:'',
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
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-4">
                        <SideBar/>
                    </div>
                    <div className="col-md-1"> </div>
                    <div className="col-md-7">
                        <div className="card p-4 ">
                            <h3 className='text-center'>PLease Add School Details !!</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <label htmlFor="">School Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        value={school.name}
                                        onChange={handleChange}
                                        className='form-control' 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">School Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        value={school.email}
                                        onChange={handleChange} 
                                        className='form-control' 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Phone No</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        id="phone"
                                        value={school.phone}
                                        onChange={handleChange} 
                                        className='form-control' 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Address</label>
                                    <input 
                                        type="text" 
                                        name="address" 
                                        id="address"
                                        value={school.address}
                                        onChange={handleChange} 
                                        className='form-control'
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Affiliated Board</label>
                                    <input 
                                        type="text" 
                                        name="affiliatedBoard" 
                                        id="affiliatedBoard"
                                        value={school.affiliatedBoard}
                                        onChange={handleChange} 
                                        className='form-control' 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">All India Rank</label>
                                    <input 
                                        type="text" 
                                        name="allIndiaRank" 
                                        id="allIndiaRank"
                                        value={school.allIndiaRank} 
                                        onChange={handleChange}
                                        className='form-control' 
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="">Description</label>
                                    <input 
                                        type="text" 
                                        name="description" 
                                        id="description"
                                        value={school.description}
                                        onChange={handleChange} 
                                        className='form-control' 
                                    />
                                </div>
                                {
                                    status === 'success' &&
                                    <div className="alert alert-success" role="alert">
                                        School Details insert successfully!!
                                    </div>
                                }
                                {
                                    status === 'error' &&
                                    <div className="alert alert-danger" role="alert">
                                        There was an error in submitting. Please try again.
                                    </div>
                                }
                                <div className="form-group text-center my-3">
                                    <button className='btn btn-danger px-5'> Add School </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AddSchool