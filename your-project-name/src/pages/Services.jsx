import React from "react";
import "./Services.css";
import img1 from "../asset/img1.webp";
import img2 from "../asset/img3.png";
import img3 from "../asset/img2.jpg";
import img4 from "../asset/img4.jpeg";
import img5 from "../asset/img5.jpg";
import img6 from "../asset/img6.webp";
import img7 from "../asset/img7.jpg";
import img8 from "../asset/img8.jpg";
import img9 from "../asset/img9.jpg";
import img10 from "../asset/img10.webp";

const serviceData = [
  {
    title: "Residential Construction",
    desc: "Custom homes built with Vastu principles for optimal energy.",
    img: img1,
  },
  {
    title: "Vastu Audits",
    desc: "Analyze and recommend changes for existing spaces.",
    img: img2,
  },
  {
    title: "Commercial Projects",
    desc: "Office and retail builds promoting productivity.",
    img: img3,
  },
  {
    title: "Consultations",
    desc: "One-on-one advice for your Vastu needs.",
    img: img4,
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform old or damaged structures into fresh, functional, and beautiful spaces while preserving their essence.",
    img: img5,
  },
  {
    title: "Interior Design & Finishing Work",
    desc: "We design and execute modern, traditional, or Vastu-compliant interiors for homes and offices.",
    img: img6,
  },
  {
    title: "Architectural Planning & Structural Design",
    desc: "Professional layout and blueprint design that ensures safety, utility, and aesthetics — fully aligned with building codes.",
    img: img7,
  },
  {
    title: "Civil Contracting",
    desc: "Turnkey civil contracting — we handle all aspects including labor, material, and supervision to deliver ready-to-use projects.",
    img: img8,
  },
  {
    title: "On-Site Vastu Visits",
    desc: "Personalized site visits for accurate energy analysis and corrective solutions.",
    img: img9,
  },
  {
    title: "Vastu Remedies Without Demolition",
    desc: "Simple, effective adjustments to balance energies without breaking or rebuilding structures.",
    img: img10,
  },
];

const Services = () => {
  return (
    <main>
      <section className="services">
        <h2>Our Services</h2>
        <p className="subtitle">
          Transforming spaces with precision, energy, and design harmony
        </p>

        <div className="service-list">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="service-item"
              style={{
                backgroundImage: `url(${service.img})`,
              }}
            >
              <div className="overlay"></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
