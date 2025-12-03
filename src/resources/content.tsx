import React from "react";
import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Antony",
  lastName: "Naumovic",
  name: "Antony Naumovic",
  role: "UX and UI designer",
  avatar: "/images/avatar.jpg",
  email: "antonynaumovic@gmail.com",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location_friendly: "London",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/antonynaumovic",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/antonynaumovic/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Resume",
    icon: "resume",
    link: "/resume/Resume_AntonyNaumovic.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Human-centered design for games, apps, and interactive experiences</>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Leviathan</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/leviathan",
  },
  subline: (
    <>
      I&apos;m {person.firstName}, a {person.role} specialising in crafting
      intuitive, engaging digital interfaces. Welcome to my portfolio!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a {person.role} near London, UK with a strong background in design
        and a passion for creating user-centric digital experiences.
        {/* with
        a passion for transforming complex challenges into simple, elegant
        design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology. */}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Secret Waterfall",
        timeframe: "2020 - 2025",
        role: "Art Lead",
        achievements: [
          <>
            Directed art vision and UI/UX design for an ambitious live service
            multiplayer PvPvE extraction shooter within Unity.
          </>,
          <>
            Led a team of 8 artists, managing sprints and agile workflows, while
            providing mentorship and fostering a collaborative creative
            environment.
          </>,
          <>
            Engineered a component-driven UI Toolkit framework, streamlining
            development and future-proofing the interface.
          </>,

          <>
            Designed the UI base in Adobe XD, migrated designs into Figma, and
            authored team-wide design specifications.
          </>,
          <>
            Implemented the original UI in uGUI, later rebuilding the system in
            UI Toolkit for scalability.
          </>,
          <>
            Co-ran user testing sessions, iterating on feedback to refine
            usability and improve player experience.
          </>,
          <>
            Developed pipeline tools for art assets and animation integration,
            accelerating iteration cycles.
          </>,
        ],
      },
      {
        company: "Tipping Point Solutions",
        timeframe: "2023 - 6 Month Contract",
        role: "3D Technical Director",
        achievements: [
          <>
            Ran the technical direction for an online educational platform built
            in Unreal Engine 5, focusing on interactive 3D content delivery and
            accessibility.
          </>,
          <>
            Designed the UI and website from the ground up in Adobe XD, creating
            wireframes, HUD, and user flows for both website and in-game
            experiences.
          </>,
          <>
            Built a simple yet extensible UI, integrating features like
            note-taking and inventory systems to enhance ease of use for
            educators and students.
          </>,
          <>
            Designed the admin interface and safety tools (audit log, reporting,
            incident tracking) to support in-game safeguarding
          </>,
          <>
            Engineered the website in React, delivering all frontend work and a
            live admin panel.
          </>,
          <>
            Implemented a network-synced video wall/screen sharing system for
            teachers and students, enhancing collaborative learning
          </>,
          <>
            Ensured the game was optimized for pixel streaming servers,
            balancing performance with high-quality visuals
          </>,
          <>
            Created digital twins in MetaHuman, VFX, and advertisement animation
            assets
          </>,
        ],
        images: [],
      },
      {
        company: "Interactive Schools",
        timeframe: "2018 - 2020",
        role: "Design Intern",
        achievements: [
          <>
            Crafted eye-catching graphics and animations for bespoke school
            websites and social media.
          </>,
          <>
            Created tokenised Adobe XD templates to allow for quick design
            turnaround
          </>,
          <>
            Built reusable design assets and managed media through a CMS,
            streamlining content updates.
          </>,
          <>
            Partnered with the development team to create cohesive,
            user-friendly website experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Oxford Brookes University",
        description: <>BSc (Hons) Computer Science - First Class Honours</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma using token-based design systems.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Adobe XD",
        description: (
          <>Able to prototype in Adobe XD using token-based design systems.</>
        ),
        tags: [
          {
            name: "Adobe XD",
            icon: "adobexd",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "React",
        description: (
          <>
            Building scalable, reactive web applications with React, Next.js,
            and JavaScript
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          { name: "Next.js", icon: "nextjs" },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Unity",
        description: <></>,
        tags: [
          {
            name: "Unity",
            icon: "unity",
          },
          {
            name: "C#",
            icon: "csharp",
          },
        ],
        images: [],
      },
      {
        title: "Unreal Engine",
        description: <></>,
        tags: [
          {
            name: "Unreal Engine",
            icon: "unrealengine",
          },
          {
            name: "C++",
            icon: "cplusplus",
          },
          { name: "Blueprint", icon: "blueprint" },
        ],
        images: [],
      },
      {
        title: "3D",
        description: <></>,
        tags: [
          {
            name: "Blender",
            icon: "blender",
          },
          {
            name: "Substance Painter",
            icon: "substancepainter",
          },
          { name: "Substance Designer", icon: "substancedesigner" },
          { name: "Marvelous Designer", icon: "marvelousdesigner" },
          { name: "Marmoset Toolbag", icon: "marmosettoolbag" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about personal projects and tools",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    // {
    //   src: "/images/gallery/horizontal-1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-4.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-3.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-1.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-2.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-3.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
