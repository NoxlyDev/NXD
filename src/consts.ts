import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "NoxlyDev",
  DESCRIPTION: "Welcome to NoxlyDev Studios, a game dev and web dev for designers and developers.",
  AUTHOR: "KilluaOWN",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "noxlydev@gmail.com",
    HREF: "mailto:noxlydev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "NoxlyDev",
    HREF: "https://github.com/NoxlyDev"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "NoxlyDev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "NoxlyDev",
    HREF: "https://twitter.com/NoxlyDev",
  },
]

