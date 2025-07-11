"use client";

import { FaPython, FaDocker, FaGitAlt, FaAws, FaGoogle, FaChartBar, FaChartLine, FaProjectDiagram } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiLangchain,
  SiMediapipe,
  SiJupyter,
  SiKubernetes,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Programming",
    items: [
      { label: "Python", icon: <FaPython size={36} /> },
      { label: "MATLAB", icon: <FaProjectDiagram size={36} /> },
      { label: "SQL", icon: <FaProjectDiagram size={36} /> },
      { label: "NoSQL", icon: <FaProjectDiagram size={36} /> },
    ],
  },
  {
    category: "ML Frameworks",
    items: [
      { label: "TensorFlow", icon: <SiTensorflow size={36} /> },
      { label: "PyTorch", icon: <SiPytorch size={36} /> },
      { label: "Keras", icon: <SiKeras size={36} /> },
      { label: "Scikit-Learn", icon: <SiScikitlearn size={36} /> },
      { label: "XGBoost", icon: <FaChartBar size={36} /> },
    ],
  },
  {
    category: "Data Science",
    items: [
      { label: "Pandas", icon: <SiPandas size={36} /> },
      { label: "NumPy", icon: <SiNumpy size={36} /> },
      { label: "Matplotlib", icon: <FaChartBar size={36} /> },
      { label: "Seaborn", icon: <FaChartLine size={36} /> },
      { label: "A/B Testing", icon: <FaProjectDiagram size={36} /> },
    ],
  },
  {
    category: "Computer Vision",
    items: [
      { label: "OpenCV", icon: <FaProjectDiagram size={36} /> },
      { label: "PIL", icon: <FaProjectDiagram size={36} /> },
      { label: "MediaPipe", icon: <SiMediapipe size={36} /> },
    ],
  },
  {
    category: "Generative AI / LLMs",
    items: [
      { label: "Hugging Face", icon: <SiHuggingface size={36} /> },
      { label: "OpenAI API", icon: <FaProjectDiagram size={36} /> },
      { label: "RAG", icon: <FaProjectDiagram size={36} /> },
      { label: "Prompt Engineering", icon: <FaProjectDiagram size={36} /> },
      { label: "LangChain", icon: <SiLangchain size={36} /> },
    ],
  },
  {
    category: "MLOps & Deployment",
    items: [
      { label: "Weights & Biases", icon: <FaChartLine size={36} /> },
      { label: "Git", icon: <FaGitAlt size={36} /> },
      { label: "Docker", icon: <FaDocker size={36} /> },
      { label: "Kubernetes", icon: <SiKubernetes size={36} /> },
      { label: "CI/CD", icon: <FaProjectDiagram size={36} /> },
      { label: "Unit Testing", icon: <FaProjectDiagram size={36} /> },
    ],
  },
  {
    category: "Cloud Platforms",
    items: [
      { label: "AWS", icon: <FaAws size={36} /> },
      { label: "GCP", icon: <FaGoogle size={36} /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Jupyter", icon: <SiJupyter size={36} /> },
      { label: "Spyder IDE", icon: <FaProjectDiagram size={36} /> },
      { label: "REST APIs", icon: <FaProjectDiagram size={36} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Tech Stack</h2>

      {/* Horizontal scroll container with hidden scrollbar */}
      <div className="overflow-x-auto px-4 no-scrollbar">
        <div className="flex space-x-8 pr-8">
          {skillCategories.map((group) => (
            <div key={group.category} className="flex-shrink-0 w-64">
              <h3 className="text-xl font-semibold mb-4 text-white">{group.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                  >
                    {skill.icon}
                    <span className="mt-1 text-sm font-medium text-white">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
