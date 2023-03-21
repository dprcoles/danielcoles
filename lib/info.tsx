import { FaCode, FaEnvelope, FaGithub, FaLinkedinIn, FaSmileBeam, FaTwitter } from "react-icons/fa"

export const role = {
  title: "Software Engineer",
  company: {
    name: "The Body Shop",
    link: "https://www.thebodyshop.com",
  },
}

export const links = [
  {
    name: "About",
    link: "/",
    icon: <FaSmileBeam title="Get to know a bit about me" size="1.2rem" />,
    external: false,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <FaCode title="Check out some of the projects i've been working on" size="1.2rem" />,
    external: false,
  },
  {
    name: "GitHub",
    link: "https://github.com/dprcoles",
    icon: <FaGithub title="Check out my GitHub" size="1.2rem" />,
    external: true,
  },
  {
    name: "Email",
    link: "mailto:me@danielcoles.co.uk",
    icon: <FaEnvelope title="Get in touch by Email" size="1.2rem" />,
    external: true,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/danielcoles/",
    icon: <FaLinkedinIn title="Follow me on LinkedIn" size="1.2rem" />,
    external: true,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_danielcoles",
    icon: <FaTwitter title="Follow me on Twitter" size="1.2rem" />,
    external: true,
  },
]
