import nextHireLandingPage from "@/assets/images/nexthire-landing-page-min.png";
import nextHireBrowseJobPage from "@/assets/images/browse-job-page-min.png";
import nextHireJobdetailsPage from "@/assets/images/job-details-page-min.png";
import nextHirePostJobPage from "@/assets/images/post-job-page-min.png";
import quizMasterLandingPage from "@/assets/images/quiz-master-landing-page-min.png";
import quizMasterLatestQuizPage from "@/assets/images/quiz-master-dashboard-min.png";
import quizMasterCategoryPage from "@/assets/images/quizzes-by-category-min.png";
import countryAppLandingPage from "@/assets/images/home-page-min.png";
import coutnryAppDetailsPage from "@/assets/images/country-details-page-min.png";
import countryAppHoverState from "@/assets/images/home-page-hover-state-min.png";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

import JavascriptIcon from "@/assets/icons/javascript-icon.svg";
import TypescriptIcon from "@/assets/icons/typescript-icon.svg";
import ReactjsIcon from "@/assets/icons/reactjs-icon.svg";
import NodejsIcon from "@/assets/icons/nodejs-icon.svg";
import MongodbIcon from "@/assets/icons/mongodb-icon.svg";
import ExpressIcon from "@/assets/icons/express-icon.svg";
import NextjsIcon from "@/assets/icons/nextjs-icon.svg";
import PostgresIcon from "@/assets/icons/postgres-icon.svg";
import PrismaIcon from "@/assets/icons/prisma-icon.svg";
import TailwindIcon from "@/assets/icons/tailwind-icon.svg";
import HtmlIcon from "@/assets/icons/html-icon.svg";
import CssIcon from "@/assets/icons/css-icon.svg";
import CricketIcon from "@/assets/icons/cricket-icon.svg";
import FootballIcon from "@/assets/icons/ball-football-icon.svg";
import MusicIcon from "@/assets/icons/headphone-icon.svg";
import TravelIcon from "@/assets/icons/travelling-icon.svg";
import ChessIcon from "@/assets/icons/chess-pawn-icon.svg";
import ReadingIcon from "@/assets/icons/book-icon.svg";
import WritingIcon from "@/assets/icons/edit-document-icon.svg";

// ---------- HOBBIES ----------- //

export const MY_HOBBIES = [
  {
    hobby: "Football",
    icon: <FootballIcon className="size-4" />,
    top: "5%",
    left: "5%",
  },
  {
    hobby: "Cricket",
    icon: <CricketIcon className="size-4" />,
    top: "5%",
    left: "50%",
  },
  {
    hobby: "Chess",
    icon: <ChessIcon className="size-4" />,
    top: "35%",
    left: "10%",
  },
  {
    hobby: "Reading",
    icon: <ReadingIcon className="size-4" />,
    top: "40%",
    left: "35%",
  },
  {
    hobby: "Writing",
    icon: <WritingIcon className="size-4" />,
    top: "45%",
    left: "70%",
  },
  {
    hobby: "Travel",
    icon: <TravelIcon className="size-4" />,
    top: "65%",
    left: "5%",
  },
  {
    hobby: "Music",
    icon: <MusicIcon className="size-4" />,
    top: "45%",
    left: "70%",
  },
];

// -------  PORTFOLIO PROJECTS ------- //

export const PORTFOLIO_PROJECT = [
  {
    company: "QuizMaster",
    year: "Aug,2024 - Sep,2024",
    title: "A Platform to enhance your knowledge",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "ReactJS", icon: <ReactjsIcon /> },
      { tech: "NodeJS", icon: <NodejsIcon /> },
      { tech: "MongoDB", icon: <MongodbIcon /> },
    ],
    results: [
      {
        title:
          "Allows users to attempt quizzes with various categories and difficulty levels.",
      },
      {
        title: "Implemented JWT and bcrypt for safe login and data protection.",
      },
      {
        title:
          "Utilized React Hook Form and Zod for seamless form validation and error handling.",
      },
    ],
    link: "https://quizmaster-r62b.onrender.com",
    githubLink: "https://github.com/suvasis-patra/quiz-application",
    image: quizMasterLandingPage,
    slug: "projects/quiz-master",
  },
  {
    company: "NextHire",
    year: "Aug,2024- ONGING",
    title: "Job Posting and Application Platform",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "NextJS", icon: <NextjsIcon /> },
      { tech: "PostrgesSQL", icon: <PostgresIcon /> },
      { tech: "Prisma", icon: <PrismaIcon /> },
      { tech: "Tailwind CSS", icon: <TailwindIcon /> },
    ],

    results: [
      {
        title:
          "Integrated Stripe for secure payments, supporting premium job posts and subscriptions.",
      },
      {
        title:
          "Implemented job search by location, keywords, and filters for a personalized experience.",
      },
      {
        title:
          "Built with Next.js, Tailwind CSS, and React Hook Form for optimal performance and smooth forms.",
      },
    ],
    link: "https://nexthire-ghbkjgaqq-suvasis-projects-0f7f453b.vercel.app/",
    githubLink: "https://github.com/suvasis-patra/nexthire",
    image: nextHireLandingPage,
    slug: "projects/next-hire",
  },
  {
    company: "Where in the world",
    year: "Aug,2024",
    title: "Know the details about any contry",
    techStacks: [
      { tech: "TypeScript", icon: <TypescriptIcon /> },
      { tech: "ReactJS", icon: <ReactjsIcon /> },
      { tech: "Tailwind CSS", icon: <TailwindIcon /> },
    ],

    results: [
      {
        title:
          "Users can easily search countries by name and filter by language, currency, and continent.",
      },
      {
        title:
          "React Query and Axios ensure fast, optimized data fetching and caching for smooth performance.",
      },
      {
        title:
          "TypeScript boosts code reliability, making the app more maintainable and scalable.",
      },
    ],
    link: "https://astounding-toffee-63321f.netlify.app/",
    githubLink: "https://github.com/suvasis-patra/country_app",
    image: countryAppLandingPage,
    slug: "projects/where-in-the-world",
  },
];

// ------------- MY SKILLSET ----------- //

export const TOOLBOX = [
  {
    tool: "JavaScript",
    icon: <JavascriptIcon className="size-4 md:size-6" />,
  },
  {
    tool: "TypeScript",
    icon: <TypescriptIcon className="size-4 md:size-6" />,
  },
  {
    tool: "ReactJS",
    icon: <ReactjsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "NodeJS",
    icon: <NodejsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "ExpressJS",
    icon: <ExpressIcon className="size-4 md:size-6" />,
  },
  {
    tool: "NextJs",
    icon: <NextjsIcon className="size-4 md:size-6" />,
  },
  {
    tool: "MongoDB",
    icon: <MongodbIcon className="size-4 md:size-6" />,
  },
  {
    tool: "tailwind CSS",
    icon: <TailwindIcon className="size-4 md:size-6" />,
  },
  {
    tool: "PostgresSQL",
    icon: <PostgresIcon className="size-4 md:size-6" />,
  },
  {
    tool: "Prsima",
    icon: <PrismaIcon className="size-4 md:size-6" />,
  },
  {
    tool: "HTML5",
    icon: <HtmlIcon className="size-4 md:size-6" />,
  },
  {
    tool: "CSS3",
    icon: <CssIcon className="size-4 md:size-6" />,
  },
];

// ------------ PORTFOLIO PROJECTS DETAILS ------------- //

export const PORTFOLIO_PROJECT_DETAILS = [
  {
    projectName: "QuizMaster",
    slug: "quiz-master",
    description:
      "QuizMaster is a web app for creating and taking customizable quizzes. Users can design quizzes with various difficulty levels and categories, offering a streamlined and engaging experience for both learners and creators. Built with React and Node.js, QuizMaster combines modern technology with intuitive design.",
    features: [
      { title: "Create quizzes with various levels, categories, and tags." },
      {
        title:
          "Engaging and user-friendly interface for quiz creation and participation.",
      },
      {
        title: "Immediate feedback on quiz answers to enhance the experience.",
      },
      { title: "Efficient data management with React Hook Form." },
      { title: "Fully responsive layout for all devices." },
    ],
    techstack: [
      { tech: "ReactJS", icon: <ReactjsIcon className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "React router dom",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
      {
        tech: "React Query",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      { tech: "NodeJS", icon: <NodejsIcon className="size-4 md:size-6" /> },
      { tech: "ExpressJS", icon: <ExpressIcon className="size-4 md:size-6" /> },
      { tech: "MongoDB", icon: <MongodbIcon className="size-4 md:size-6" /> },
      { tech: "JWT", icon: <ReactjsIcon className="size-4 md:size-6" /> },
    ],
    images: [
      quizMasterLandingPage,
      quizMasterCategoryPage,
      quizMasterLatestQuizPage,
    ],
    futurePlans: [
      {
        title:
          "Use AI to assist in generating quizzes based on user input or predefined criteria.",
      },
      {
        title:
          "Allow users to create quizzes by uploading PDF documents, which are then processed to generate quiz questions.",
      },
      {
        title:
          "Integrate a payment gateway to purchase credits for accessing and playing quizzes.",
      },
    ],
    link: "https://quizmaster-r62b.onrender.com",
    githubLink: "https://github.com/suvasis-patra/quiz-application",
  },
  {
    projectName: "NextHire",
    slug: "next-hire",
    description:
      "NextHire is a job portal that allows users to post and apply for job listings. It offers a streamlined experience for employers to list job openings and for job seekers to find opportunities based on various filters. The platform includes features for secure payments and a tailored job-seeking experience.",
    features: [
      {
        title:
          "Employers can post job listings with detailed descriptions and requirements.",
      },
      {
        title:
          "Job seekers can search and filter jobs by location, keywords, and other criteria.",
      },
      {
        title:
          "Secure payment integration for premium job postings and subscription options.",
      },
      { title: "Responsive design for easy access on all devices." },
      {
        title:
          "User-friendly interface for seamless job posting and application processes.",
      },
    ],
    techstack: [
      { tech: "NextJS", icon: <NextjsIcon className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      { tech: "Stripe", icon: <ReactjsIcon className="size-4 md:size-6" /> },
      {
        tech: "PostgreSQL",
        icon: <PostgresIcon className="size-4 md:size-6" />,
      },
      { tech: "Prisma", icon: <PrismaIcon className="size-4 md:size-6" /> },
      { tech: "Next Auth", icon: <NextjsIcon className="size-4 md:size-6" /> },
    ],
    images: [
      nextHireLandingPage,
      nextHireBrowseJobPage,
      nextHireJobdetailsPage,
      nextHirePostJobPage,
    ],
    futurePlans: [
      {
        title:
          "Implement AI for matching job seekers with job listings based on their profiles and preferences.",
      },
      {
        title:
          "Enhance user experience with advanced search and filter options.",
      },
    ],
    link: "https://nexthire-ghbkjgaqq-suvasis-projects-0f7f453b.vercel.app/",
    githubLink: "https://github.com/suvasis-patra/nexthire",
  },
  {
    projectName: "Where in the World?",
    slug: "where-in-the-world",
    description:
      "Where in the World is an interactive web application that helps users explore and learn about various countries around the globe. It features a user-friendly interface for discovering country details, including location, population, and key facts, using a visually appealing map and search functionalities.",
    features: [
      { title: "Interactive world map to explore different countries." },
      { title: "Search functionality to find countries by name or criteria." },
      {
        title:
          "Detailed country profiles including population, capital, and other key facts.",
      },
      { title: "Responsive design for optimal viewing on various devices." },
      {
        title:
          "User-friendly interface with intuitive navigation and interactions.",
      },
    ],
    techstack: [
      { tech: "ReactJS", icon: <ReactjsIcon className="size-4 md:size-6" /> },
      {
        tech: "TypeScript",
        icon: <TypescriptIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Tailwind CSS",
        icon: <TailwindIcon className="size-4 md:size-6" />,
      },
      {
        tech: "React Router DOM",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
      {
        tech: "React Query",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
      {
        tech: "Rest Countries API",
        icon: <ReactjsIcon className="size-4 md:size-6" />,
      },
    ],
    images: [
      countryAppLandingPage,
      countryAppHoverState,
      coutnryAppDetailsPage,
    ],
    futurePlans: [
      {
        title:
          "Integrate additional data sources for more comprehensive country information.",
      },
      {
        title:
          "Enhance the map functionality with more interactive features and customization options.",
      },
    ],
    link: "https://astounding-toffee-63321f.netlify.app/",
    githubLink: "https://github.com/suvasis-patra/country_app",
  },
];

// ----------------  SOCIAL LINKS -------------- //

export const SOCIAL_LINKS = [
  { title: "Twitter", href: "https://x.com/Patra2Suvasis" },
  { title: "Linkedin", href: "https://www.linkedin.com/in/suvasispatra/" },
  { title: "Gmail", href: "mailto:suvasispatra10@gmail.com" },
  { title: "Instagram", href: "https://www.instagram.com/suvasisp5/" },
];

// ---------------- FEATUERS ----------------- //

export const WORDS = [
  "Accessable",
  "Reliable",
  "Optimized",
  "Searchable",
  "Secure",
  "User Friendly",
  "Interactive",
  "Scalable",
  "Maintainable",
  "Performant",
  "Usable",
];

// ------------- TESTIMONIALS -------------- //

export const TESTIMONIALS = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];
