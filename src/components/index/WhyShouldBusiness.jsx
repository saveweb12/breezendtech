const WhyShouldBusiness = ({ data }) => {
  const items = data[0];

  return (
    <>
      <div id="content" className="site-content">
        <div className=" auto-container">
          <div className=" row default_row">
            <div
              id="primary"
              className="content-area col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <section className="blog_post_section one_column style_two">
                <div className="pd_top_90" />
                <div className="grid_show_case grid_layout clearfix">
                  {items.cards.map((item) => (
                    <div className="grid_box _card " key={item.id}>
                      <div className=" news_box default_style list_view has_images">
                        <div className="image img_hover-1">
                          <img
                            width={750}
                            height={220}
                            src={item.image}
                            className="img-fluid"
                            alt="img"
                          />
                          <a href="blog-single.php" className="categories">
                            <i className="icon-folder" />
                            {item.text}
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">{item.date}</span>
                          </div>
                          <div className="source">
                            <h2 className="title">
                              <a href="blog-single.php" rel="bookmark">
                                {item.title}
                              </a>
                            </h2>
                            <p className="short_desc">{item.description}</p>
                            <a href="blog-single.php" className="link__go">
                              {item.name}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div
              id="primary"
              className="content-area col-lg-6 col-md-12 col-sm-12 col-xs-12"
            ></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination text-center">
                <li className="active">
                  <a href="blog-simple.html">1</a>
                </li>
                <li>
                  <a href="blog-simple.html">2</a>
                </li>
                <li className="next_link">
                  <a href="blog-simple.html">
                    <div className="nav-next">
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pd_bottom_70" />
      </div>
    </>
  );
};

export default WhyShouldBusiness;

// "use client";
// import React, { useState, useEffect } from "react";

// const WhyShouldBusiness = ({ data }) => {
//   const items = data[0];
//   // Simulated backend data
//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   // Simulate fetching data from backend
//   //   const fetchData = async () => {
//   //     const backendData = [
//   //       { id: 1, title: "Card 1", content: "This is some content for card 1." },
//   //       {
//   //         id: 2,
//   //         title: "Card 2",
//   //         content:
//   //           "This is some longer content for card 2. It dynamically adjusts the card size based on the content!",
//   //       },
//   //       {
//   //         id: 3,
//   //         title: "Card 3",
//   //         content:
//   //           "Another example of a card with even more content. It demonstrates how the height expands seamlessly to fit the content.",
//   //       },
//   //       {
//   //         id: 4,
//   //         title: "Card 2",
//   //         content:
//   //           "This is some longer content for card 2. It dynamically adjusts the card size based on the content!",
//   //       },
//   //     ];
//   //     setTimeout(() => setData(backendData), 1000); // Simulate network delay
//   //   };

//   //   fetchData();
//   // }, []);

//   return (
//     <div className="app">
//     {items.cards.map((item) => (
//       <div className="card" key={item.id}>
//         <div className="card-image">
//           <img src={item.image} alt={item.title} />
//         </div>
//         <div className="card-content">
//           <h2 className="card-title">{item.title}</h2>
//           <p className="card-body">{item.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
  
//   );
// };

// export default WhyShouldBusiness;
