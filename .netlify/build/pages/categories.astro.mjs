import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { $ as $$List } from '../chunks/list_COjq_h7j.mjs';
import { a as getEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
import { c as categoriesHandler } from '../chunks/categories_C5I1yADU.mjs';
import { $ as $$ArrowRight02, a as $$NewsCard } from '../chunks/arrow-right-02_AvTJF6G_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entry = await getEntry("views", "categories");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const articles = categoriesHandler.allCategoriesWithLatestArticles();
  return renderTemplate`${renderComponent($$result, "ListLayout", $$List, { "header": "All Categories", "entry": entry }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<ul class="w-full space-y-8 my-6">${articles.map((category) => {
    const { path, title, latestArticles } = category.data;
    const articleCount = category.data.count;
    return renderTemplate`<div class="flex flex-col items-start gap-4"><div class="flex items-center w-full justify-between gap-2 border-b border-accent/30"><h2 class="text-xl inline-flex items-center">${title}${" "}<span class="text-xs font-sans ml-2 text-primary">
(${articleCount} Articles)
</span></h2><a${addAttribute(`/categories/${path}/1`, "href")} class="group flex text-sm items-center gap-1 hover:gap-2 transition-all duration-200">
See All
<span class="transform group-hover:translate-x-1 transition-transform duration-200">${renderComponent($$result2, "ArrowRight02", $$ArrowRight02, { "size": "16" })}</span></a></div><div class="snap-x"><div class="flex overflow-x-auto pb-4 space-x-4 snap-x snap-proximity">${latestArticles.slice(0, 6).map((article, index) => renderTemplate`<div class="snap-start flex-none lg:flex-initial">${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "index": index })}</div>`)}</div></div></div>`;
  })}</ul>` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/categories/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
