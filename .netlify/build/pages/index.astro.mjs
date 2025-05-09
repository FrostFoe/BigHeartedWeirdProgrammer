import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderComponent, e as addAttribute, a as renderTemplate } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { g as getDateDistance, $ as $$Base } from '../chunks/base_Cg7v60DN.mjs';
import { r as renderEntry, a as getEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$ResponsiveImage } from '../chunks/_astro_assets_CN_SSaD9.mjs';
import { $ as $$Divider } from '../chunks/divider_BvI1eFpo.mjs';
import { c as categoriesHandler } from '../chunks/categories_C5I1yADU.mjs';
import { a as articlesHandler } from '../chunks/articles_BQkvpJjv.mjs';
import { $ as $$ArrowRight02, a as $$NewsCard } from '../chunks/arrow-right-02_AvTJF6G_.mjs';
import { $ as $$AuthorCard } from '../chunks/authorCard_CfH4v-R_.mjs';
import { a as authorsHandler } from '../chunks/authors_BXc97tMw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://astro-news-six.vercel.app");
const $$MainHeadline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainHeadline;
  const { article } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(article);
  const category = categoriesHandler.oneCategory(article.data.category.id);
  return renderTemplate`${maybeRenderHead()}<article class="group relative isolate flex flex-col-reverse md:flex-col gap-4"> <div class="aspect-video overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "src": article.data.cover, "alt": article.data.covert_alt ? article.data.covert_alt : article.data.title, "layout": "responsive", "loading": "eager" })} </div> <div class="flex flex-col gap-2"> <div> <h2 class="text-xl font-semibold lg:group-hover:underline underline-offset-2"> <a${addAttribute(`/articles/${article.id}`, "href")}> <span class="absolute inset-0 z-10 pointer-events-none"></span> ${article.data.title} </a> </h2> <p class="text-base-content/90 text-base max-w-lg"> ${article.data.description} </p> </div> <div class="flex items-center text-xs text-base-content/80 mt-2"> <span class="text-primary dark:text-secondary">${category.data.title}</span> ${renderComponent($$result, "Divider", $$Divider, {})} <span>${getDateDistance(remarkPluginFrontmatter.lastModified)}</span> </div> </div> </article>`;
}, "/workspaces/FrostFoe/astro-news/src/components/cards/mainHeadline.astro", void 0);

const $$Astro$2 = createAstro("https://astro-news-six.vercel.app");
const $$SubHeadlineCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SubHeadlineCard;
  const { article, isLast, isFirst } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(article);
  const category = categoriesHandler.oneCategory(article.data.category.id);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "group py-2 flex items-stretch gap-2 group relative isolate",
    isFirst ? "pt-0" : "pt-2",
    isLast ? "border-b-0 pb-0" : "border-b border-base-300"
  ], "class:list")}> <div class="flex flex-col flex-1"> <div class="flex items-center gap-2 mb-1"> <div class="flex-1"> <h3 class="text-base lg:group-hover:underline mb-1"> <a${addAttribute(`/articles/${article.id}`, "href")}> <span class="absolute inset-0 z-10 pointer-events-none"></span> ${article.data.title} </a> </h3> <p class="text-sm text-base-content/80 text-balance md:line-clamp-2 lg:line-clamp-3"> ${article.data.description} </p> </div> </div> <div class="flex items-center text-xs text-base-content/80 mt-1 lg:mt-auto"> <span class="text-primary dark:text-secondary">${category.data.title}</span> ${renderComponent($$result, "Divider", $$Divider, {})} <span>${getDateDistance(remarkPluginFrontmatter.lastModified)}</span> </div> </div> <div class="overflow-hidden w-[165px] h-[125px] md:w-[120px] md:h-full shrink-0"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "src": article.data.cover, "alt": article.data.covert_alt ? article.data.covert_alt : article.data.title, "loading": "eager", "widths": [120, 320], "class": "object-cover rounded w-full h-full" })} </div> </article>`;
}, "/workspaces/FrostFoe/astro-news/src/components/cards/subHeadlineCard.astro", void 0);

const $$Headlines = createComponent(($$result, $$props, $$slots) => {
  const mainHeadlineArticle = articlesHandler.mainHeadline();
  const subHeadlinesArticles = articlesHandler.subHeadlines();
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 gap-6 md:grid-cols-10 container pt-4 md:pt-8" data-pagefind-ignore="all"> <div class="col-span-1 md:col-span-6"> ${renderComponent($$result, "MainHeadline", $$MainHeadline, { "article": mainHeadlineArticle })} </div> <div class="col-span-1 md:col-span-4"> ${subHeadlinesArticles.map((article, index) => renderTemplate`${renderComponent($$result, "SubHeadlineCard", $$SubHeadlineCard, { "article": article, "isFirst": index === 0, "isLast": index === subHeadlinesArticles.length - 1 })}`)} </div> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/_home/headlines.astro", void 0);

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$HeaderSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderSection;
  const { title, link_title, link_url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between" data-pagefind-ignore="all"> <h2 class="text-xl font-bold">${title}</h2> <a${addAttribute(link_url, "href")} class="flex items-center gap-1 text-sm text-base-content/80 group"> <span class="group-hover:text-primary transition-all">${link_title}</span> <span class="group-hover:translate-x-0.5 transition-all group-hover:text-primary">${renderComponent($$result, "ArrowRight02", $$ArrowRight02, {})}</span> </a> </div>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/_home/headerSection.astro", void 0);

const $$LatestNews = createComponent(($$result, $$props, $$slots) => {
  const articles = articlesHandler.allArticles();
  return renderTemplate`${maybeRenderHead()}<section class="container pt-12 pb-0 space-y-4" data-pagefind-ignore="all"> ${renderComponent($$result, "HeaderSection", $$HeaderSection, { "title": "Latest News", "link_title": "View all", "link_url": "/articles" })} <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 md:grid-rows-2"> ${articles.slice(0, 6).map((article, index) => renderTemplate`${renderComponent($$result, "NewsCard", $$NewsCard, { "article": article, "index": index })}`)} </div> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/_home/latestNews.astro", void 0);

const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const authors = authorsHandler.limitAurhors(6);
  return renderTemplate`${maybeRenderHead()}<section class="container py-12" data-pagefind-ignore="all"> ${renderComponent($$result, "HeaderSection", $$HeaderSection, { "title": "Authors", "link_title": "View all", "link_url": "/authors" })} <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 sm:gap-y-12 xl:col-span-2 mt-4"> ${authors.map((author) => renderTemplate`${renderComponent($$result, "AuthorCard", $$AuthorCard, { "author": author })}`)} </ul> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/_home/authors.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entry = await getEntry("views", "home");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headlines", $$Headlines, {})} ${renderComponent($$result2, "LatestNews", $$LatestNews, {})} ${renderComponent($$result2, "Authors", $$Authors, {})} ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
