import React from 'react'
import img1 from "../Assets/images/1st.jpeg"
import img2 from "../Assets/images/2nd.jpg"
import img3 from "../Assets/images/3rd.webp"
import img4 from "../Assets/images/4th.jpeg"
import img5 from "../Assets/images/5th.jpeg"
import Button from '../Components/Button'

export default function Cards(props) {
  return (
    <>    <div className="container mt-5 mb-5 pt-5 ">
            <div className="row ">
                <div className="col">
                    <h2 className="mb-4 pb-3 text-center">Featured Activities</h2>
                    <hr />
                </div>
            </div>
            <div className="row featured-row mt-5 mb-3">
                <div className="col">
                    <img src={img1} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Palm Tree</h3>
                    <p>Indulge in luxury at The Waldorf Astoria, a historic landmark hotel renowred for its elegance and sophistication.</p>
                    <Button color='secondary' text='Read More'/>
                    
                </div>
                <div className="col">
                    <img src={img2} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Climbing</h3>
                    <p>Relax in style at The Four Seasons, featuring breathtaking views, an award-winnig spa, and gourmet dining options.</p>
                    <Button color='secondary' text='Read More'/>
                </div>
                <div className="col">
                    <img src={img3} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Swimming</h3>
                    <p>Experience luxury accommodations and impeccable service at the Ritz Carlton, located in the heart of the city.</p>
                    <Button color='secondary' text='Read More'/>
                </div>
            </div>
            <div className="row featured-row mt-5">
                <div className="col">
                    <img src={img4} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Climbing</h3>
                    <p>Relax in style at The Four Seasons, featuring breathtaking views, an award-winnig spa, and gourmet dining options.</p>
                    <Button color='secondary' text='Read More'/>
                </div>
                <div className="col">
                    <img src={img5} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Palm Tree</h3>
                    <p>Indulge in luxury at The Waldorf Astoria, a historic landmark hotel renowred for its elegance and sophistication.</p>
                    <Button color='secondary' text='Read More'/>
                </div>
                <div className="col">
                    <img src={img5} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Swimming</h3>
                    <p>Experience luxury accommodations and impeccable service at the Ritz Carlton, located in the heart of the city.</p>
                    <Button color='secondary' text='Read More'/>
                </div>
            </div>
        </div>
        </>
  )
}
