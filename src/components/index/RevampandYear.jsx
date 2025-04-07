import React from 'react'
import Image from 'next/image'

const RevampandYear = ({data}) => {
  return (
    <>
    {data.map((items)=>(
      <section key={items.id} className="image-section">
        <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections content_box">
                  <h2>
                  {items.title}
                  </h2>
                  <p>
                  {items.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image_boxes style_four">
                <div className="one">
                  <Image
                    src={items.image}
                    className="img-fluid"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70" />
        </div>
      </section>
    ))}
      
    </>
  )
}

export default RevampandYear