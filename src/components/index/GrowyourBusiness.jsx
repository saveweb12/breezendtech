
const Growyourbusiness = ({ data }) => {
  return (
    <>
      {data.map((items) => (
        <section className="faqs-section bg_background2" key={items.id}>
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_three text-center light_color">
                  <div className="title_sections three">
                    <h2>{items.title}</h2>
                    {/* <h2>READY TO GROW YOUR BUSINESS?</h2> */}
                    <p>
                      {items.text}
                    </p>
                    {/* <p>
                      Contact us to work with a results-driven digital marketing
                      agency
                    </p> */}
                  </div>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_35" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                <div className="row align-items-center">
                  <div className="col get-perposal text-right">
                    <a
                      href="#"
                      target="_self"
                      className="primary-btn"
                      role="button"
                      rel="noopener"
                    >
                      <span className="fl-button-text">{items.btnText}</span>{" "}
                      {/* <span className="fl-button-text">GET FREE PROPOSAL</span>{" "} */}
                    </a>
                  </div>
                  <div className="col-auto custom_or">
                    {" "}
                    <p>OR</p>
                  </div>
                  <div className="col phone_custom">
                    <a
                      href="tel:+1-703-703-7808"
                      data-ctm-watch-id={3}
                      data-ctm-tracked={1}
                      data-ctm-remark={3}
                    >
                      <span className=" lazyloaded" />
                      {items.btnText1}
                    </a>
                    {/* <a
                      href="tel:+1-703-703-7808"
                      data-ctm-watch-id={3}
                      data-ctm-tracked={1}
                      data-ctm-remark={3}
                    >
                      <span className=" lazyloaded" />
                      CALL 703.703.7808
                    </a> */}
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_60" />
          {/*===============spacing==============*/}
        </section>
      ))}
    </>
  )
}

export default Growyourbusiness