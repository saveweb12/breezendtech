"use client";

import React, { useState } from "react";

const MakeTheRight = ({ data }) => {

  const [selectedCategory, setSelectedCategory] = useState("*");

  const jobListings = [
    { id: 1, title: "Website Project Coordinator", category: "human-resources" },
    { id: 2, title: "Human Resources Director", category: "human-resources" },
    {
      id: 3,
      title: "Social Media & Content Marketer",
      category: "human-resources",
    },
    { id: 4, title: "Graphic Designer", category: "human-resources" },
    { id: 5, title: "Mobile Application Team Lead", category: "human-resources" },
    { id: 6, title: "Node JS Developer", category: "leadership" },
    { id: 7, title: "Business Analyst", category: "leadership" },
    { id: 8, title: "Laravel Full Stack Developer", category: "internship" },
    { id: 9, title: "IT Sales Representative", category: "pre-sale" },
    { id: 10, title: "Customer Service Representative", category: "pre-sale" },
    { id: 11, title: "Database Administrator", category: "pre-sale" },
    { id: 12, title: "SOC Analyst Tier I", category: "pre-sale" },
    { id: 13, title: "Linux System Administrator", category: "pre-sale" },
    { id: 14, title: "Scrum Master", category: "recruiting" },
    { id: 15, title: "Incident Response Analyst", category: "recruiting" },
    { id: 16, title: "Talent Acquisition Coordinator", category: "recruiting" },
    { id: 17, title: "Cybersecurity Analyst", category: "recruiting" },
  ];

  const filteredJobs =
    selectedCategory === "*"
      ? jobListings
      : jobListings.filter((job) => job.category === selectedCategory);

  return (
    <>
      <section className="project-section">
        <div className="container">
          <div className="title_all_box style_one text-center dark_color">
            {data.map((items) => (
              <div className="title_sections" key={items.id}>
                <h2>{items.title}</h2>
                <p>
                  {items.description}
                </p>
              </div>
            ))}
          </div>
          <div className="project_all filt_style_six filter_enabled">
            <div className="row">
              <div className="col-lg-12">
                <div className="fliter_group" style={{ textAlign: "center" }}>
                  <ul className="project_filter dark clearfix">
                    <li onClick={() => setSelectedCategory("*")}>View All</li>
                    <li onClick={() => setSelectedCategory("internship")}>
                      Internship
                    </li>
                    <li onClick={() => setSelectedCategory("human-resources")}>
                      Part Time
                    </li>
                    <li onClick={() => setSelectedCategory("leadership")}>
                      Contract
                    </li>
                    <li onClick={() => setSelectedCategory("pre-sale")}>
                      Full Time Permanent
                    </li>
                    <li onClick={() => setSelectedCategory("recruiting")}>
                      Freelance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              {filteredJobs.map((job) => (
                <div key={job.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="service_box style_one dark_color">
                    <div className="service_content">
                      <div className="content_inner">
                        <h2>
                          <a href="#">{job.title}</a>
                        </h2>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <a href="#" className="read_more">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeTheRight;
