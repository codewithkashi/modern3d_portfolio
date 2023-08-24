import {
  mobile,
  backend,
  creator,
  web,
  css,
  express,
  git,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  reactjs,
  sass,
  tailwind,
  typescript,
  bank,
  futureofai,
  netflix,
  promptshare,
  resturant,
  todo,
  twitter,
  facebook,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    name: "Express.js",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDb",
    icon: mongodb,
  },
  {
    name: "Next.js",
    icon: nextjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "SASS",
    icon: sass,
  },
];

const experiences = [
  {
    title: "HTML, CSS , JAVASCRIPT",
    icon: html,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "I started basic of web development.",
      "Created 30+ real world responsive websites.",
    ],
  },
  {
    title: "React.js",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "I started learning about react such as components and reusability.",
      "Created 20+ modern UX/UI react.js projects.",
    ],
  },
  {
    title: "MongoDB, Node.js, Express.js",
    icon: nodejs,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "I started learning backend development using mongodb, exress.js and node.js ",
      "I learnt how to create API's and created 10+ real world projects.",
    ],
  },
  {
    title: "Next.js, Typescript, Tailwind CSS",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Currently i am learning Next.js and exploring it's full stack powers.",
      "I created full stack projects such as Twitter clone, Netflix clone, Todo app etc.",
    ],
  },
];

const projects = [
  {
    name: "Full Stack Facebook Clone",
    description:
      "A full-stack Facebook clone built with Next.js, TypeScript, Tailwind CSS, and MongoDB, featuring various functionalities inspired by the social media giant.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: facebook,
    source_code_link: "https://github.com/codewithkashi/facebook-clone",
  },
  {
    name: "Full Stack Twitter Clone",
    description:
      "Discover my Twitter clone – a blazing-fast web app built with Next.js, TypeScript, Tailwind CSS, and Prisma.Key features are creating accouts, follow and unfollow, tweet, like and reply etc.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/codewithkashi/twitter_clone",
  },
  {
    name: "Full Stack Prompt Sharing App",
    description:
      "Introducing a prompt sharing app with Next.js, MongoDb and Tailwind CSS. Seamlessly share prompts, explore diverse ideas and responsive UI for engaging user experiences.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: promptshare,
    source_code_link: "https://github.com/codewithkashi/nextjs_prompt_share",
  },
  {
    name: "Full Stack Netflix CLone",
    description:
      "Introducing a Netflix clone app with Next.js, MongoDb, Prisma and Tailwind CSS. Seamlessly watch movies and responsive UI for engaging user experiences.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/codewithkashi/netflix-clone",
  },
  {
    name: "Full Stack Todo App",
    description:
      "The ultimate full-stack todo app. Create an account, log in, manage tasks effortlessly with create, update, delete, and edit functionalities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/codewithkashi/nextjs_todo",
  },
  {
    name: "UX/UI Future of AI",
    description:
      "Discover the future of AI with our cutting-edge React.js website! Immerse yourself in modern UI design, sleek assets, and captivating gradients, providing an innovative and seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: futureofai,
    source_code_link: "https://github.com/codewithkashi/react_future_of_ai",
  },
  {
    name: "UX/UI Resturant App",
    description:
      "Experience the epitome of modern UX/UI design with our restaurant website powered by React.js. Indulge in a visually stunning interface and elegant assets, delivering a seamless dining journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: resturant,
    source_code_link: "https://github.com/codewithkashi/react_resturant_app",
  },
  {
    name: "UX/UI Modern Bank App",
    description:
      "A modern UX/UI bank website, showcasing the power of React.js and Tailwind CSS. Immerse yourself in a stunning interface, dynamic gradients, captivating assets and fully mobile responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/codewithkashi/react_bank_app",
  },
];

export { services, technologies, experiences, projects };
