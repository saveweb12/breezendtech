import Image from 'next/image';
const FullServiceFranchise = ({ data }) => {
  const items = data[0]

  return (
    <>
      <section className="timeline-section">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <div className="title_all_box style_five">
                <div className="process_box">
                  <div className="title_sections five">
                    <h3>{items.title}</h3>
                    <p>
                      {items.description}
                    </p>

                  </div>
                </div>
              </div>
              <div className="mr_bottom_20" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="image_boxes style_four text-center">
                <div className="image one">
                  <Image
                    src={items.image}
                    className="img-fluid"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_70" />
      </section>
    </>
  )
}

export default FullServiceFranchise