import React from 'react'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SideBar/>
            </div>
            <div className="col-md-9"></div>
        </div>
    </div>
    </>
  )
}

export default Dashboard