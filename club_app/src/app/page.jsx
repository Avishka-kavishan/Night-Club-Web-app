import React from 'react'
import Navbar from './(Components)/Navbar/Nav'
import style from '../app/Home.module.css'

function Homepage() {
  return (
    <>
    <section className ={style.section}>
    <Navbar/>
    <div className={style.div}>
      <h1>THE RHYTHM OF LIFE! <br/>
      THE CREATEST HITS <br/>FOR YOUR PLEASURE!
      </h1>
    </div>
    </section>
    </>
  )
}

export default Homepage;