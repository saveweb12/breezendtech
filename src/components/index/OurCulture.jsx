import Image from 'next/image'

const OurCulture = ({ data }) => {

  return (
    <>
      {data.map((items, index) => (
        <section className="service-section-two" key={items.id}>
          <div className="pd_top_70"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h2>{items.title}</h2>
                    <p className="before_title">{items.text}</p>
                  </div>

                  <div className="pd_bottom_20"></div>

                </div>
              </div>
            </div>


            <div className="pd_bottom_30"></div>

            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/empowerment.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Empowerment</a>
                      </h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/appreciation.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Appreciation</a></h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/teamwork.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Teamwork</a></h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pd_bottom_50"></div>

            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/integration.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Integrity</a>
                      </h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/nurturing.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Nurturing</a></h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="process_box style_four dark_color">
                  <div className="process_box_outer_four ">
                    <div className="icon">
                      <Image src="/images/icons/balance.png" className="img-fluid svg_image" alt="icon png" />

                    </div>
                    <div className="content_box">
                      <h2><a href="#" rel="nofollow">Balance</a></h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme_btn_all color_one pd_top_50 text-center">
              <a href="#" target="_blank" rel="nofollow" className="theme-btn one">{items.btnText}</a>
            </div>
          </div>
          <div className="pd_bottom_70"></div>
        </section>
      ))}
    </>
  );
};

export default OurCulture;
