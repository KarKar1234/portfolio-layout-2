
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faArrowPointer, faArrowUpRightFromSquare, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Karl",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    //{
    // title: "Blog",
    //  link: "https://medium.com/@hashirshoaeb",
    //}
  ],
}
export const intro = {
  title: "Hey, I'm Karl",
  description: "Aspiring financial analyst with a background in coding and data analysis",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1tNNvDsnfChzU5XYQM2T0WlhS_hc3HTGcmi8KWWCiz2I/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Mission Statement",
  description: [
    "I'm interested in a financial analyst role and my coding skills bring a unique background. My personal projects demonstrate my ability to analyze complex data and apply technical skills to solve problems. I'm passionate about transitioning into finance where I can utilize my coding background to collaborate within a team and provide insight to the company's success. ",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Financial Analysis",
      description: "Multiple projects analyzing financial models and providing forecasting",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Calculator Project",
      description: "This React-based project implements a basic calculator with functionalities for adding, subtracting, multiplying, and dividing numbers. It utilizes the useReducer hook for state management and provides a clear and user-friendly interface.",
      icons: [
        {
          icon: faArrowUpRightFromSquare,
          link: "https://karkar1234.github.io/Calculator-App/",
        },
        {
          icon: faGithub,
          link: "https://github.com/KarKar1234/Calculator-App",
        },
      ]
    },
    {
      title: "Caleo Cafe",
      description: "I teamed up with Caleo Cafe Angola to build a dynamic website tailored to their brand and customer needs. Through meticulous design and collaboration with the owners, we crafted an intuitive platform that highlights their menu offerings and seamless ordering.",
      icons: [
        {
          icon: faArrowUpRightFromSquare,
          link: "http://www.caleocafeangola.com/",
        },
        //{
        //icon: faGithub,
        //link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        //},
      ]
    },
    {
      title: "Movie Search Engine",
      description: "My first project during the Front-End developer bootcamp, I integrated HTML, CSS, and JavaScript to create a responsive website. Utilizing an API database, it provides an interface for users to search for films. Please note the site is not optimized for mobile devices.",
      icons: [
        {
          icon: faArrowUpRightFromSquare,
          link: "https://karkar1234.github.io/Movie-Search-Engine-Project/",
        },
        {
          icon: faGithub,
          link: "https://github.com/KarKar1234/Movie-Search-Engine-Project",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at kulbrich23@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:kulbrich23@gmail.com",
      isPrimary: true,
    },
    //{
    //title: "Schedule Meeting",
    // link: "https://topmate.io/hashirshoaeb",
    //isPrimary: false,
    //},
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Karl Ulbrich | Analyst | Reactjs developer",
  //description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@karkar1234",
  description: "Analyst | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://www.karlulbrich.com/",
    },
    {
      title: "Calculator Project",
      link: "https://karkar1234.github.io/Calculator-App//",
    },
    {
      title: "Caleo Cafe",
      link: "http://www.caleocafeangola.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/KarKar1234/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/karl-ulbrich-837b35127/",
    },
  ]
}