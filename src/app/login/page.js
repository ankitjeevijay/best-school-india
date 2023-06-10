import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3"> </div>
                    <div className="col-md-6"> 
                    <div className="card p-4 ">
                        <h1 className='text-center'>PLease Login Here!!</h1>
                    <form action="">
                        <div className="form-group mb-2">
                            <label htmlFor="">User Name</label>
                            <input type="text" name="" id="" className='form-control' />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" className='form-control' />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" className='form-control' />
                        </div>
                        <div className="form-group text-center my-3">
                            <button className='btn btn-danger px-5'> Login </button>
                        </div>
                        <div className="form-group text-center mb-3">
                           <Link href={'/registration'}>Please  Register Here </Link>
                        </div>
                    </form>
                    </div>
                    </div>
                    <div className="col-md-3"> </div>
        </div >
            </div >
        </>
  )
}

export default login