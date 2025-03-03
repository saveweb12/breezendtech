const RecordofSuccess = ({data}) => {

 
  return (
   <>
    {data.map((items, index) => (
   <section key={items.id || index} className="service-section-two track-record-sec">
         <div className="pd_top_70" />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
              <div className="process_box style_three bg_dark_1 pd_cover">
                <div className="title_all_box style_one light_color">
                  <h3 className="pd_bottom_20">
                   {items.title}
                  </h3>
                  <p>
                    {items.description}
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 background_color">
              {items.lists.map((item,idx)=>(

              
              <div className="process_box style_three dark_color divider_1"key={item.id||idx}>
                <div className="process_box_outer_three track-number">
                  <div className="number">
                    <h6>{item.number}</h6>
                    <h2>
                      <a href="#" rel="nofollow">
                       {item.numtitle}
                      </a>
                    </h2>
                  </div>
                  <div className="content_box">
                    <p>
                     {item.text}
                    </p>
                  </div>
                </div>
              </div>
              ))}
              <div className="pd_bottom_20" />
              {/* <div className="process_box style_three dark_color divider_1">
                <div className="process_box_outer_three track-number">
                  <div className="number">
                    <h6>+100%</h6>
                    <h2>
                      <a href="#" target="_blank" rel="nofollow">
                        Website Conversions
                      </a>
                    </h2>
                  </div>
                  <div className="content_box">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div> */}
               <div className="pd_bottom_20" />
              {/* <div className="process_box style_three dark_color">
                <div className="process_box_outer_three track-number">
                  <div className="number">
                    <h6>+451%</h6>
                    <h2>
                      <a href="#" target="_blank" rel="nofollow">
                        Unit Sales
                      </a>
                    </h2>
                  </div>
                  <div className="content_box">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="pd_bottom_60" />
      </section>
    ))}
   </>
  )
}

export default RecordofSuccess