import Image from 'next/image'
const DedicatedTeam = ({ data }) => {
  //const items = data[0];
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      {data.map((items) => (
        <section className="team bg_light_1 bg_pattern_2" key={items.id}>

          <div className="pd_bottom_80"></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <div className="before_title">Dedicated Team{items.title}</div>
                    <h2>Meet Our People Operations Team{items.subtitle}</h2>
                    <p>Our power of choice is untrammelled and when nothing prevents <br /> being able to do
                      what we
                      like best every pleasure.</p>

                    <div className="pd_bottom_15"></div>

                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                <div className="team_box style_four">
                  <div className="team_box_outer">
                    <div className="image_box ">
                      <Image src="/images/team/team-1.jpg" alt="team image" />
                    </div>
                    <div className="content_box ">
                      <div className="share_links ">
                        <ul className="clearfix ">
                          <li><a href="#"> <i className="fa fa-facebook"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-twitter"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-skype"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-instagram"> </i> </a></li>
                        </ul>
                      </div>
                      <h2> <a href="#" target="_blank" rel="nofollow">
                        Amelia Margaret</a>
                      </h2>
                      <h6 className="job_details">Director </h6>
                    </div>
                  </div>

                  <div className="pd_bottom_25"></div>

                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                <div className="team_box style_four">
                  <div className="team_box_outer">
                    <div className="image_box ">
                      <Image src="/images/team/team-4.png" alt="team image" />
                    </div>
                    <div className="content_box ">
                      <div className="share_links ">
                        <ul className="clearfix ">
                          <li><a href="#"> <i className="fa fa-facebook"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-twitter"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-skype"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-instagram"> </i> </a></li>
                        </ul>
                      </div>
                      <h2> <a href="#" target="_blank" rel="nofollow">
                        Mary Merrill</a>
                      </h2>
                      <h6 className="job_details">Operations Director </h6>
                    </div>
                  </div>

                  <div className="pd_bottom_25"></div>

                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0">
                <div className="team_box style_four">
                  <div className="team_box_outer">
                    <div className="image_box ">
                      <Image src="/images/team/team-2.jpg" alt="team image" />
                    </div>
                    <div className="content_box ">
                      <div className="share_links ">
                        <ul className="clearfix ">
                          <li><a href="#"> <i className="fa fa-facebook"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-twitter"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-skype"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-instagram"> </i> </a></li>
                        </ul>
                      </div>
                      <h2> <a href="#" target="_blank" rel="nofollow">
                        Andrew Cameron</a>
                      </h2>
                      <h6 className="job_details">Team Leader </h6>
                    </div>
                  </div>

                  <div className="pd_bottom_25"></div>

                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="team_box style_four">
                  <div className="team_box_outer">
                    <div className="image_box ">
                      <Image src="/images/team/team-3.png" alt="team image" />
                    </div>
                    <div className="content_box ">
                      <div className="share_links ">
                        <ul className="clearfix ">
                          <li><a href="#"> <i className="fa fa-facebook"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-twitter"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-skype"> </i> </a></li>
                          <li><a href="#"> <i className="fa fa-instagram"> </i> </a></li>
                        </ul>
                      </div>
                      <h2><a href="#" target="_blank" rel="nofollow">
                        Sofia Charlotte</a>
                      </h2>
                      <h6 className="job_details">Manager </h6>
                    </div>
                  </div>

                  <div className="pd_bottom_25"></div>

                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_50"></div>

        </section>
      ))}
    </>
  );
};

export default DedicatedTeam;
