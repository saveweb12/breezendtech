import React from "react";

const ItModernizationwithTailoredcard = ({ data }) => {
  const items = data;
 
  return (
    <section className="service-section-two bg_light_1">
      <div className="pd_top_60" />

      <div className="container">
        <div className="row">
          <div className="row">
            {items.map((item) => (
              <div className="col-lg-3 mb-3" key={item.id}>
                <div className="icon_box_all style_three devops">
                  <div className="icon_content icon_centers">
                    <div className="staffing-services">
                      <h3>
                        {item.number}
                        <span>{item.icon}</span>
                      </h3>
                    </div>
                    <div className="txt_content">
                      <h3>
                        <a href="#" target="_blank" rel="nofollow">
                          {item.buttomtitle}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pd_bottom_50" />
    </section>
  );
};

export default ItModernizationwithTailoredcard;
