import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },{
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    }
];

export const experiences = [
    {
        title: "LSTM model for Indian sign language recognition",
        icon: summiz,
        iconBg: "#accbe1",
        points: [
            "Orchestrated a LSTM and Computer Vision–based sign language recognition system, achieving 91.50% accuracy",
            "Processed and analysed a dataset of 200K samples from 8 subjects to enhance model robustness.",
            "Optimised system efficiency for real-time inference and scalability.",
            "Impact: Achieved 91.50% accuracy with an AI-powered LSTM-based sign language recognition system to enhance accessibility and real-time communication.",
        ],
    },
    {
        title: "MERN Stack Admin Dashboard",
        icon: estate,
        iconBg: "#fbc3bc",
        points: [
            "Designed a responsive dashboard using Material UI,Nivo Charts to visualize sales, inventory, and user metrics",
            "Implemented Redux Toolkit, reducing API calls by 30% through optimized caching and state management.",
            "Optimized a scalable backend with Node.js/Express.js (12+ REST APIs)",
            "Boosted MongoDB performance by 25% using Mongoose indexing.",
            "Secured system with JWT authentication, blocking 100 unauthorized access attempts during testing.",
            "Impact: Streamlined data analysis, reducing report generation time from hours to minutes.",
        ],
    },
    {
        title: " Full Stack E-Commerce Website",
        icon: shopify,
        iconBg: "#b7e4c7",
        points: [
            "Built an interactive admin interface for sales analytics, inventory control, and customer data visualization.",
            "Streamlined frontend state management with Redux Toolkit, cutting redundant API calls by 35%.",
            "Developed a robust backend with 15+ RESTful endpoints using JWT authentication for protected data access.",
            "Boosted database efficiency by 20% through Mongoose query optimization, reducing response times significantly.",
            "Impact: Automated reporting processes, slashing operational time from 2 hours to <15 minutes.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '8638239608',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sandeepanchakraborty',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sandeepan-chakraborty/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'TaskMaster-A-Collaborative-Task-Tracking-System',
        description: 'TaskMaster is a powerful team-based task and project management tool designed for modern workspaces. ',
        link: 'https://github.com/sandeepanchakraborty/TaskMaster-A-Collaborative-Task-Tracking-System',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'MERN Stack Admin Dashboard',
        description: 'Created a full-stack admin dashboard for managing user data, sales analytics, and inventory control using the MERN stack.',
        link: 'https://github.com/sandeepanchakraborty/Mern-Stack-Admin-Dashboard-Panel',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'LSTM model for Indian sign language recognition',
        description: 'Developed an AI-powered LSTM model to recognize and translate Indian sign language gestures into text, enhancing communication accessibility.',
        link: 'https://github.com/sandeepanchakraborty/Sign-Language-Recognition-using-LSTM-model',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Backend-System-for-a-Virtual-Event-Management-Platform',
        description: 'Developed a backend system for a virtual event management platform, enabling seamless event creation, user registration, and real-time notifications.',
        link: 'https://github.com/sandeepanchakraborty/-Backend-System-for-a-Virtual-Event-Management-Platform',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Stocks-Trading-MERN',
        description: 'Developed a full-stack MERN application for real-time stock trading, featuring user authentication, live market data, and trade execution.',
        link: 'https://github.com/sandeepanchakraborty/Stocks-Trading-MERN',
    },
    
    {
        iconUrl: shopify,
        theme: 'btn-back-blue',
        name: 'Full Stack E-Commerce Website.',
        description: 'Designed and built a full-stack e-commerce website using the MERN stack, enabling users to browse products, manage their carts, and securely checkout.',
        link: '',
    },
];