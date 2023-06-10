import React from 'react'
import SideBar from '../../components/SideBar'

const View = ({params}) => {
    const id = params.id
    //console.log(id);
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SideBar/>
            </div>
            <div className="col-md-9">
            <div className="card mt-5">
                    <h1 className='text-center'>School Details</h1>
                    <table className='table col-md-12 col-sm-12 col-xs-12'>
                    <tbody className='table'>
                            <tr>
                                <td>Affiliated Board</td>
                                <td>CISCE</td>
                            </tr>
                            <tr>
                                <td>Affiliated Board</td>
                                <td>CISCE</td>
                            </tr>
                            <tr>
                                <td>Affiliated Board</td>
                                <td>CISCE</td>
                            </tr>
                        </tbody>
                    </table>
                        
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default View