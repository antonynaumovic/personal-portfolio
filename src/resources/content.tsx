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
  role: "Technical Artist",
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
    name: "ArtStation",
    icon: "artstation",
    link: "https://www.artstation.com/antonynaumovic",
    essential: true,
  },
  {
    name: "CV",
    icon: "resume",
    link: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/CV/CV_AntonyNaumovic.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging the worlds of Art and Tech</>,
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
      I&apos;m {person.firstName}, a {person.role} crafting the pipelines and
      realtime systems that bring worlds to life.
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
        and a passion for creating tools and shaders.
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
            Directed art vision and technical art for an ambitious live service
            multiplayer PvPvE extraction shooter within Unity.
          </>,
          <>
            Led a team of 8 artists, managing sprints and agile workflows, while
            providing mentorship and fostering a collaborative creative
            environment.
          </>,
          <>
            Engineered custom shaders, lighting behaviours, and custom HDRP
            render passes to improve visual quality and runtime performance.
          </>,
          <>
            Built a component-driven UI Toolkit framework to streamline realtime
            interface development and reduce iteration time.
          </>,
          <>
            Developed pipeline tools for asset ingestion, environment workflows,
            and animation integration.
          </>,
          <>
            Established profiling workflows for GPU, CPU, and memory debugging
            across HDRP.
          </>,
          <>
            Developed pipeline tools for art assets and animation integration,
            accelerating iteration cycles.
          </>,
          <>
            Collaborated closely with engineering to maintain stable builds,
            efficient pipelines, and scalable content production.
          </>,
        ],
      },
      {
        company: "Conectado Inc.",
        timeframe: "2023 - 2025",
        role: "3D Technical Director",
        achievements: [
          <> Continuation of contract role from Tipping Point Solutions.</>,
        ],
        images: [],
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
            Engineered a mixed lighting pipeline combining baked coloured
            shadows with realtime dynamic shadows
          </>,
          <>
            Developed VFX, animation assets, and realtime shaders, maintaining
            consistency across the platform
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
            Optimised the entire experience for pixel streaming, balancing
            fidelity with strict performance constraints
          </>,
          <>
            Created digital twins in MetaHuman, VFX, and advertisement animation
            assets
          </>,
          <>
            Designed the admin interface and safety tools (audit log, reporting,
            incident tracking) to support in-game safeguarding
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
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Oxford Brookes University",
        description: <>BSc (Hons) Computer Science - First Class Honours</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
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
          { name: "Shader Graph", icon: "stack" },
          { name: "VFX Graph", icon: "vfxgraph" },
          { name: "Profiler", icon: "profiler" },
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
            name: "Blender Geometry Nodes",
            icon: "blender",
          },
          {
            name: "Substance Painter",
            icon: "substancepainter",
          },
          { name: "Substance Designer", icon: "substancedesigner" },
          { name: "Marvelous Designer", icon: "marvelousdesigner" },
          { name: "Marmoset Toolbag", icon: "marmosettoolbag" },
          { name: "Character Creator", icon: "charactercreator" },
        ],
        images: [],
      },
      {
        title: "Programming Languages",
        description: <></>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "C#", icon: "csharp" },
          { name: "C++", icon: "cplusplus" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Administrative Tools",
        description: (
          <>
            Experienced with project management and collaboration tools to
            streamline workflows.
          </>
        ),
        tags: [
          { name: "Jira", icon: "jira" },
          { name: "Confluence", icon: "confluence" },
        ],
        images: [],
      },
      {
        title: "Responsive Design & Prototyping",
        description: (
          <>
            Able to prototype in Figma and XD using token-based design systems.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Adobe XD",
            icon: "adobexd",
          },
        ],

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
        title: "Web",
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
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
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
  categoryPriority: ["Alien", "Adventurer's Museum", "DnD Sapphire Dragon", "Mecha'Thun", "Cassette Deck"],
  images: [
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/gallery/render-do-not-enter.jpg",
      alt: "Alien do not enter door",
      orientation: "horizontal",
      category: "Alien",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/gallery/render-crt-2.jpg",
      alt: "alien planet",
      orientation: "horizontal",
      category: "Alien",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/gallery/render-orbit-3.jpg",
      alt: "alien crt",
      orientation: "horizontal",
      category: "Alien",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/gallery/render-robud-1.jpg",
      alt: "alien robud",
      orientation: "horizontal",
      category: "Alien",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/cassette/cassette-render1.jpg",
      alt: "cassette deck",
      orientation: "horizontal",
      category: "Cassette Deck",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/cassette/cassette-rendercloseup.jpg",
      alt: "cassette deck closeup",
      orientation: "horizontal",
      category: "Cassette Deck",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/museum/xray-render6.jpg",
      alt: "museum xray render",
      orientation: "horizontal",
      category: "Adventurer's Museum",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/museum/xray-vertical.jpg",
      alt: "",
      orientation: "vertical",
      category: "Adventurer's Museum",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/museum/xray-render9.jpg",
      alt: "",
      orientation: "vertical",
      category: "Adventurer's Museum",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/museum/xray-render7.jpg",
      alt: "",
      orientation: "horizontal",
      category: "Adventurer's Museum",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/sapphiredragon/dragon-lookdev.jpg",
      alt: "WIP Lookdev render of the Sapphire Dragon model",
      orientation: "horizontal",
      category: "DnD Sapphire Dragon",
      caption: "WIP Lookdev render of the Sapphire Dragon model",
    },
    {
      src: "https://fk8c5b0nfso0dhzm.public.blob.vercel-storage.com/projects/mechathun/mechathun-lookdev.jpg",
      alt: "WIP Lookdev render of the Mecha'Thun model",
      orientation: "horizontal",
      category: "Mecha'Thun",
      caption: "WIP Lookdev render of the Mecha'Thun model",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
