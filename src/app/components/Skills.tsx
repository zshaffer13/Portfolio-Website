"use client";

import { FaPython, FaDocker, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaPython size={40} />, label: "Python" },
  { icon: <SiPytorch size={40} />, label: "PyTorch" },
  { icon: <SiTensorflow size={40} />, label: "TensorFlow" },
  { icon: <FaReact size={40} />, label: "React" },
  { icon: <SiNextdotjs size={40} />, label: "Next.js" },
  { icon: <SiTailwindcss size={40} />, label: "Tailwind" },
  { icon: <FaDocker size={40} />, label: "Docker" },
  { icon: <SiTypescript size={40} />, label: "TypeScript" },
  { icon: <FaNodeJs size={40} />, label: "Node.js" },
  { icon: <FaGithub size={40} />, label: "GitHub" },
];

export default function Skills() {
  return (
    <section className="py-16 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 hover:shadow-lg transition-transform"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
