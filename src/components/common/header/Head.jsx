import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>   SANKALP</h1>
            <span>   A unit of NSS-NIT Patna</span>
          </div>

          <div className='social'>
          <a href="https://www.facebook.com/sankalp.nitpatna?mibextid=eHce3h">
            <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://www.instagram.com/sankalp_nss_nitp/">
            <i className='fab fa-instagram icon'></i>
            </a>
            {/* <a href="https://www.instagram.com/sankalp_nss_nitp/">
            <i className='fab fa-twitter icon'></i>
            </a> */}
            <a href="https://youtube.com/@sankalp-ghargharshikshakaa6348?si=pSuJXSmLXy9ToTUP">
            <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
