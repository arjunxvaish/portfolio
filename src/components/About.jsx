import React from "react";
// import { Tilt  } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Import resume image from assets
import resumeImg from "../assets/resume.png";
// Import the resume document
import resumeDoc from "../assets/resumearjun.pdf"; // Update the document name

// const ProjectCard = () => {
//   return (
//     <Tilt options={{ max: 25, scale: 1, speed: 400 }} className="w-[300px]">
//       <motion.div
//         variants={fadeIn("", "", 0.2, 1)}
//         className="bg-tertiary rounded-lg shadow-lg h-[400px] cursor-pointer"
//       >
//         <a href={resumeDoc} target="_blank" rel="noopener noreferrer">
//           <img
//             src={resumeImg} // Use the imported resume image
//             alt="Resume"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </a>
//       </motion.div>
//     </Tilt>
//   );
// };

const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex flex-wrap lg:flex-nowrap gap-10 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’m a junior studying Electrical and Computer Engineering at The University of Washington, Seattle, where I’m
          passionate about transforming ideas into captivating digital experiences. I have a strong proficiency in JavaScript
          and love working with technologies like React, Three.js, and Node.js to create interactive and visually stunning
          applications. When I’m not coding, you can find me trading options, hitting the gym, or watching Max Verstappen win yet another race.
        </motion.p>

        {/* Project Card */}
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
