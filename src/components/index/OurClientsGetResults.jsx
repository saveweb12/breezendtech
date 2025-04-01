import Image from 'next/image'

const OurClientsGetResults = ({ data }) => {

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items, index) => (
        <section className="team-section bg_light_2" key={items.id}>

          <div className="pd_top_80"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    {/* <h2>Our Clients Get Results</h2> */}
                    <h2>{items.heading}</h2>
                  </div>
                </div>

                <div className="pd_bottom_20"></div>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="case-study">
                  <div className="image_boxes">
                    <Image src="images/about/about-12.jpg" className="background_image" alt="image" />
                    <div className="video_box">
                      <a href="#" className="lightbox-image"><i className="icon-play"></i></a>
                    </div>
                  </div>
                  <div className="case-text-align">
                    <h6>"It is a long established fact"</h6>
                  </div>
                  <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                    <div className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading left-result">+664%</h3>
                      <p>Organic Traffic</p>
                    </div>
                    <div className="wp-block-column case-text is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading right-result">+360%</h3>
                      <p>Online Leads</p>
                    </div>
                    <p className="pd_top_30">Lorem ipsum dolor sit amet, consectetur adipisicingiu elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <a href="#" className="read_more type_two">Read More Case Study <span className="icon-arrow-right"></span></a>
                  </div>
                </div>

                <div className="mr_bottom_20"></div>

              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="case-study">
                  <div className="image_boxes">
                    <Image src="/images/about/about-12.jpg" className="background_image" alt="image" />
                    <div className="video_box">
                      <a href="#" className="lightbox-image"><i className="icon-play"></i></a>
                    </div>
                  </div>
                  <div className="case-text-align">
                    <h6>"It is a long established fact"</h6>
                  </div>
                  <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                    <div className="wp-block-column case-text left is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading left-result">+800%</h3>
                      <p>Online Leads</p>
                    </div>
                    <div className="wp-block-column case-text is-layout-flow wp-block-column-is-layout-flow">
                      <h3 className="wp-block-heading right-result">+640%</h3>
                      <p>Conversion Rate</p>
                    </div>
                    <p className="pd_top_30">Lorem ipsum dolor sit amet, consectetur adipisicingiu elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <a href="#" className="read_more type_two">Read More Case Study <span className="icon-arrow-right"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_80"></div>

        </section>
      ))}
    </>
  );
};

export default OurClientsGetResults;
