import Image from 'next/image'

const WeLeadFrom = ({ data }) => {

  return (
    <>
      {data.map((items) => (
        <section key={items.id} className="">
          <div className="pd_top_70" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="image_boxes style_four">
                    <div className="image one">
                      <Image
                        src={items.image}
                        className="img-fluid"
                        alt="about"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <h2>{items.title}</h2>
                    <p>
                      {items.description}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_70" />
        </section>
      ))}
    </>
  )
}

export default WeLeadFrom