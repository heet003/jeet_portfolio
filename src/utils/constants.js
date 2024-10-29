/*eslint-disable */

const link1 = import.meta.env.VITE_APP_PROJECT1_LINK;
const link2 = import.meta.env.VITE_APP_PROJECT2_LINK;
const link3 = import.meta.env.VITE_APP_PROJECT3_LINK;

const projects = [
  {
    title: "Open Mic 🎙️",
    role: "Frontend Developer",
    description:
      "A real-time chat web app featuring JWT authentication, profile management, real-time messaging and file transfer, and friend requests. This app enables users to communicate seamlessly in a secure environment.",
    img: link1 ,
  },
  {
    title: "PodStream Web App",
    role: "Full-Stack Developer",
    description:
      "A podcast streaming platform with role-based access, JWT authentication, profile management, and podcast uploads. Creators can upload their podcasts, and admins can manage the dashboard effectively.",
    img: link2 ,
  },
  {
    title: "Weather Update",
    role: "Backend Developer",
    description:
      "A weather update app with a React.js frontend and a Node.js backend that integrates with a weather API to provide accurate, up-to-date weather information for various locations.",
    img: link3 ,
  },
];

export { projects };
