import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
  <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className="flex-[0.5] bg-black-100 p-6 rounded-2xl"
    style={{ height: "auto", maxHeight: "400px" }} // Set a maximum height
  >
    <p className={styles.sectionSubText}>Get in touch</p>
    <h3 className={styles.sectionHeadText}>Contact</h3>
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">
        <div className="text-2xl my-2 flex items-center hover:scale-110 transition-transform duration-200">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <a href="https://www.linkedin.com/in/arjun-vaish/" className="text-white">
            {"Linkedin"}
          </a>
        </div>
        <div className="text-2xl my-2 flex items-center hover:scale-110 transition-transform duration-200">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <a href="mailto:arjunvaish22@gmail.com">
            {"Email"}
          </a>
        </div>
      </span>
    </label>
  </motion.div>

  <motion.div
    variants={slideIn("right", "tween", 0.2, 1)}
    className="flex-1 h-auto md:h-[600px] h-[400px]"
  >
    <EarthCanvas />
  </motion.div>
</div>


  );
};

export default SectionWrapper(Contact, "contact");