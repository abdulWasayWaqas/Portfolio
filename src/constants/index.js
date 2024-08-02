import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import fitness from "../assets/projects/fitness.jpg"
import bankist from "../assets/projects/bankist.jpg"
import ball from "../assets/projects/ball.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I have experience in mobile app development using Flutter. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    "year": "2023",
    "role": "Software Development Intern",
    "company": "Qwerty Experts",
    "description": "Contributed to the development of web applications using JavaScript and React.js. Assisted in building user interfaces and improving application performance. Collaborated with the development team to implement features and fix bugs. Gained practical experience in full-stack development and agile methodologies.",
    "technologies": ["JavaScript", "React.js"]
}

 
];

export const PROJECTS = [

  {
    title: "3D Ball Monitoring Project",
    image: ball,
    description:
      "A 3D ball monitoring application that visualizes real-time ball movements within a 3D environment. Built using HTML, CSS, JavaScript, Three.js, and MySQL for data storage and retrieval.",
    technologies: ["HTML", "CSS", "JavaScript", "Three.js","Node", "MySQL"]
},
  {
    title: "Mapty App",
    image: project1,
    description:
      "A fitness tracking application that allows users to log workouts (running or cycling) based on their location. Features include geolocation, workout tracking, and detailed statistics.",
    technologies: ["HTML", "CSS", "Advanced JavaScript", "Geolocation API", "Browser APIs"]
},
{
  title: "Fitness Tracker App",
  image: fitness,
  description:
    "A comprehensive fitness tracker app built with Flutter and Firebase, featuring step counting with a pedometer, weather information integration, calorie burn calculation, and user record tracking.",
  technologies: ["Flutter", "Firebase", "Pedometer API", "Weather API", "Dart", "Cloud Firestore"]
},
{
  title: "Bankist App",
  image: bankist,
  description:
    "An interactive online banking platform that provides features such as account management, transaction history, and secure login/logout functionality. Built with a focus on user experience and security.",
  technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
},
{
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Lahore,Pakistan. ",
  phoneNo: "0316-4408053 ",
  email: "wasaywaqas121@gmail.com",
};
