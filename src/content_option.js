// src/content_option.js

const logotext = "ThanhNg224";
const meta = {
  title: "Nguyen Phuc Thanh - Mobile & Full Stack Developer",
  description:
    "I’m Nguyen Phuc Thanh, a mobile and full-stack developer from Hanoi. I build innovative apps and web solutions.",
};

const introdata = {
  title: "I'm Thanh Nguyen",
  animated: {
    first: "I love coding",
    second: "I develop mobile apps",
    third: "I build websites",
  },
  description:
    "I'm Nguyen Phuc Thanh, a B.Sc. graduate in Multimedia Engineering from HUST. Full-stack developer focused on Android and mobile solutions. Working at EUp in Hanoi. My passion is creating high-quality mobile and web products.",
  your_img_url: "https://avatars.githubusercontent.com/ThanhNg224",
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I'm Nguyen Phuc Thanh, a B.Sc. graduate in Multimedia Engineering from HUST and a Full-Stack Developer. From shipping Kotlin and Flutter mobile apps to crafting React/Node.js web solutions, building lightweight Python/Flask services, and even prototyping Unity experiences, I thrive on tackling new stacks and turning ideas into polished products. I'm currently exploring opportunities at EUp. My focus is always on clean, production-ready code, intuitive UX, and finding the simplest path from concept to impact. Hungry for fresh challenges, I'm ready to bring my adaptable, get-things-done mindset to whatever comes next.",
};

// Education entries pulled from CV
const education = [
  {
    institution: "Hanoi University of Science and Technology – HUST",
    degree: "B.Sc. in Multimedia Engineering (Advanced Program)",
    period: "2021 – 2025",
  },
];

// Certifications entries pulled from CV
const certifications = [
  {
    name: "IELTS Academic - 7.5",
    issuer: "IDP Education Co., Ltd",
    date: "Sep 2024",
  },
];

const worktimeline = [
  {
    jobtitle: "Android Developer (High-Scale App Development & Product Optimization)",
    where: "eUp Technology Joint Stock Company (eUp Group) (Hanoi, Vietnam)",
    date: "June 2025 – Present",
  },
  {
    jobtitle: "Fullstack Developer (Mobile Focus)",
    where: "ATIN – Advanced Technology Innovations (Hanoi, Vietnam)",
    date: "July 2024 – June 2025",
  },
  {
    jobtitle: "C++ Training Program",
    where: "FPT Software (Training Internship) (Hanoi, Vietnam)",
    date: "May 2024 – July 2024",
  },
];

const skills = [
    { name: "Kotlin & Android", value: 80 },
    { name: "Flutter & Dart", value: 70 },
    { name: "React Native", value: 65 },
    { name: "JavaScript (ReactJS/NextJS)", value: 75 },
    { name: "NodeJS & Express", value: 70 },
    { name: "Python (Flask, scikit‐learn, OpenCV)", value: 65 },
    { name: "SQL & MySQL", value: 50 },
    { name: "Unity & C#", value: 50 },
];

const services = [
  {
    title: "Mobile App Development",
    description:
      "Building production‐ready mobile apps using Flutter/Dart or native Android (Kotlin) with integrations like ML Kit, Firebase, and backend APIs.",
  },
  {
    title: "Full‐Stack Web Development",
    description:
      "Creating responsive web apps with ReactJS/NextJS, Tailwind CSS, and NodeJS/Express backends (or Flask) with MySQL.",
  },
  {
    title: "Machine Learning Integration",
    description:
      "Embedding ML models (e.g., scikit‐learn SVM, OpenCV image processing) into apps for features like face detection, OCR, and data‐driven insights.",
  },
  {
    title: "UI/UX & Prototyping",
    description:
      "Designing clean, user‐centric interfaces, wireframes, and prototypes to ensure high engagement and usability.",
  },
];

const dataportfolio = [
  {
    img: `${process.env.PUBLIC_URL}/images/Viettel.jpg`,
    description:
      "Viettel EID/Passport Verification App – Android kiosk solution with liveness detection, NFC reading, OCR (MRZ), and payment integration.",
    link: "https://github.com/ThanhNg224/Viettel",
    isPrivate: true,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/device_management.png`,
    description:
      "A full-stack platform designed to manage and update Android-based Face Terminal machines. The system enables real-time device monitoring, access log viewing, and remote APK updates.",
    link: "https://github.com/ThanhNg224/device_management_full",
    isPrivate: true,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/cofffeeshop.jpg`,
    description:
      "Coffee Shop Website & Android App – Full‐stack project (ReactJS/NodeJS/MySQL + React Native) with user/admin roles, product browsing, and feedback systems.",
    link: "https://github.com/ThanhNg224/CoffeeShopProject",
    isPrivate: true,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/rain_caster.jpg`,
    description:
      "Raincaster – Real‐time weather forecasting platform with SVM model in Flask backend and ReactJS front end, focused on advanced rainfall prediction.",
    link: "https://github.com/ThanhNg224/Raincaster",
    isPrivate: true,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/DSoft.jpg`,
    description:
      "DSoft is a Flutter-based spa & wellness management app that streamlines operations from bookings and staff scheduling to inventory, payments, and business analytics.",
    link: "https://github.com/ThanhNg224/DSoft",
    isPrivate: true,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/my_image_low_res.jpg`,
    description:
      "Additional projects available on my GitHub! Feel free to explore more.",
    link: "https://github.com/ThanhNg224",
    isPrivate: false,
    ctaLabel: "View Github",
  },
];

const contactConfig = {
  YOUR_EMAIL: "thanhng224@gmail.com",
  YOUR_FONE: "033 281 2606",
  description:
    "Hit me up if you want to collab on a mobile or web project, need ML integration, or just want to chat about coding.",
  // If you're using EmailJS, replace these with your own IDs:
  YOUR_SERVICE_ID: "service_fmndwwk",
  YOUR_TEMPLATE_ID: "template_seyshqv",
  YOUR_USER_ID: "6j2qT7_SbRpSZ46l4",
};

const socialprofils = {
  github: "https://github.com/ThanhNg224",
  facebook: "https://www.facebook.com/nguyen.thanh.619149/",
  linkedin: "https://www.linkedin.com/in/nguyễn-thành-a7a8b3355/",
  twitter: "#",
  instagram: "https://www.instagram.com/thanhng.224",
};

export {
  meta,
  introdata,
  dataabout,
  education,
  certifications,
  worktimeline,
  skills,
  services,
  dataportfolio,
  contactConfig,
  socialprofils,
  logotext,
};
