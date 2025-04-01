import Image from 'next/image'

const WeBringYearsofExpertise = ({ data }) => {


  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="service-section-two bg_light_1">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>
                      {items.title}
                    </h2>
                  </div>
                  <div className="pd_bottom_20" />
                </div>
              </div>
              <p className="text-center">
                {items.text}
              </p>

            </div>
            <div className="pd_bottom_50" />

            <div className="row">
              {items.sections.map((item) => (
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={item.id}>
                  <div className="process_box style_four dark_color">
                    <div className="process_box_outer_four ">
                      <div className="icon">
                        <Image
                          src={item.icon}
                          className="img-fluid svg_image"
                          alt="icon png"
                        />
                      </div>
                      <div className="content_box">
                        <h2>
                          <a href="#" rel="nofollow">
                            {item.title}
                          </a>
                        </h2>
                        <p>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>


            <div className="theme_btn_all color_one pd_top_50 text-center">
              <a href="#" target="_blank" rel="nofollow" className="theme-btn one">
                {items.btntext}
              </a>
            </div>
          </div>
          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  )
}

export default WeBringYearsofExpertise