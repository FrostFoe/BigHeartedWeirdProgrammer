import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, d as renderComponent, F as Fragment } from '../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { r as renderEntry } from '../../chunks/_astro_content_vWAZpvmf.mjs';
import { a as $$Facebook, f as formatDate, n as normalizeDate, $ as $$Base } from '../../chunks/base_Cg7v60DN.mjs';
import { $ as $$Content } from '../../chunks/content_46pHvNEF.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$ResponsivePicture, $ as $$ResponsiveImage } from '../../chunks/_astro_assets_CN_SSaD9.mjs';
import 'clsx';
import { $ as $$Divider } from '../../chunks/divider_BvI1eFpo.mjs';
import { c as categoriesHandler } from '../../chunks/categories_C5I1yADU.mjs';
import { a as authorsHandler } from '../../chunks/authors_BXc97tMw.mjs';
/* empty css                                   */
import { a as articlesHandler } from '../../chunks/articles_BQkvpJjv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$a = createAstro("https://astro-news-six.vercel.app");
const $$ResourcesAdd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ResourcesAdd;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M2.5 6C2.5 4.45956 2.5 3.68934 2.84673 3.12353C3.04074 2.80693 3.30693 2.54074 3.62353 2.34673C4.18934 2 4.95956 2 6.5 2C8.04044 2 8.81066 2 9.37647 2.34673C9.69307 2.54074 9.95926 2.80693 10.1533 3.12353C10.5 3.68934 10.5 4.45956 10.5 6C10.5 7.54044 10.5 8.31066 10.1533 8.87647C9.95926 9.19307 9.69307 9.45926 9.37647 9.65327C8.81066 10 8.04044 10 6.5 10C4.95956 10 4.18934 10 3.62353 9.65327C3.30693 9.45926 3.04074 9.19307 2.84673 8.87647C2.5 8.31066 2.5 7.54044 2.5 6Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M3.78166 14.7817C4.82852 13.7348 5.35195 13.2114 5.9721 13.0625C6.3191 12.9792 6.6809 12.9792 7.0279 13.0625C7.64805 13.2114 8.17148 13.7348 9.21834 14.7817C10.2652 15.8285 10.7886 16.3519 10.9375 16.9721C11.0208 17.3191 11.0208 17.6809 10.9375 18.0279C10.7886 18.6481 10.2652 19.1715 9.21834 20.2183C8.17148 21.2652 7.64805 21.7886 7.02791 21.9375C6.6809 22.0208 6.3191 22.0208 5.9721 21.9375C5.35195 21.7886 4.82852 21.2652 3.78166 20.2183C2.7348 19.1715 2.21137 18.6481 2.06248 18.0279C1.97917 17.6809 1.97917 17.3191 2.06248 16.9721C2.21137 16.3519 2.7348 15.8285 3.78166 14.7817Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M18 2V10M22 6L14 6" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/resources-add.astro", void 0);

const $$Astro$9 = createAstro("https://astro-news-six.vercel.app");
const $$Time04 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Time04;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M9.5 9.5L12.9999 12.9996M16 8L11 13" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/time-04.astro", void 0);

const $$Astro$8 = createAstro("https://astro-news-six.vercel.app");
const $$Calendar04 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Calendar04;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M18 2V4M6 2V4" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 8H21" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/calendar-04.astro", void 0);

const $$Astro$7 = createAstro("https://astro-news-six.vercel.app");
const $$Clipboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Clipboard;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M7.99805 16H11.998M7.99805 11H15.998" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round"></path> <path d="M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/clipboard.astro", void 0);

const $$Astro$6 = createAstro("https://astro-news-six.vercel.app");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/linkedin.astro", void 0);

const $$Astro$5 = createAstro("https://astro-news-six.vercel.app");
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Twitter;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/twitter.astro", void 0);

const $$Astro$4 = createAstro("https://astro-news-six.vercel.app");
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linejoin="round"></path> <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")}></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/whatsapp.astro", void 0);

const $$Astro$3 = createAstro("https://astro-news-six.vercel.app");
const $$ShareItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShareItem;
  const { className, title, dataAwSocialShare, dataAwUrl, dataAwText, icon } = Astro2.props;
  const iconMap = {
    clipboard: $$Clipboard,
    facebook: $$Facebook,
    linkedin: $$Linkedin,
    twitter: $$Twitter,
    whatsapp: $$Whatsapp
  };
  const Icon = iconMap[icon];
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "slide active:scale-95 w-12 h-12 bg-base-200 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 cursor-pointer dark:hover:text-base-content hover:text-accent-content",
    ...className.split(" ")
  ], "class:list")}${addAttribute(title, "title")}${addAttribute(dataAwSocialShare, "data-aw-social-share")}${addAttribute(dataAwUrl, "data-aw-url")}${addAttribute(dataAwText, "data-aw-text")} data-astro-cid-glasvoey> <span class="shareIcon" data-astro-cid-glasvoey> ${renderComponent($$result, "Icon", Icon, { "data-astro-cid-glasvoey": true })} </span> </button> `;
}, "/workspaces/FrostFoe/astro-news/src/components/bases/share-item.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Script = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  function attachEvent(selector, event, fn) {\n    const matches =\n      typeof selector === "string"\n        ? document.querySelectorAll(selector)\n        : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  window.onload = function () {\n    attachEvent("[data-aw-social-share]", "click", function (_, elem) {\n      const network = elem.getAttribute("data-aw-social-share");\n      const url = encodeURIComponent(elem.getAttribute("data-aw-url"));\n      const text = encodeURIComponent(elem.getAttribute("data-aw-text"));\n\n      let href;\n      switch (network) {\n        case "facebook":\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case "twitter":\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case "linkedin":\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case "whatsapp":\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case "clipboard":\n          navigator.clipboard\n            .writeText(decodeURIComponent(url))\n            .then(() => {\n              console.log("Text successfully copied to clipboard");\n            })\n            .catch((err) => {\n              console.error("Unable to copy text to clipboard", err);\n            });\n          return;\n\n        default:\n          return;\n      }\n      const newlink = document.createElement("a");\n      newlink.target = "_blank";\n      newlink.href = href;\n      newlink.click();\n    });\n  };\n<\/script>'], ['<script>\n  function attachEvent(selector, event, fn) {\n    const matches =\n      typeof selector === "string"\n        ? document.querySelectorAll(selector)\n        : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  window.onload = function () {\n    attachEvent("[data-aw-social-share]", "click", function (_, elem) {\n      const network = elem.getAttribute("data-aw-social-share");\n      const url = encodeURIComponent(elem.getAttribute("data-aw-url"));\n      const text = encodeURIComponent(elem.getAttribute("data-aw-text"));\n\n      let href;\n      switch (network) {\n        case "facebook":\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case "twitter":\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case "linkedin":\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case "whatsapp":\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case "clipboard":\n          navigator.clipboard\n            .writeText(decodeURIComponent(url))\n            .then(() => {\n              console.log("Text successfully copied to clipboard");\n            })\n            .catch((err) => {\n              console.error("Unable to copy text to clipboard", err);\n            });\n          return;\n\n        default:\n          return;\n      }\n      const newlink = document.createElement("a");\n      newlink.target = "_blank";\n      newlink.href = href;\n      newlink.click();\n    });\n  };\n<\/script>'])));
}, "/workspaces/FrostFoe/astro-news/src/components/bases/script.astro", void 0);

const $$Astro$2 = createAstro("https://astro-news-six.vercel.app");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Share;
  const { pathname } = Astro2.url;
  const { text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex gap-4">${renderComponent($$result2, "ShareItem", $$ShareItem, { "className": "hover:bg-primary hover:text-primary-content", "title": "Copy Link", "dataAwSocialShare": "clipboard", "dataAwUrl": `${"https://astro-news-six.vercel.app" + pathname}`, "dataAwText": text, "icon": "clipboard" })}${renderComponent($$result2, "ShareItem", $$ShareItem, { "className": "hover:bg-[#3b5998]  hover:text-primary-content", "title": "Facebook Share", "dataAwSocialShare": "facebook", "dataAwUrl": `${"https://astro-news-six.vercel.app" + pathname}`, "dataAwText": text, "icon": "facebook" })}${renderComponent($$result2, "ShareItem", $$ShareItem, { "className": "hover:bg-[#00acee]  hover:text-primary-content", "title": "Twitter Share", "dataAwSocialShare": "twitter", "dataAwUrl": `${"https://astro-news-six.vercel.app" + pathname}`, "dataAwText": text, "icon": "twitter" })}${renderComponent($$result2, "ShareItem", $$ShareItem, { "className": "hover:bg-[#0072b1]  hover:text-primary-content", "title": "LinkedIn Share", "dataAwSocialShare": "linkedin", "dataAwUrl": `${"https://astro-news-six.vercel.app" + pathname}`, "dataAwText": text, "icon": "linkedin" })}${renderComponent($$result2, "ShareItem", $$ShareItem, { "className": "hover:bg-[#008000]  hover:text-primary-content", "title": "WhatsApp Share", "dataAwSocialShare": "whatsapp", "dataAwUrl": `${"https://astro-news-six.vercel.app" + pathname}`, "dataAwText": text, "icon": "whatsapp" })}</div>${renderComponent($$result2, "ScriptShare", $$Script, {})}` })}`;
}, "/workspaces/FrostFoe/astro-news/src/components/elements/share.astro", void 0);

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$ArticleHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleHeader;
  const { article, readingTime } = Astro2.props;
  const category = categoriesHandler.oneCategory(article.data.category.id);
  const authors = authorsHandler.getAuthors(article.data.authors);
  return renderTemplate`${maybeRenderHead()}<section class="mb-8 flex flex-col lg:flex-col-reverse border-b border-b-base-300 lg:border-none pb-4 pt-0 lg:pt-6"> <div class="container px-0 max-w-5xl lg:mt-4 overflow-hidden aspect-[20/9] rounded-md"> ${renderComponent($$result, "Picture", $$ResponsivePicture, { "src": article.data.cover, "alt": "article", "layout": "full-width", "loading": "eager", "formats": ["avif", "webp"], "class": "w-full h-full object-center" })} </div> <div class="container my-4 max-w-5xl lg:hidden flex items-center gap-2"> ${renderComponent($$result, "ResourcesAdd", $$ResourcesAdd, { "size": "16" })} <a${addAttribute(`/categories/${category.data.path}`, "href")} class="a-01 font-semibold">${category.data.title}</a> </div> <div class="container max-w-5xl"> <h1 class="text-3xl lg:text-4xl font-bold text-left text-pretty"> ${article.data.title} </h1> <div class="flex flex-col gap-4 items-start mt-2 lg:mt-6 text-sm"> <div class="text-base-content/70 flex items-center gap-2"> <span class="hidden lg:flex items-center gap-1"> ${renderComponent($$result, "ResourcesAdd", $$ResourcesAdd, { "size": "15" })} <a${addAttribute(`/categories/${category.id}`, "href")} class="a-01 font-semibold">${category.data.title}</a> </span> ${renderComponent($$result, "Divider", $$Divider, { "responsive": true })} <span class="flex items-center gap-1"> ${renderComponent($$result, "Calendar04", $$Calendar04, { "size": "15" })} <time class="hidden lg:block"${addAttribute(normalizeDate(article.data.publishedTime), "datetime")}>${formatDate(normalizeDate(article.data.publishedTime), "long")}</time> <time class="block lg:hidden"${addAttribute(normalizeDate(article.data.publishedTime), "datetime")}>${formatDate(normalizeDate(article.data.publishedTime), "short")}</time> </span> ${renderComponent($$result, "Divider", $$Divider, {})} <span class="flex items-center gap-1"> ${renderComponent($$result, "Time04", $$Time04, { "size": "15" })} <span>${readingTime}</span> </span> </div> <!-- TODO: fix name, href, avatar of author --> <div class="w-full flex flex-wrap gap-2 items-center justify-between"> <div class="flex flex-wrap gap-4"> ${authors.map((author) => renderTemplate`<div class="flex items-center gap-2"> <a${addAttribute(`/authors/${author.id}`, "href")} class="flex items-center gap-2"> <div class="avatar"> <div class="w-8 rounded-full"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "src": author.data.avatar, "alt": "author", "width": 48, "height": 48, "loading": "eager", "format": "webp", "quality": 80 })} </div> </div> <span class="font-bold capitalize">${author.data.name}</span> </a> </div>`)} </div> ${renderComponent($$result, "Share", $$Share, { "text": article.data.title })} </div> </div> </div> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/articles/_components/article-header.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const getStaticPaths = async () => {
  const articles = articlesHandler.allArticles();
  return articles.map((article) => ({
    params: { id: article.id },
    props: { article }
  }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { article } = Astro2.props;
  const { Content, remarkPluginFrontmatter } = await renderEntry(article);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": article }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArticleHeader", $$ArticleHeader, { "article": article, "readingTime": remarkPluginFrontmatter.minutesRead })} ${renderComponent($$result2, "ContentLayout", $$Content, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/articles/[id].astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/articles/[id].astro";
const $$url = "/articles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
