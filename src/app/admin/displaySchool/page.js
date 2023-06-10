import React from 'react'
import SideBar from '../components/SideBar'
import Link from 'next/link'

const Display = async () => {

  const url = "http://localhost:3000/api/display"
  const option = {
    method: 'GET',
  };
  const res = await fetch(url, option)
  const data = await res.json();
  //console.log(data);
  const school = data.schoolData
 // console.log(school);
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <h1 className='text-center py-3'>Display All School</h1>
            <div>
              <table className='table'>
                <thead className='bg-danger'>
                  <tr>
                  <th>ID</th>
                  <th>School Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  </tr> 
                </thead>
                {
                  school.map((value, key) => {
                    return (
                      <>
                        <tbody key={value._id}>
                          <tr>
                            <td>{value._id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>
                              <Link href={`/admin/view/${value._id}`} className='bg-success text-white px-2 m-1 rounded-2' style={{ textDecoration: 'none' }}>View</Link>
                              <Link href={'/admin/edit'} className='bg-warning text-white px-2 m-1 rounded-2' style={{ textDecoration: 'none' }}>Edit</Link>
                              <Link href={'/admin/delete'} className='bg-danger text-white px-2 m-1 rounded-2' style={{ textDecoration: 'none' }}>Delete</Link>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    )
                  })
                }

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display