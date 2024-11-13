import React from "react";

function Slider({ data }) {
  // console.log(props);
  return (
    <>
      {data.map((slider) => (
        <div key={slider.id}>
          <h1>{slider.slider_name}</h1>
          <img src={slider.slider_image} alt={slider.title} />
          <p>{slider.description}</p>
          <a href={slider.button_link}>{slider.button_text.trim()}</a>
        </div>
      ))}
    </>
  );
}

export default Slider;
