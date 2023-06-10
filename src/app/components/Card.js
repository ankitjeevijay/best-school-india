import Link from 'next/link'
import styles from '../card.module.css'
import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <>
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Mumbai.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Mumbai</div>
          </div>
        </div>
          </Link>
        
        </div>
        <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Chennai.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Chennai</div>
          </div>
        </div>
          </Link>
        
        </div>
        <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Delhi.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Delhi</div>
          </div>
        </div>
          </Link>
        
        </div>
      </div>
      <div className="row">
      <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Hyderabad.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Hyderabad</div>
          </div>
        </div>
          </Link>
        
        </div>
        <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Kolkata.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Kolkata</div>
          </div>
        </div>
          </Link>
        
        </div>
        <div className="col-md-4">
          <Link href={'/schoolList/12'}>
          <div className="card p-3">
          <div className={`${styles.img}`}>
            <Image src="/Bangalore.png" fill={true} alt="" />
            <div className="carousel-caption cityTxt">Bangalore</div>
          </div>
        </div>
          </Link>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Card