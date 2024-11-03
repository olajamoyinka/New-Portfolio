import digiCosmetics from './assets/digiCosmetics.png';
import portfolio from './assets/portfolio.png';
import appleStore from './assets/appleStore.png';
import golsam from './assets/golsam.png';
import CSEAN from './assets/Image/CSEAN.png';
import GAPHUB from './assets/Image/gaphub.png';
import calculator from './assets/Image/calculator.png';
import renewable from './assets/Image/renewable.png';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const service = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Custom Development',
    description:
      'I can develop custom websites using the latest frontend technologies, such as React.js and JavaScript, to create fast and dynamic websites.',
  },
  {
    id: 2,
    name: 'User Experience',
    title: 'User Experience Design',
    description:
      'I can design user experiences that are intuitive, easy to use, and visually appealing.',
  },
  {
    id: 3,
    name: 'Web Optimization',
    title: 'Speed Optimization',
    description:
      ' I can optimize speed and performance of your website, so it loads quickly and efficiently, which can improve search engine rankings.',
  },
  // {
  //   id: 4,
  //   name: 'Web Responsiveness',
  //   title: 'Maintenance and Support',
  //   description:
  //     'I can provide ongoing maintenance and support for your website, including bug fixes, security updates, and content updates, so you can focus on growing your business.',
  // },
  // {
  //   id: 5,
  //   name: 'Interactive Effects',
  //   title: 'Animations and Effects',
  //   description:
  //     'Animations and interactive effects can make your website more engaging and memorable. I can create custom animations and effects using CSS, framer-motion and three.js to bring your website to life.',
  // },
];

export const skill = [
  {
    id: 1,
    name: 'HTML',
    percentage: 99,
    description:
      'Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 90,
    description:
      'JavaScript is a scripting language used for creating dynamic web pages and web applications.',
  },

  {
    id: 3,
    name: 'React.js',
    percentage: 85,
    description:
      'A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.',
  },

  // {
  //   id: 4,
  //   name: 'Next.js',
  //   percentage: 75,
  //   description:
  //     'Next.js is a React-based framework for building server-side rendered and statically generated web applications.',
  // },

  // {
  //   id: 5,
  //   name: 'TypeScript',
  //   percentage: 75,
  //   description:
  //     'TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.',
  // },

  {
    id: 6,
    name: 'Tailwind CSS',
    percentage: 80,
    description:
      'Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.',
  },

  {
    id: 7,
    name: 'Git',
    percentage: 80,
    description:
      'Git is a widely used version control system that is essential for collaborative development and project management. ',
  },

  // {
  //   id: 8,
  //   name: 'Webpack',
  //   percentage: 50,
  //   description:
  //     'Webpack is a module bundler for modern JavaScript applications. It bundles assets, modules, and dependencies into a single file.',
  // },

  // {
  //   id: 9,
  //   name: 'GraphQL',
  //   percentage: 80,
  //   description:
  //     'GraphQL is a query language for APIs that provides a more efficient, powerful and flexible alternative to RESTful APIs.',
  // },

  // {
  //   id: 10,
  //   name: 'RESTful API',
  //   percentage: 90,
  //   description:
  //     'RESTful API is an interface that two computer systems use to exchange information securely over the internet.',
  // },

  // {
  //   id: 11,
  //   name: 'Sass',
  //   percentage: 75,
  //   description:
  //     'Sass is a CSS preprocessor that allows developers to write CSS in a more concise and structured way.',
  // },

  {
    id: 12,
    name: 'Bootstrap',
    percentage: 85,
    description:
      'Bootstrap is a popular CSS framework that provides developers with a set of pre-built UI components.',
  },

  // {
  //   id: 13,
  //   name: 'Redux',
  //   percentage: 80,
  //   description:
  //     'Redux is a predictable state container for JavaScript apps, used to manage the state of complex applications.',
  // },

  // {
  //   id: 14,
  //   name: 'Zustand',
  //   percentage: 85,
  //   description:
  //     'Zustand is a small, fast and scalable status management solution. Its state management is centralized and action-based.',
  // },

  // {
  //   id: 15,
  //   name: 'Jest & Cypress',
  //   percentage: 45,
  //   description:
  //     'Jest and Cypress are JavaScript-based testing framework designed to ensure correctness of any JavaScript codebase.',
  // },
];

export const project = [
  {
    id: 1,
    img: GAPHUB,
    category: 'Landing',
    title: 'GAPHUB',
    description:
      'GapHub property is a real estate website, GAP PropertyHub is not just a property listing website, it is the investor’s toolkit for planning how to build a profitable asset portfolio.',
    url: 'https://gappropertyhub.com/',
  },

  {
    id: 2,
    img: renewable,
    category: 'Portfolio',
    title: ' SOLARPADI E-Commerce',
    description:
      'This website is provide where to get all the needed equipment for renewable energies like solar pane;, batteries and all.',
    url: 'https://renewable.dayusgroup.com',
  },

  {
    id: 3,
    img: CSEAN,
    category: 'Blog',
    title: 'CSEAN',
    description:
    'This website is developed for the Cyber Security Experts Association Of Nigeria. ',
    url: 'https://members.csean.org.ng/',
  },

  {
    id: 4,
    img: calculator,
    category: 'Ecommerce',
    title: 'SOLARPADI CALCULATOR',
    description:
      'SOLARPADI CALCULATOR is a website that helps calculate the total energy used in an apartment and the energy needed to power it so as to provide the most suitable solar panel and battery.',
    url: 'https://renewable.dayusgroup.com/calculator',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Kwara state Polytechnic',
    subtitle: 'HND. in Engineering',
    date: '2019 - 2021',
    description:
      'Higher National Diploma in Electrical and Electronics Engineering, particularly Electronics/Telecommunication.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Kwara state Polytechnic',
    subtitle: 'ND in Engineering',
    date: '2016 - 2018',
    description:
      'National Diploma in Electrical and Electronics Engineering.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Marian Academy',
    subtitle: 'Secondary School',
    date: '2008 - 2014',
    description:
      'Secondary school education and school certificate.',
    category: 'education',
  },

  // {
  //   id: 4,
  //   title: 'Coming Soon...',
  //   subtitle: 'Coming Soon...',
  //   date: '0000 - 0000',
  //   description:
  //     'Coming Soon...',
  //   category: 'education',
  // },

  {
    id: 5,
    title: 'Frontend Development (Intership)',
    subtitle: 'DVEARSE TECH',
    date: '2023 - PRESENT',
    description:
      'As a frontend developer, I am responsible for developing the frontend of a website from scratch, which involved creating an intuitive and visually engaging user interface. My responsibilities included designing and implementing responsive layouts, optimizing website performance, and ensuring cross-browser compatibility.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'IT OPERATOR (NYSC) ',
    subtitle: 'Lagos Island Local Governmeent',
    date: '2022 - 2023',
    description:
      'As the IT lead, my main task is to operate and monitor computer equipment and peripheral devices, maintaining and troubleshooting an operating system, and documenting operational problems.',
    category: 'experience',
  },

  {
    id: 7,
    title: 'Technician / Computer Engineer (Industrial Trainee)',
    subtitle: 'Habtech Computer Software',
    date: '2018 - 2019',
    description:
      'As a computer Engineer/ Technician, I format, erase, and update computers, laptops and mobile phones, also repair of the computer and laptops and impact knowledge to students.',
    category: 'experience',
  },
  
  {
    id: 8,
    title: 'Technician / Computer Engineer',
    subtitle: 'Toomuch Technology',
    date: '2014-2016, 2021 - 2022',
    description:
      'As a computer Engineer/ Technician, I format, erase, and update computers, laptops and mobile phones, also repair of the computer and laptops and impact knowledge to students.',
    category: 'experience',
  },

];

export const testimonial = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Coming Soon...',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Coming Soon...',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Coming Soon...',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Coming Soon...',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Coming Soon...',
  },
];

export const post = [
  {
    id: 1,
    date: 'October 31, 2022',
    imgURL:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png',
    title: 'Introduction to React Hooks',
    description:
      'Learn how to use React Hooks to simplify state management and improve performance in your frontend applications.',
  },
  {
    id: 2,
    date: 'November 19, 2022',
    imgURL: 'https://softagency.in/wp-content/uploads/2023/02/vuejsfeat.jpg',
    title: 'Getting Started with Vue.js',
    description:
      'Explore the basics of Vue.js, a progressive JavaScript framework for building user interfaces.',
  },
  {
    id: 3,
    date: 'April 12, 2022',
    imgURL:
      'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qF8LfAwUhl57g9T0BVvVdg.jpeg',
    title: 'Best Practices for Responsive Web Design',
    description:
      'Discover the key principles and techniques for creating responsive web designs that look great on any device.',
  },
  {
    id: 4,
    date: 'March 5, 2022',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--CHCog3Bn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/3200/1%2AtiS4RzayAJdIeTEkNL1ztw.png',
    title: 'Mastering CSS Flexbox',
    description:
      'Get up to speed with CSS Flexbox, a powerful layout tool for building modern, flexible, and responsive web designs.',
  },
  {
    id: 5,
    date: 'June 25, 2022',
    imgURL:
      'https://silktide.com/app/uploads/2021/05/We-analyzed-6554-websites-1024x576.jpg',
    title: 'Creating Accessible Web Content',
    description:
      'Learn how to make your web content more accessible to users with disabilities, including tips for designing for screen readers and other assistive technologies.',
  },
  {
    id: 6,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OyXMz4TaaY4FJOg00N6c7zsYKuqAAA8VUA&usqp=CAU',
    title: '10 Tips for Writing Clean Code in JavaScript',
    description:
      'Discover best practices for writing clean, maintainable, and efficient JavaScript code that will help you become a better developer.',
  },
  {
    id: 7,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lU_0yLYzO5o9oKAeShqM-8y_s1BWudtcyQ&usqp=CAU',
    title: 'The Future of Frontend Development: What to Expect in 2022',
    description:
      'Explore the latest trends and technologies in frontend development.',
  },
  {
    id: 8,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuqChNWRh2a5AbtgPZYPnAogzqDsBQ-dAg&usqp=CAU',
    title: '10 Essential Tools for Every Frontend Developer',
    description:
      'Check out our list of must-have tools for frontend developers, from code editors.',
  },
  {
    id: 9,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpPs_cWDHKLvC45gy0btz4sNfD9LOArjcdA&usqp=CAU',
    title: 'Mastering the Fundamentals of Web Development',
    description:
      'Learn the basics of web development, including HTML, CSS, and JavaScript, and start building your own web applications from scratch.',
  },
  {
    id: 10,
    date: 'November 19, 2022',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KXJ50sZkMTcGcKBRpGj3Vnwz8g6iTnqKSQ&usqp=CAU',
    title: 'Creating Beautiful and Responsive UI Designs with CSS Grid',
    description:
      'Get up to speed with CSS Grid, a powerful layout tool for creating complex and responsive user interfaces that adapt to any screen size.',
  },
];
