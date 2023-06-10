import Link from 'next/link'
import Card from './components/Card'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    
    <Card/>
    <div className="container">
      <div className="row py-5">
        <div className="col-md-12">
          <h2 className='text-center'>Scientific Approach of Finding Best School</h2>
          <p className='text-center'>Experience the Power of Data Analysis</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <div className='text-center'>
          <Link className='btn btn-warning' href={'/schoolList'}> Other Cities</Link>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <h5 className='text-center'>We recently moved to Delhi and it was all confusing about finding 
            school every one had deferent </h5>
            <h5 className='text-center'>choice but your website made it so simple, Thank You</h5>
            <p className='text-center'>- A BestSchool Parent</p>
        </div>
      </div>
    </div>
    </>
  )
}
