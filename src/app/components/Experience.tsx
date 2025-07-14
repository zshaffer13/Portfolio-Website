"use client";

import React, { ReactNode } from "react";
import { FaProjectDiagram, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";

// Experience entry type
type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  techIcons: ReactNode[];
  points: string[];
};

// Data for each experience
const experiences: ExperienceEntry[] = [
  {
    title: "AI Engineer",
    company: "HyperSpectral",
    period: "Sep 2022 – Nov 2024",
    techIcons: [<FaPython key="py" size={24} />, <SiTensorflow key="tf" size={24} />, <SiPytorch key="pt" size={24} />, <FaAws key="aws" size={24} />, <FaDocker key="docker" size={24} />],
    points: [
      "Led development of innovative classification models of spectral data, boosting prediction accuracy by 10%.",
      "Designed automated data ingestion workflows using AWS Lambda, reducing preprocessing time by 25%.",
      "Researched and implemented cutting-edge academic methodologies for real-world product development.",
      "Optimized data pipelines for scalability and efficiency, improving training times by 20%."
    ]
  },
  {
    title: "Software Engineer II",
    company: "HyperSpectral",
    period: "Jul 2020 – Sep 2022",
    techIcons: [<FaPython key="py" size={24} />, <FaDocker key="docker" size={24} />, <SiTensorflow key="tf" size={24} />],
    points: [
      "Developed and deployed unsupervised machine learning models, improving R&D data analysis by 30%.",
      "Built a scalable simulation data pipeline processing 5M+ entries monthly.",
      "Authored detailed technical reports contributing to successful patent filings and IP development."
    ]
  },
  {
    title: "Data Collection Lead",
    company: "HyperSpectral",
    period: "Nov 2020 – Jun 2021",
    techIcons: [<FaProjectDiagram key="pd" size={24} />, <FaPython key="py" size={24} />],
    points: [
      "Coordinated multi-site clinical partnerships for COVID-19 sample collection and analysis.",
      "Managed sample processing workflows and ensured compliance with IRB protocols and HIPAA regulations.",
      "Acted as liaison between clinical partners and executive leadership, ensuring operational continuity."
    ]
  },
  {
    title: "Software & Technology Consultant",
    company: "Augmenteum Inc.",
    period: "Jun 2018 – Aug 2018",
    techIcons: [<FaPython key="py" size={24} />, <FaProjectDiagram key="pd" size={24} />],
    points: [
      "Integrated AI-driven enhancements into augmented reality applications.",
      "Designed computer vision algorithms for real-time object detection and tracking.",
      "Developed performance metric dashboards in Excel, reducing reporting time by 40%."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-widest text-white">
        EXPERIENCE
      </h2>

      <div className="overflow-x-auto px-4 no-scrollbar">
        <div className="flex justify-center space-x-6 snap-x snap-mandatory">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-80 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:bg-white/30 transition"
            >
              {/* Company Logo Placeholder */}
              <div className="flex justify-center mb-4">
                <FaProjectDiagram size={48} className="text-white/80" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
              <p className="text-teal-300 mb-4 font-medium">{exp.company}</p>

              {/* Tech Icons */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {exp.techIcons.map((icon, iconIdx) => (
                  <div key={iconIdx} className="text-white/90">
                    {icon}
                  </div>
                ))}
              </div>

              <p className="text-gray-200 italic text-sm mb-4">{exp.period}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-100 text-sm max-h-36 overflow-y-auto no-scrollbar pr-2">
                {exp.points.map((pt, ptIdx) => (
                  <li key={ptIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
