import { Item } from "@radix-ui/react-dropdown-menu";
import React from "react";

const ItReliableIT = ({ data }) => {
  const items = data[0];
 
  return (
    <section className="service-section">
      <div className="pd_top_70" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <h2>{items.title}</h2>
                <p>{items.subtitle}</p>
              </div>

              <div className="pd_bottom_30" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="title_all_box">
              <div className="title_sections">
                <p>
                {items.short_desc}
                </p>
                
                <ul className="custom-software-service">
                  {items.list.map((lis) => (
                    <li key={lis.id}>
                      <i className="fa fa-check" />
                      <span>{lis.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="service_box style_two dark_color">
              <div className="image_boxes style_four">
                <div className="one">
                  <img src={items.image} className="img-fluid" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_bottom_50" />
    </section>
  );
};

export default ItReliableIT;
