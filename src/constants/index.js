import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lead Engineer, First Robotics Competition Construction Team",
      company_name: "FIRST",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2020 - Feb 2021",
      points: [
        "Crafted an engaging landing page for the project using CSS, HTML, and React.js, effectively showcasing the robot's features and enhancing user experience through intuitive design.",
        "Led a team of six in the design and fabrication of an innovative robot, overseeing project timelines and ensuring successful collaboration across all phases of development.",
        "Designed a precision suction mechanism using Fusion 360 and mechanical drawings, which played a crucial role in the team's success, earning the prestigious Rookie Game Changer Award for outstanding performance.",
      ],
    },
    {
      title: "Head of External Wing Geometry Design",
      company_name: "Design Build Fly at University of Washington",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Jun 2023",
      points: [
      "Created a decision matrix for aerofoil selection, using a Node.js and Express backend to present analysis on a web application for informed design choices.",
      "Stored wind tunnel test data in MongoDB for efficient retrieval and management of results.",
      "Analyzed airfoil designs using XFOILS and processed flight performance data with NumPy and Pandas to identify aerodynamic improvements.",
      ],
    },
    {
      title: "Full Stack Engineering Intern",
      company_name: "Pan Communications Pvt Ltd",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Optimized RESTful APIs using Node.js and Express, reducing server response times",
        "Integrated OpenAI API for natural language processing tasks, enabling automated content generation and improving user engagement",
        "Implemented user authentication and authorization using JWT and OAuth2, enhancing security for client applications.",
      ],
    },
  
    {
      title: "VP Of Administration & Operations",
      company_name: "Algorithmic Trading Club at UW",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Present",
      points: [
        "Developed a dynamic website utilizing three.js, React3F, and JavaScript to facilitate option strategies, aimed at maximizing the Sharpe ratio for improved risk-adjusted returns.",
        "Designed and implemented a profitable trading algorithm, rigorously backtested with QuantConnect and MultiCharts for optimal performance across market conditions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sphere Sprint",
      description:
        "I developed a game called Sphere Sprint using three.js and React3F. In the game, you control a sphere that navigates through various levels, jumping over obstacles and interacting with real physics. It’s designed to be an engaging challenge, combining smooth visuals with dynamic gameplay.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Algorithmic Trading Club at UW Website",
      description:
        "I created the Algorithmic Trading Club website to explain what we do at ATC and how to get involved. It includes details on how to reach us and what we focus on in the club. The goal is to keep members informed and engaged with real-time data and club updates.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };