"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
  const [data, setdata] = useState([])
  const [selectedCotegory, setselectedCotegory] = useState("All")
  console.log("portfoliodata", data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://breezend-backend-2.onrender.com/api/portfolio/get-all-portfolio')
        setdata(response.data.allPortfolio)
      } catch (error) {
        console.error('Create Page API Error:', error.response?.data || 'Something went wrong');
      }
    }
    fetchData()
  }, [])

  const filterCotegory = selectedCotegory === "All" ? data : data.filter(item => item.category === selectedCotegory)

  return (
    <>
      <section className="project_all filt_style_four  filter_enabled">
        <h1 className='text-center pt-5'>Effective portfolio</h1>
        <div className="container">
          <div className="pd_top_90" />
          <div className="row">
            <div className="col-lg-12">
              <div
                className="fliter_group"
                style={{ textAlign: "center!important" }}
              >
                <ul className="project_filter dark clearfix">
                  <li onClick={() => setselectedCotegory("All")} className={selectedCotegory === "All" ? "current" : ""}>
                    View All
                  </li>
                  <li onClick={() => setselectedCotegory("web design")} className={selectedCotegory === "web design" ? "current" : ""}>
                    Web Design
                  </li>
                  <li onClick={() => setselectedCotegory("Web Development")} className={selectedCotegory === "Web Development" ? "current" : ""}>
                    Web Development
                  </li>
                  <li onClick={() => setselectedCotegory("App Development")} className={selectedCotegory === "App Development" ? "current" : ""}>
                    App Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="project_container  clearfix "
            style={{ position: "relative", height: 1202 }}
          >

            <div className="row clearfix">
              {filterCotegory.map((item) => (
                <div
                  key={item.id}
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-coaching"
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        loading="lazy"
                        width={746}
                        height={497}
                        src={item.image}
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>{item.category}</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            {item.title}
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pd_bottom_20" />
        </div>
      </section>
    </>
  )
}

export default ViewAll