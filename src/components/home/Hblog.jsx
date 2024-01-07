import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
        <a href="https://drive.google.com/folderview?id=1RmsOC2D4uQANwg0VStFamy4e7hhuKqwb"><Heading subtitle='Notices' title='Recent From Notices' /></a>
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div key={val.id} className='items shadow'>
                <div className='img'>
                  {/* <a href="https://youtube.com/@sankalp-ghargharshikshakaa6348?si=pSuJXSmLXy9ToTUP"></a> */}
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                  
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
