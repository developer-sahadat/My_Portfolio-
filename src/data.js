//  icons
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.png";
import Project6 from "./assets/img/projects/p6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/mongodb.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/t1.jpg";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/t3.jpg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/developer-sahadat/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/developershahadat/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/developer-sahadat",
  },
  {
    icon: <FiMail />,
    href: "web.shahadat.hossain@gmail.com",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Doctorio",
    category: "UI/UX design",
    gHref: "https://github.com/developer-sahadat/doctorio_full_stack_project",
    lHref: "https://doctorio-a6a0c.web.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Construction Tools",
    category: "web development",
    gHref: "https://github.com/developer-sahadat/construction-tools",
    lHref: "https://construction-tools-ea0f5.firebaseapp.com/",
  },
  {
    id: "3",
    image: Project3,
    name: "Apple Stock",
    category: "UI/UX design",
    gHref: "https://github.com/developer-sahadat/apple_stock",
    lHref: "https://phonesy-ad56a.web.app/",
  },
  {
    id: "4",
    image: Project4,
    name: "Writerfly",
    category: "branding",
    gHref:
      "https://github.com/developer-sahadat/writerfly-in-firebase-and-ReactJs",
    lHref: "https://writerfly-e4e13.web.app/",
  },
  {
    id: "5",
    image: Project5,
    name: "Red Onion",
    category: "web development",
    gHref:
      "https://github.com/developer-sahadat/Red-Onion-foods-reactJS-Firebase",
    lHref: "https://red-onion-9a291.web.app/",
  },
  {
    id: "6",
    image: Project6,
    name: "Portfolio",
    category: "web development",
    gHref: "https://github.com/developer-sahadat/assignment-1",
    lHref: "https://developer-sahadat.github.io/assignment-1/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Font End Development",
    description:
      "I build websites in such a way that the user comes to the website and understands everything and I code in such a way that any unique developer can see and understand.",
  },
  {
    icon: <FiSettings />,
    name: " Technology do I use",
    description:
      "I use technology that can load the website quickly, I use React js, Vue js, tailwind, Firebase,  node js, JavaScript, etc Technology. I try to use things that are updated",
  },
  {
    icon: <FiPenTool />,
    name: "Benefits",
    description:
      "I'm with a developer team. So my experience is how to work with a team I can merge with a new team or a new company all too soon. I try to stay updated all the time. I finish all the work one time.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "I already have an idea about digital marketing, so I know how important SEO is for a company.So I try to code in such a way that this website gets ranked very quickly",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "My name is Shahadat I am a web developer.  I have been doing web development for 2 year",
    authorName: "Shahadat Hosssain",
    authorPosition: "Developer Build, Team Member",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "My name is Sanjida I am a Mern Stack Developer.  I have been doing web development for 1 year",
    authorName: "Sanjida Aktar",
    authorPosition: "Developer Build, Team Member",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "My name is Foysal I am a Font Developer.  I have been doing web development for 1 year",
    authorName: "Foysaal ",
    authorPosition: "Developer Build, Team Member",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: " web.shahadat.hossain@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Savar, Dhaka-1344, Bangladesh",
    description: "Serving clients worldwide",
  },
];
