import Link from 'next/link'
import React from 'react'

const schoolList = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Top Schools of Mumbai Maharashtra</h1>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-12">
                <div className="card p-3">
                    <Link href={'/schoolDetails/32'}>
                    Dhirubhai Ambani International School
                    </Link>
                    <p>Dhirubhai Ambani International School is the best school that you may found near Mumbai It is 1st best school in India and awesome fact is that this school is the best school in whole Maharashtra.
BestSchool rating for this school is A1 , which means this school is legend among other schools in India, A1 rating is granted to only the best amongst best schools and there are no better schools than these schools. This School is a rare gem in Indian schooling system.. Dhirubhai Ambani International School is one of the top 10 schools near Mumbai.

Dhirubhai Ambani International School is affiliated by Council for the Indian School Certificate Examinations and its ICSE board affiliation code is MA067.
Overall this school scores 10 out of 10. Ranking and rating calculations are primarily based on results of 31 students who appeared on last year board exam and scored an average of 95.86%.</p>

<Link className='text-warning' href={'/schoolDetails/12'}>More...</Link>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default schoolList