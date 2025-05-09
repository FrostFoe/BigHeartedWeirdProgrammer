const SITE = {
  title: "Astro News",
  description: "A news website built with Astro",
  author: "Mohammad Rahmani",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4
};
const NAVIGATION_LINKS = [
  {
    href: "/categories/technology",
    text: "Technology"
  },
  {
    href: "/categories/programming",
    text: "Programming"
  },
  {
    href: "/categories/lifestyle",
    text: "Lifestyle"
  },
  {
    href: "/categories/productivity",
    text: "Productivity"
  },
  {
    href: "/categories/health",
    text: "Health"
  },
  {
    href: "/categories/finance",
    text: "Finance"
  }
];
const OTHER_LINKS = [
  {
    href: "/about",
    text: "About us"
  },
  {
    href: "/authors",
    text: "Authors"
  },
  {
    href: "/contact",
    text: "Contact"
  },
  {
    href: "/privacy",
    text: "Privacy"
  },
  {
    href: "/terms",
    text: "Terms"
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy"
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS"
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Sitemap"
  }
];
const SOCIAL_LINKS = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github"
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram"
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter"
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook"
  }
];

export { NAVIGATION_LINKS as N, OTHER_LINKS as O, SITE as S, SOCIAL_LINKS as a };
