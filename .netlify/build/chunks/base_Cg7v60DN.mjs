import { b as createAstro, c as createComponent, e as addAttribute, g as renderScript, a as renderTemplate, d as renderComponent, p as renderHead, F as Fragment, m as maybeRenderHead, r as renderSlot } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { S as SITE, N as NAVIGATION_LINKS, O as OTHER_LINKS, a as SOCIAL_LINKS } from './index_CtAh2QRB.mjs';
/* empty css                          */
import 'clsx';
import { r as renderEntry } from './_astro_content_vWAZpvmf.mjs';
import { a as authorsHandler } from './authors_BXc97tMw.mjs';
import { format, parseISO, formatDistanceToNow } from 'date-fns';

const $$Astro$e = createAstro("https://astro-news-six.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/workspaces/FrostFoe/astro-news/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/FrostFoe/astro-news/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$d = createAstro("https://astro-news-six.vercel.app");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Head;
  const { meta } = Astro2.props;
  const isArticleMeta = (props) => props.type === "article";
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href;
  const OGImage = new URL(meta.ogImage, Astro2.url).href;
  return renderTemplate`<head><!-- Global Metadata --><meta${addAttribute(SITE.charset, "charset")}><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Favicons --><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="Astro News"><link rel="manifest" href="/site.webmanifest"><!-- RSS & Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE.title, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Page Metadata --><title>${meta.title}</title><meta name="title"${addAttribute(meta.metaTitle, "content")}><meta name="description"${addAttribute(meta.description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(meta.type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(meta.metaTitle, "content")}><meta property="og:description"${addAttribute(meta.description, "content")}><meta property="og:image"${addAttribute(OGImage, "content")}><meta property="og:image:alt"${addAttribute(meta.ogImageAlt, "content")}><!-- Twitter --><meta property="twitter:site"${addAttribute(Astro2.site, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(meta.metaTitle, "content")}><meta property="twitter:description"${addAttribute(meta.description, "content")}><meta property="twitter:image"${addAttribute(OGImage, "content")}><meta property="twitter:image:alt"${addAttribute(meta.ogImageAlt, "content")}>${isArticleMeta(meta) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(new Date(meta.publishedTime).toISOString(), "content")}><meta property="article:modified_time"${addAttribute(new Date(meta.lastModified).toISOString(), "content")}>${meta.authors.map((author) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<meta property="author"${addAttribute(author.name, "content")}><meta property="article:author"${addAttribute(`${Astro2.site}authors/${author.link}`, "content")}>` })}`)}` })}` : null}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head>`;
}, "/workspaces/FrostFoe/astro-news/src/components/bases/head.astro", void 0);

const $$Astro$c = createAstro("https://astro-news-six.vercel.app");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Github;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/github.astro", void 0);

const $$Astro$b = createAstro("https://astro-news-six.vercel.app");
const $$Search01 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Search01;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M17.5 17.5L22 22" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/search-01.astro", void 0);

const $$Astro$a = createAstro("https://astro-news-six.vercel.app");
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Menu;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")} fill="none" viewBox="0 0 24 24"${addAttribute(color, "stroke")}> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(strokeWidth, "stroke-width")} d="M4 6h16M4 12h16M4 18h7"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/menu.astro", void 0);

const $$MenuDropdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dropdown"> <button tabindex="0" role="button" class="btn btn-ghost btn-circle" aria-label="Menu"> ${renderComponent($$result, "Menu", $$Menu, {})} </button> <ul tabindex="0" class="menu dropdown-content z-50 bg-base-100 rounded-box w-56 shadow"> <li><a href="/" aria-label="Homepage">Home</a></li> <li><a href="/articles" aria-label="Articles Page">Articles</a></li> <li> <details> <summary>Categories</summary> <ul> ${NAVIGATION_LINKS.map(({ href, text, target }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute(target ?? "_self", "target")}${addAttribute(text, "aria-label")}> ${text} </a> </li>`)} </ul> </details> </li> <li> <details> <summary>Other Pages</summary> <ul> ${OTHER_LINKS.map(({ href, text, target }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute(target ?? "_self", "target")}${addAttribute(text, "aria-label")}> ${text} </a> </li>`)} </ul> </details> </li> </ul> </div>`;
}, "/workspaces/FrostFoe/astro-news/src/components/elements/menu-dropdown.astro", void 0);

const $$Astro$9 = createAstro("https://astro-news-six.vercel.app");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Moon;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="swap-on h-6 w-6" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"${addAttribute(color, "stroke")}${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/moon.astro", void 0);

const $$Astro$8 = createAstro("https://astro-news-six.vercel.app");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Sun;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none" class="swap-off w-6 h-6"> <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/sun.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeController = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<label class="btn btn-ghost btn-circle swap swap-rotate" for="theme-controller"> <input type="checkbox" class="theme-controller" value="dark" name="theme-controller" id="theme-controller"> ', " ", ' <span class="sr-only">Toggle theme</span> </label> <script>\n  // Function to apply the initial theme and set the checkbox state\n  function applyTheme() {\n    const theme = localStorage.getItem("astro-theme") || "light"; // Default to light theme\n    const themeController = document.querySelector(".theme-controller");\n\n    // Update the checkbox state and apply the theme\n    if (theme === "dark") {\n      themeController.checked = true;\n      document.documentElement.setAttribute("data-theme", "dark");\n    } else {\n      themeController.checked = false;\n      document.documentElement.setAttribute("data-theme", "light");\n    }\n  }\n\n  // Add event listener to toggle theme when the checkbox is clicked\n  function handleThemeToggle(event) {\n    const isDark = event.target.checked;\n    const newTheme = isDark ? "dark" : "light";\n    localStorage.setItem("astro-theme", newTheme);\n    document.documentElement.setAttribute("data-theme", newTheme);\n  }\n\n  document.addEventListener("astro:page-load", () => {\n    applyTheme();\n    const themeController = document.querySelector(".theme-controller");\n    themeController.addEventListener("change", handleThemeToggle);\n  });\n\n  // Apply theme immediately on script execution\n  applyTheme();\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Sun", $$Sun, {}), renderComponent($$result, "Moon", $$Moon, {}));
}, "/workspaces/FrostFoe/astro-news/src/components/bases/theme-controller.astro", void 0);

const $$TopHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar border-b border-primary-content/80 dark:border-primary-content/20"> <div class="navbar-start lg:w-1/2"> ${renderComponent($$result, "MenuDropdown", $$MenuDropdown, {})} <a class="text-xl px-2 text-nowrap lg:hidden" href="/">${SITE.title}</a> </div> <div class="navbar-center hidden lg:flex"> <a class="text-xl px-2" href="/">${SITE.title}</a> </div> <div class="navbar-end"> ${renderComponent($$result, "ThemeController", $$ThemeController, {})} <a class="btn btn-ghost btn-circle" href="/search" aria-label="Search"> ${renderComponent($$result, "Search01", $$Search01, {})} </a> <a class="btn btn-ghost btn-circle"${addAttribute(SITE.github, "href")} target="_blank" aria-label="GitHub"> ${renderComponent($$result, "Github", $$Github, {})} </a> </div> </div>`;
}, "/workspaces/FrostFoe/astro-news/src/components/elements/top-header.astro", void 0);

const $$Astro$7 = createAstro("https://astro-news-six.vercel.app");
const $$NavbarItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavbarItem;
  const currentPath = Astro2.url.pathname;
  const { item } = Astro2.props;
  function isActive(item2, currentPath2) {
    const segment = currentPath2.split("/")[2];
    return item2.text === "Home" && currentPath2 === "/" || item2.text === "Articles" && segment !== void 0 && !Number.isNaN(Number(segment)) && Number(segment) >= 1 || item2.text !== "Articles" && currentPath2.split("/").includes(item2.text.toLocaleLowerCase());
  }
  function formatHref(href) {
    return href === "/" ? "/" : `${href}/1`;
  }
  return renderTemplate`${maybeRenderHead()}<li${addAttribute([
    "relative after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:transition-all after:duration-300",
    isActive(item, currentPath) ? "after:bg-base-content pointer-events-none" : "after:bg-transparent"
  ], "class:list")}> <a${addAttribute(formatHref(item.href), "href")}${addAttribute(item.text, "aria-label")}>${item.text}</a> </li>`;
}, "/workspaces/FrostFoe/astro-news/src/components/bases/navbar-item.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar-center hidden lg:flex container"> <ul class="menu menu-sm menu-horizontal px-1 mx-auto"> ${renderComponent($$result, "NavbarItem", $$NavbarItem, { "item": { href: "/", text: "Home" } })} ${renderComponent($$result, "NavbarItem", $$NavbarItem, { "item": { href: "/articles", text: "Articles" } })} ${NAVIGATION_LINKS.map((item) => renderTemplate`${renderComponent($$result, "NavbarItem", $$NavbarItem, { "item": item })}`)} </ul> </nav>`;
}, "/workspaces/FrostFoe/astro-news/src/components/elements/navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-primary-content/80 dark:border-primary-content/20"> ${renderComponent($$result, "TopHeader", $$TopHeader, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/workspaces/FrostFoe/astro-news/src/components/shared/header.astro", void 0);

const $$Astro$6 = createAstro("https://astro-news-six.vercel.app");
const $$Hashtag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hashtag;
  const { width = "20", height = "20", size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"> <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/hashtag.astro", void 0);

const $$Astro$5 = createAstro("https://astro-news-six.vercel.app");
const $$NewTwitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NewTwitter;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/new-twitter.astro", void 0);

const $$Astro$4 = createAstro("https://astro-news-six.vercel.app");
const $$Telegram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Telegram;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409"${addAttribute(color, "stroke")}${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/telegram.astro", void 0);

const $$Astro$3 = createAstro("https://astro-news-six.vercel.app");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Facebook;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"${addAttribute(color, "stroke")}${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/facebook.astro", void 0);

const $$Astro$2 = createAstro("https://astro-news-six.vercel.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon } = Astro2.props;
  if (!icon) {
    throw new Error("Icon prop is required");
  }
  return renderTemplate`${icon === "github" && renderTemplate`${renderComponent($$result, "Github", $$Github, {})}`}${icon === "telegram" && renderTemplate`${renderComponent($$result, "Telegram", $$Telegram, {})}`}${icon === "newTwitter" && renderTemplate`${renderComponent($$result, "NewTwitter", $$NewTwitter, {})}`}${icon === "facebook" && renderTemplate`${renderComponent($$result, "Facebook", $$Facebook, {})}`}`;
}, "/workspaces/FrostFoe/astro-news/src/components/bases/icon.astro", void 0);

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer border-t border-primary-content/80 dark:border-primary-content/20 py-6"> <div class="container"> <div class="flex flex-col gap-4"> <aside class="flex items-center gap-2"> ${renderComponent($$result, "Hashtag", $$Hashtag, {})} <p> <strong class="text-lg">Astro News</strong> <br>
A news website built with <a class="underline" href="https://astro.build" target="_blank">Astro</a>.
</p> </aside> <nav class="flex flex-col gap-4 lg:flex-row lg:flex-wrap text-base lg:text-sm font-semibold"> <a href="/" class="link link-hover">Home</a> <a href="/articles" class="link link-hover">Articles</a> ${NAVIGATION_LINKS.map(({ href, text, target }) => renderTemplate`<a${addAttribute(href, "href")} class="link link-hover"${addAttribute(target ?? "_self", "target")}> ${text} </a>`)} </nav> </div> <div class="divider w-full h-1"></div> <div class="flex flex-col gap-4"> <nav> <div class="flex gap-4"> <p class="font-bold">Social Media:</p> <ul class="flex flex-wrap gap-4"> ${SOCIAL_LINKS.map(({ href, icon, text, target }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="link link-hover"${addAttribute(target ?? "_blank", "target")}${addAttribute(text, "title")}${addAttribute(text, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon })} </a> </li>`)} </ul> </div> </nav> <nav class="flex flex-wrap gap-4 text-xs mt-2"> ${OTHER_LINKS.map(({ href, text, target }) => renderTemplate`<a${addAttribute(href, "href")} class="link link-hover"${addAttribute(target ?? "_self", "target")}> ${text} </a>`)} </nav> </div> </div> </footer>`;
}, "/workspaces/FrostFoe/astro-news/src/components/shared/footer.astro", void 0);

const defaultImage = new Proxy({"src":"/_astro/default-image.Cmn-eKmv.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/FrostFoe/astro-news/src/assets/images/default-image.jpg";
							}
							
							return target[name];
						}
					});

const capitalizeFirstLetter = (val) => {
  if (!val || typeof val !== "string" || val.length === 0) {
    return val;
  }
  const str = String(val);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const FORMAT_LONG = "EEEE, MMMM d, yyyy h:mm a zz";
const FORMAT_SHORT = "MMMM dd, yyyy zz";
const dateCache = /* @__PURE__ */ new Map();
const getDateDistance = (date) => formatDistanceToNow(parseISO(date), {
  addSuffix: true
});
const normalizeDate = (date) => date instanceof Date ? date.toISOString() : date;
const getParsedDate = (dateString) => {
  if (dateCache.has(dateString)) {
    return dateCache.get(dateString);
  }
  const parsedDate = parseISO(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date value provided.");
  }
  dateCache.set(dateString, parsedDate);
  return parsedDate;
};
const formatDate = (date, formatType = "long") => {
  const dateString = date instanceof Date ? date.toISOString() : date;
  const parsedDate = getParsedDate(dateString);
  return format(
    parsedDate,
    formatType === "short" ? FORMAT_SHORT : FORMAT_LONG
  );
};

const renderCache = /* @__PURE__ */ new Map();
const getMeta = async (collection, category) => {
  try {
    const collectionId = `${collection.collection}-${collection.id}`;
    if (collection.collection === "articles") {
      if (renderCache.has(collectionId)) {
        return renderCache.get(collectionId);
      }
      const { remarkPluginFrontmatter } = await renderEntry(collection);
      const authors = authorsHandler.getAuthors(collection.data.authors);
      const meta = {
        title: `${capitalizeFirstLetter(collection.data.title)} - ${SITE.title}`,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: collection.data.cover.src,
        ogImageAlt: collection.data.covert_alt || collection.data.title,
        publishedTime: normalizeDate(collection.data.publishedTime),
        lastModified: remarkPluginFrontmatter.lastModified,
        authors: authors.map((author) => ({
          name: author.data.name,
          link: `${author.id}`
        })),
        type: "article"
      };
      renderCache.set(collectionId, meta);
      return meta;
    }
    if (collection.collection === "views") {
      const cacheKey = category ? `${collectionId}-${category}` : collectionId;
      if (renderCache.has(cacheKey)) {
        return renderCache.get(cacheKey);
      }
      const title = collection.id === "categories" && category ? `${capitalizeFirstLetter(category)} - ${SITE.title}` : collection.id === "home" ? SITE.title : `${capitalizeFirstLetter(collection.data.title)} - ${SITE.title}`;
      const meta = {
        title,
        metaTitle: capitalizeFirstLetter(collection.data.title),
        description: collection.data.description,
        ogImage: defaultImage.src,
        ogImageAlt: SITE.title,
        type: "website"
      };
      renderCache.set(cacheKey, meta);
      return meta;
    }
    throw new Error(
      `Invalid collection type: ${collection.collection}`
    );
  } catch (error) {
    console.error(`Error generating metadata for ${collection.id}:`, error);
    throw error;
  }
};

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { entry } = Astro2.props;
  const meta = await getMeta(entry);
  return renderTemplate`<html${addAttribute(SITE.locale, "lang")}${addAttribute(SITE.dir, "dir")}> ${renderComponent($$result, "Head", $$Head, { "meta": meta })}${maybeRenderHead()}<body class="flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/workspaces/FrostFoe/astro-news/src/layouts/base.astro", void 0);

export { $$Base as $, $$Facebook as a, formatDate as f, getDateDistance as g, normalizeDate as n };
