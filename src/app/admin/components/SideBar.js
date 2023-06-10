import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='bg-info mt-5' style={{height:'400px'}}>
        <ul style={{listStyle:'none', padding:'20px'}}>
            <li style={{borderBottom:'1px solid red'}}><Link style={{textDecoration:'none'}} href={'/admin/dashboard'}> <h2>DashBoard</h2> </Link></li>
            <li style={{padding:'5px'}}><Link style={{textDecoration:'none'}} href={'/admin/addSchool'}>Add school</Link></li>
            <li style={{padding:'5px'}}><Link style={{textDecoration:'none'}} href={'/admin/displaySchool'}>Display School</Link></li>
            <li style={{padding:'5px'}}><Link style={{textDecoration:'none'}} href={'/'}>Logout</Link></li>
        </ul>
    </div>
  )
}

export default SideBar