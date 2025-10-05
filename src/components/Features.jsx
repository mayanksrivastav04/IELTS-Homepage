import React from "react";
import { FaMicrophone, FaBook, FaRobot } from "react-icons/fa";

const features = [
  {
    icon: <FaMicrophone className="text-4xl text-[#C7002B]" />,
    title: "Speaking Practice",
    desc: "Get real-time feedback on your speaking skills and improve faster.",
  },
  {
    icon: <FaBook className="text-4xl text-[#C7002B]" />,
    title: "Mock Tests",
    desc: "Take full-length IELTS mock tests to track your progress.",
  },
  {
    icon: <FaRobot className="text-4xl text-[#C7002B]" />,
    title: "AI Band Score",
    desc: "Predict your IELTS band score with our intelligent AI system.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="big-container mx-auto text-center p-6 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our key Features</h2>
        <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl px-10 py-5 mb-5">
          {features.map((feature, idx) => {
            return (
              <div key={idx} className="card bg-gray-50 p-10 md:p-8 rounded-xl text-center shadow-md  hover:shadow-xl transition duration-300">
                <div className="mb-4 mx-auto w-fit">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}

        </div>
            <button className="bg-[#C7002B] text-white px-6 py-3 rounded-md text-lg hover:bg-red-700 transition active:scale-95 cursor-pointer">Explore All Courses</button>

      </div>
    </section>
  );
};

export default Features;
