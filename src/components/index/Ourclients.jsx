import Image from 'next/image'

const Ourclients = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((item) => (
        <section className="features project bg_light_1" key={item.id}>
          <h1>{item.title} </h1>
          <div className="container">
            <div className="pd_top_70" />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-01.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-02.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-03.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-04.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-05.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-06.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-07.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="image_box">
                  <div className="item-img">
                    <a href="#">
                      <Image
                        src="assets/images/client-logo/client-08.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_50" />
        </section>
      ))}
    </>

  );
};

export default Ourclients;
