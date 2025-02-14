import React from "react";

const FranchaiseSolutionKey = ({ data }) => {
  const items = data[0];
 
  return (
    <section className="service-section container">
      <div
        id="section1"
        className="title_all_box style_one text-center pd_top_30"
      >
        <div className="title">
          <h4>{items.title}</h4>
          <div className="before_title">{items.subtitle}</div>
        </div>

        <div className="pd_bottom_20" />
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="service_box style_two dark_color">
            <div className="image_boxes style_four text-center">
              <div className="one">
                <img
                  src={items.image}
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="title_all_box dark_color">
            <div className="title_sections three left">
              <p>{items.short_desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pd_top_30">
        <div className="col-xl-12">
          <div className="bg_light_1 pd_bottom_30">
            <div className="col-sm-12 heading-practice ">
              <h3>
                <span>{items.subheader}</span>
              </h3>
            </div>
            <div className="row">
              {items.lists.map((list) => (
                <div className="col-xl-6"key={list.id}>
                  <div className="list_item_box style_two style_list">
                    <ul className="marketing-local">
                      <li>
                        <span > {list.text}</span>
                        <i className="fa fa-check" />
                      </li>
                  
                    </ul>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchaiseSolutionKey;
