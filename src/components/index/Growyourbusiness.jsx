import { TbMessage } from "react-icons/tb";
const Growyourbusiness = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) return null;
  return (
    <>
      {data.map((items) => (
        <section className="faqs-section bg_background2" key={items.id}>

          <div className="pd_top_80" />

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_three text-center light_color">
                  <div className="title_sections three">
                    <h2>{items.title}</h2>
                    <p>
                      {items.text}
                    </p>
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
                        <div className="flex "><div><TbMessage className="text-2xl pb-2" /> </div> <div>{items.btnText}</div></div>

                      </a>
                    </div>
                    <div className="col-auto custom_or">
                      {" "}
                      <p>OR</p>
                    </div>
                    <div className="col phone_custom">
                      <a
                        href="#"
                        data-ctm-watch-id={3}
                        data-ctm-tracked={1}
                        data-ctm-remark={3}
                      >
                        <span className=" lazyloaded" />
                        {items.btnText1}
                      </a>
                    </div>
                  </div>

                  <div className="mr_bottom_25" />

                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_60" />

        </section>
      ))}
    </>
  )
}

export default Growyourbusiness