import Image from 'next/image'

const JoinOurSuccessStories = () => {
  return (
    <>
      <section className="service-section bg_light_1">
        <div className="pd_top_70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <h3>Join Our Success Stories</h3>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="join-stroies-bg">
                      <div className="process_box style_four dark_color">
                        <div className="process_box text-center">
                          <div className="icon success-top">
                            <Image
                              src="/images/icons/hd-office.png"
                              className="Image-score svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="content_score">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              &apos;Content here, content here&apos;, making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use.
                            </p>
                            <h3 className="join-heading">
                              — Multi-Location Property Restoration Company
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="join-stroies-bg">
                      <div className="process_box style_four dark_color">
                        <div className="process_box text-center ">
                          <div className="icon success-top">
                            <Image
                              src="/images/icons/realized-contact.png"
                              className="Image-score svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="content_score">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              &apos;Content here, content here&apos;, making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use.
                            </p>
                            <h3 className="join-heading">
                              — Technology Manufacturer
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pd_bottom_70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoinOurSuccessStories