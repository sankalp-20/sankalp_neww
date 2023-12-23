import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SANKALP' title='Sankalp Ghar Ghar Shiksha Ka' />
            <p>To establish an organization that is capable of eradicating the illiteracy which is due to poverty, i.e. lack of literacy due
  to economic status; further, identifying bright minds and enabling them to excel in their field of interest simultaneously monitoring their academic activities 
  throughout their career..</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
