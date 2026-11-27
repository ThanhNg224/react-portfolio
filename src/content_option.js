// src/content_option.js

const logotext = "ThanhNg224";

const introdata = {
  your_img_url: "https://avatars.githubusercontent.com/ThanhNg224",
};

const dataportfolio = [
  {
    id: "mobileStarterKits",
    title: "Mobile App & SDK Starter Suite",
    link: "https://github.com/ThanhNg224/mobile-starter-kits",
  },
  {
    id: "deskBridge",
    title: "DeskBridge",
    link: "https://github.com/ThanhNg224/DeskBridge",
  },
  {
    id: "viettel",
    img: `${process.env.PUBLIC_URL}/images/Viettel.jpg`,
    width: 1551,
    height: 964,
    description:
      "Android kiosk for Viettel that verifies IDs and passports using MRZ OCR, NFC chip reading, and face matching. It integrates digital signing and VNPAY sandbox QR payments.",
    link: "https://github.com/ThanhNg224/Viettel",
    isPrivate: true,
  },
  {
    id: "fileRecovery",
    title: "File Recovery",
    isPrivate: true,
  },
  {
    id: "deviceManagement",
    img: `${process.env.PUBLIC_URL}/images/device_management.png`,
    width: 2462,
    height: 1340,
    description:
      "Android OTA agent and monitoring dashboard for SunGroup’s SunWorld face terminals, with device telemetry, real-time status, and remote APK updates.",
    link: "https://github.com/ThanhNg224/device_management_full",
    isPrivate: true,
  },
  {
    id: "coffeeShop",
    img: `${process.env.PUBLIC_URL}/images/cofffeeshop.jpg`,
    width: 800,
    height: 450,
    description:
      "Coffee Shop Website & Android App – Full‐stack project (ReactJS/NodeJS/MySQL + React Native) with user/admin roles, product browsing, and feedback systems.",
    link: "https://github.com/ThanhNg224/CoffeeShopProject",
    isPrivate: true,
  },
  {
    id: "raincaster",
    img: `${process.env.PUBLIC_URL}/images/rain_caster.jpg`,
    width: 2492,
    height: 1350,
    description:
      "Raincaster – Real‐time weather forecasting platform with SVM model in Flask backend and ReactJS front end, focused on advanced rainfall prediction.",
    link: "https://github.com/ThanhNg224/Raincaster",
    isPrivate: true,
  },
  {
    id: "dsoft",
    img: `${process.env.PUBLIC_URL}/images/DSoft.jpg`,
    width: 1800,
    height: 2880,
    description:
      "DSoft is a Flutter-based spa & wellness management app that streamlines operations from bookings and staff scheduling to inventory, payments, and business analytics.",
    link: "https://github.com/ThanhNg224/DSoft",
    isPrivate: true,
  },
  {
    id: "github",
    img: `${process.env.PUBLIC_URL}/images/my_image_low_res.jpg`,
    width: 1024,
    height: 1536,
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
  linkedin: "https://www.linkedin.com/in/nguyễn-phúc-thành-a7a8b3355/",
  instagram: "https://www.instagram.com/thanhng.224",
};

export {
  introdata,
  dataportfolio,
  contactConfig,
  socialprofils,
  logotext,
};
