import React from 'react'
import img1 from "../Assets/images/1st.jpeg"
import img2 from "../Assets/images/2nd.jpg"
import img3 from "../Assets/images/3rd.webp"
import img4 from "../Assets/images/4th.jpeg"
import img5 from "../Assets/images/5th.jpeg"

export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item ">
                    <img src={img2} class="d-block img imgincarousel w-100" alt="..." />
                  </div>
                  <div class="carousel-item ">
                    <img src={img5} class="d-block img imgincarousel w-100" alt="..." />
                  </div>
                  <div class="carousel-item active">
                    <img src={img4} class="d-block img imgincarousel w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  
                <span class="visually">Next</span>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
