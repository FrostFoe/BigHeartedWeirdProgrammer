import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, d as renderComponent } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$ResponsiveImage } from './_astro_assets_CN_SSaD9.mjs';
import { g as getDateDistance, n as normalizeDate } from './base_Cg7v60DN.mjs';
import { $ as $$Divider } from './divider_BvI1eFpo.mjs';

const $$Astro$5 = createAstro("https://astro-news-six.vercel.app");
const $$ArrowLeftDouble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ArrowLeftDouble;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/arrow-left-double.astro", void 0);

const $$Astro$4 = createAstro("https://astro-news-six.vercel.app");
const $$ArrowRightDouble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ArrowRightDouble;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/arrow-right-double.astro", void 0);

const $$Astro$3 = createAstro("https://astro-news-six.vercel.app");
const $$ArrowLeft01 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowLeft01;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/arrow-left-01.astro", void 0);

const $$Astro$2 = createAstro("https://astro-news-six.vercel.app");
const $$ArrowRight01 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowRight01;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/arrow-right-01.astro", void 0);

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { length, currentUrl, currentPage, baseUrl, prevUrl, nextUrl, lastUrl } = Astro2.props;
  const maxVisibleButtons = 4;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
  const endPage = Math.min(length, startPage + maxVisibleButtons - 1);
  const adjustedStartPage = Math.max(1, endPage - maxVisibleButtons + 1);
  const paginationList = Array.from(
    { length: endPage - adjustedStartPage + 1 },
    (_, i) => adjustedStartPage + i
  );
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "flex items-center mx-auto mt-8",
    !prevUrl && !nextUrl ? "hidden" : ""
  ], "class:list")}> <nav class="join"> ${`${baseUrl}/1` == `${currentUrl}` ? renderTemplate`<span class="join-item btn btn-sm btn-disabled" aria-label="First page"> ${renderComponent($$result, "ArrowLeftDouble", $$ArrowLeftDouble, {})} </span>` : renderTemplate`<a${addAttribute(`${baseUrl}/1`, "href")} class="join-item btn btn-sm" aria-label="First page"> ${renderComponent($$result, "ArrowLeftDouble", $$ArrowLeftDouble, {})} </a>`} ${prevUrl ? renderTemplate`<a${addAttribute(prevUrl, "href")} class="join-item btn btn-sm"> ${renderComponent($$result, "ArrowLeft01", $$ArrowLeft01, {})} <span class="hidden lg:block">Previous</span> </a>` : renderTemplate`<span class="join-item btn btn-sm btn-disabled"> ${renderComponent($$result, "ArrowLeft01", $$ArrowLeft01, {})} <span class="hidden lg:block">Previous</span> </span>`} ${paginationList.map((num) => renderTemplate`<a${addAttribute(`${baseUrl}${num == 1 ? "" : "/" + num}`, "href")}${addAttribute(`join-item btn btn-sm ${currentPage == num ? "btn-active pointer-events-none" : ""}`, "class")}> ${num} </a>`)} ${!nextUrl ? renderTemplate`<span class="join-item btn btn-sm btn-disabled"> <span class="hidden lg:block">Next</span> ${renderComponent($$result, "ArrowRight01", $$ArrowRight01, {})} </span>` : renderTemplate`<a${addAttribute(nextUrl, "href")} class="join-item btn btn-sm"> <span class="hidden lg:block">Next</span> ${renderComponent($$result, "ArrowRight01", $$ArrowRight01, {})} </a>`} ${lastUrl == currentUrl ? renderTemplate`<span class="join-item btn btn-sm btn-disabled" aria-label="Last page"> ${renderComponent($$result, "ArrowRightDouble", $$ArrowRightDouble, {})} </span>` : renderTemplate`<a${addAttribute(lastUrl, "href")} class="join-item btn btn-sm" aria-label="Last page"> ${renderComponent($$result, "ArrowRightDouble", $$ArrowRightDouble, {})} </a>`} </nav> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/components/shared/pagination.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$WideCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WideCard;
  const { article, isLast } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group w-full max-w-md mx-auto lg:max-w-full relative isolate flex flex-col lg:flex-row gap-4"> <div class="flex-shrink-0 aspect-square w-32 text-sm text-base-content/60 text-pretty capitalize hidden lg:flex pt-1"> ${getDateDistance(normalizeDate(article.data.publishedTime))} </div> <div${addAttribute([
    "flex-1 flex flex-col gap-4 lg:flex-row-reverse pb-2 lg:pb-4",
    isLast ? "border-b-0" : "border-b border-base-300"
  ], "class:list")}> <div class="w-full lg:w-60 aspect-video"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "src": article.data.cover, "alt": article.data.covert_alt ? article.data.covert_alt : article.data.title, "layout": "responsive", "loading": "eager", "class": "aspect-video rounded w-full h-full" })} </div> <div class="flex-1 space-y-2"> <h3 class="text-xl font-semibold lg:group-hover:underline"> <a${addAttribute(`/articles/${article.id}`, "href")}> <span class="absolute inset-0 z-10"></span> ${article.data.title} </a> </h3> <p class="text-base-content/80 max-w-xl text-pretty"> ${article.data.description} </p> </div> <div class="text-sm lg:hidden flex item-center text-base-content/70 pt-2"> <time class="flex items-center gap-1"${addAttribute(normalizeDate(article.data.publishedTime), "datetime")}> <span> ${getDateDistance(normalizeDate(article.data.publishedTime))} </span> </time> ${renderComponent($$result, "Divider", $$Divider, {})} <small class="flex items-center gap-1"> <span class="capitalize text-sm"> ${article.data.category.id} </span> </small> </div> </div> </li>`;
}, "/workspaces/FrostFoe/astro-news/src/components/cards/wideCard.astro", void 0);

export { $$WideCard as $, $$Pagination as a };
