import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

export const DATA = {
  name: "Rishi Parmar - Smartphone Market Research",
  initials: "RP",
  url: "https://your-domain.com",
  location: "Vadodara, Gujarat, India",
  locationLink: "https://www.google.com/maps/search/Vadodara,+Gujarat",
  description:
    "Independent smartphone market research by Rishi Parmar — exploring consumer demand, competitive dynamics, and product strategy.",
  summary:
    "I’m a Computer Science Engineering student building toward a career in **smartphone market research and product strategy**. My work explores how smartphone brands compete: from portfolio architecture and price positioning to model-level search demand and consumer preferences. I approach each project as independent research: make the question clear, show the evidence, state the limitations, and translate findings into practical implications for product teams. The views and analysis published here are my own.",
  avatarUrl: "/rishi-avatar.svg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Research point of view" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Research toolkit" },
    projects: {
      order: 5, enabled: true,
      label: "Selected work",
      heading: "Research that connects data to decisions",
      text: "Independent studies on smartphone demand, portfolio strategy, and consumer behaviour. Each project separates observed evidence from interpretation.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Milestones",
      heading: "Research milestones",
      text: "",
    },
    photos: { order: 6, enabled: false, heading: "Photos" },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Let's talk smartphones",
      text: "Interested in smartphone markets, consumer insights, or product strategy? I’m open to conversations, research opportunities, and analyst internships.",
    },
  },
  photos: [],
  skills: [
    { name: "Smartphone market research" },
    { name: "Competitive intelligence" },
    { name: "Consumer insights" },
    { name: "Google Search demand analysis" },
    { name: "Portfolio & price-band analysis" },
    { name: "Excel & data storytelling" },
    { name: "SQL — developing" },
    { name: "Python / pandas — developing" },
    { name: "Product positioning" },
    { name: "Research writing" },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Writing" },
  ],
  contact: {
    email: "YOUR_EMAIL_HERE",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/YOUR-HANDLE/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:01rishiparmar@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "University Marketing",
      href: "https://www.itm.ac.in/",
      badges: ["Marketing"],
      location: "Vadodara, Gujarat",
      title: "Marketing Intern",
      logoUrl: "",
      start: "2026",
      end: "Present",
      description:
        "Supported university marketing activities and worked with lead follow-up and conversion workflows. This experience helped me connect positioning, audience behaviour, and communication with real-world outcomes.",
    },
  ],
  education: [
    {
      school: "ITM Vocational University",
      href: "https://www.itm.ac.in/",
      degree: "Computer Science Engineering",
      logoUrl: "",
      start: "Undergraduate",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Samsung India: Mid-Range Portfolio Architecture",
      href: "/blog/samsung-india-portfolio-architecture",
      dates: "Independent research",
      active: true,
      description:
        "An independent analysis of overlapping smartphone lineups, channel positioning, price bands, and how clearer series roles could improve consumer choice. Focus: portfolio logic, not brand criticism.",
      technologies: ["Portfolio strategy", "SKU mapping", "Positioning", "India"],
      links: [],
      image: "/research-portfolio.svg",
      video: "",
    },
    {
      title: "Smartphone Search Demand, 2022–2026",
      href: "/blog/reading-smartphone-search-demand",
      dates: "Ongoing analysis",
      active: true,
      description:
        "A model-level study of Google Search interest across Samsung smartphone launches and lifecycle windows. Treats search as a demand signal—not a proxy for shipments or sales.",
      technologies: ["Google Trends", "Time-series analysis", "Launch cycles", "Samsung"],
      links: [],
      image: "/research-demand.svg",
      video: "",
    },
    {
      title: "Smartphone Consumer Preferences Survey",
      href: "/blog/smartphone-consumer-preferences",
      dates: "Primary research",
      active: true,
      description:
        "A survey-based look at brand preference, operating-system attitudes, price bands, and purchase priorities. The work explores what a small consumer sample can reveal—and what it cannot.",
      technologies: ["Consumer insights", "Survey analysis", "Brand trust", "Pricing"],
      links: [],
      image: "/research-consumer.svg",
      video: "",
    },
    {
      title: "From Market Data to Product Decisions",
      href: "/blog/from-market-data-to-product-decisions",
      dates: "Research framework",
      active: true,
      description:
        "A repeatable framework for moving from market observations to evidence-backed hypotheses, competitive implications, and actionable product recommendations.",
      technologies: ["Market intelligence", "Product strategy", "Research methods"],
      links: [],
      image: "/research-framework.svg",
      video: "",
    },
  ],
  hackathons: [],
};
