import React from 'react'

const Kindofvideo = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="features video bg_light_1">
          <div className="container">
            <div className="pd_top_70" />
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.heading} </h2>
                    <p>
                     {items.description}
                    </p>
                  </div>
                  <div className="pd_bottom_20" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="title_sections">
                  <h4 className="pd_bottom_20">{items.title1} </h4>
                  <p>
                   {items.description1}
                  </p>
                 
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="image_box">
                  <div className="item-img">
                    <iframe
                      width={550}
                      height={330}
                      src={items.link1}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="image_box">
                  <div className="item-img">
                    <iframe
                      width={550}
                      height={330}
                      src={items.link2}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="title_sections">
                  <h4 className="pd_bottom_20">{items.title2}</h4>
                  <p>
                   {items.description2}
                  </p>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="title_sections">
                  <h4 className="pd_bottom_20">{items.title3}</h4>
                  <p>
                   {items.description3}
                  </p>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="image_box">
                  <div className="item-img">
                    <iframe
                      width={550}
                      height={330}
                      src={items.link3}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="image_box">
                  <div className="item-img">
                    <iframe
                      width={550}
                      height={330}
                      src={items.link4}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="item сol-12 col-md-6 col-lg-6">
                <div className="title_sections">
                  <h4 className="pd_bottom_20">{items.title4}</h4>
                  <p>
                   {items.description4}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_50" />
        </section>
      ))}

    </>
  )
}

export default Kindofvideo